---
title: My household budget has a new front door. It's ChatGPT.
description: How I combined BankMCP with a small budget service to work with our household finances in ChatGPT—and a practical guide to doing the same with a spreadsheet workflow.
slug: household-budget-chatgpt
date: 2026-10-26
updated: 2026-10-26
published: true
---
Our household budget used to live in a spreadsheet. More precisely, a Numbers workbook.

It held the things you'd expect: income, fixed expenses, money set aside for everyday spending, and decisions about what to do with the remainder.

A spreadsheet is quite good at that. But I wanted to work with the budget by asking questions and following up on the answers. I also wanted to bring actual bank transactions into the picture without making myself the permanent connection between two systems.

So I built a small service for our household and connected it to ChatGPT. Alongside it, I connected BankMCP.

The result is a different way into our finances: the budget has its own persistent home, the bank remains the source of bank records, and I can work with both through a conversation.

## A proper shout-out to BankMCP

[BankMCP](https://bankmcp.dk/) made an important part of this possible. It's an open-source MCP server that connects to your own bank accounts through Enable Banking and exposes tools for reading balances and transactions. You run your own copy. It has no payment tools. Its [questions page](https://bankmcp.dk/questions/) explains the setup and how data passes from the bank through Enable Banking and your server to your assistant.

That gave me a bank connection to build alongside, rather than a banking integration to build from scratch.

MCP stands for Model Context Protocol. For this project, the useful idea is straightforward: an assistant can discover named tools and call them to retrieve information or request an action. A conversation can therefore work with a service, rather than depend on whatever I last pasted into it.

BankMCP supplies the bank records. My service supplies the household budget and the rules for maintaining it. Those are separate responsibilities.

## The budget lives outside the chat

I called my part BudgetService. It's a private service for one household, with a database, an API and an MCP connection.

It keeps track of income, fixed expenses, variable spending buckets and allocations of the surplus. It can return an overview, list budget items and show the transactions recorded against them. For variable buckets, it calculates what's left in the calendar month and a spending pace for the current week.

Here are illustrative requests that fit those capabilities:

> What's left in our variable spending buckets this month?
>
> Show me the transactions recorded against groceries.
>
> Preview a change to this budget item from next month.

The important part happens underneath the conversation. The service calculates the amounts. ChatGPT can explain them and help me decide what to look at next.

The budget doesn't disappear when a conversation ends, and a persuasive answer doesn't get to invent a new calculation rule.

## Bank transactions and budget entries are different things

A bank transaction says that money moved. A budget entry says how we've accounted for it in our household plan.

Bringing the two together still requires judgement. A merchant name doesn't always tell you the right category. A transfer between your own accounts shouldn't automatically become household spending. A refund needs to be handled consistently.

My setup supports importing historical transactions into the budget ledger. The workflow previews the proposed entries before saving them. Stable source identifiers allow an import to be retried without recording the same source transaction twice.

That matters more than it might sound. If an import stops halfway through, I want to resume it and understand which rows were saved, skipped or rejected. I don't want to guess whether a reassuring message means every row arrived.

This isn't an unattended promise that every purchase will always categorise itself correctly. It's a way to retrieve records, review how they belong in the budget and save the result.

## Changes should be visible before they become real

I wanted the convenience of a conversation without making a casual sentence an invisible edit to our finances.

For budget changes through MCP, the service separates previewing from committing. It returns the proposed change and a short-lived token bound to that preview and the person making it. After confirmation, it checks that the submitted change matches.

Historical postings also remain in the ledger. Corrections use reversing entries, so there's a record of what happened. Budget amounts have effective dates, which lets a new amount start from a particular date while retaining the earlier version.

None of these operations moves money at the bank. They're changes to our private budget records.

A few fairly ordinary engineering choices make the conversation more useful: calculate money in whole øre, check who can access the household, preserve history and make retries safe. The conversational part sits on top of that foundation.

## What I like about the result

I can start with a question instead of deciding which view to open.

I can ask for an overview, investigate a category and then review a change in the same conversation. BankMCP and BudgetService each contribute their part, without needing to become one enormous application.

There is still software to maintain. Authentication, hosting, changing bank consents and checking imports don't disappear because the interface is conversational. And information returned to the assistant is shared with that assistant, so its privacy settings matter too.

But the project has given me a useful pattern: take a workflow I already understand, give its data and rules a persistent home, then make its useful actions available where I want to work.

## A practical guide: turn a spreadsheet workflow into a service

You can use this approach for a household budget, a project tracker, an equipment register or another spreadsheet that has quietly become a small application.

### 1. Pick three jobs the spreadsheet does

Write down actual questions and actions. For a budget, mine might be: show the plan, calculate what's left and change an amount from a particular date.

Keep the first version that small. You need a useful slice of the workflow before you need a replacement for every tab.

### 2. Translate cells into records and rules

List the things your spreadsheet contains, give each a stable identifier, and describe the calculations in plain language.

For example: a budget item has a name and type; an amount has a frequency and effective date; a transaction has a date, signed amount and budget item. Decide how refunds, rounding and month boundaries work.

This is where spreadsheet conventions become explicit. A colour or a note you understand instinctively needs a clear meaning in the service.

### 3. Prove the calculations before connecting an assistant

Choose a small, anonymised example and record the spreadsheet's expected totals. Implement the same rules in ordinary code and compare the results.

Include an awkward case: a refund, an annual expense converted to a monthly amount or a change that starts next month. The assistant should call those calculations, not reproduce the formulas from memory.

### 4. Put the records somewhere persistent

Use a database suited to the size of the project. My implementation uses a Cloudflare Worker and D1; that's one choice, not a requirement.

Import a small sample first and reconcile it against the spreadsheet. Keep an export and recovery route. You should be able to explain every difference before importing the rest.

### 5. Expose a few useful operations

Start with read-only API operations such as “list budget items” and “get bucket status”. Then expose those same capabilities through MCP tools with clear names, inputs and outputs.

Keep the business rules in the service so every interface gets the same answer. Require authentication and check access on the server. Connect the assistant using the authenticated connection method it supports; keep passwords and secret keys out of prompts.

### 6. Connect external records separately

For bank data, look at [BankMCP's setup guide](https://bankmcp.dk/) and check that your bank is supported. Follow its registration and consent process, then connect your assistant to your own server.

Read a small date range and compare it with your bank's records. Review the proposed categorisation before saving anything to your budget. Give imported rows stable source identifiers so retries don't create duplicates.

### 7. Add writes with preview, confirmation and a recovery path

Once the read-only version is trustworthy, add one action. Show exactly what it will change, ask for confirmation and validate the change again on the server. Define how corrections work.

Try it on a small example, check the saved result and test the same request twice. Only then expand to more actions or larger imports.

A useful starting brief for your coding assistant is:

> Help me turn this spreadsheet workflow into a small private service. First identify its records, calculations and three useful operations. Use anonymised examples to verify the calculations against the spreadsheet. Build a read-only API and MCP connection first. Keep access checks and calculations on the server. Before adding writes, design a preview, confirmation and correction flow. Ask me about ambiguous spreadsheet rules before implementing them.

You don't need to start with a new dashboard. Start with one question your spreadsheet already answers, make the answer dependable, and give yourself a new way to ask it.
