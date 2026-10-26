---
title: I pay the bills. Why is getting my energy data a side project?
description: How I connected electricity, district heating and home charging data to ask better questions about my usage—and why this should be easier for everyone.
slug: my-energy-data
date: 2026-10-26
updated: 2026-10-26
published: true
---
I can log in and see my electricity consumption. I can open another service and look at my district heating. And I can open an app to see how much electricity I've used charging the car.

But the moment I want to ask a question across those services, I'm the integration layer.

Different logins. Different date filters. Different ways of presenting the numbers. The information exists, but getting it into a form I can actually work with becomes a small project of its own.

So I built something for myself: a private connection to the APIs behind those services, which lets me explore my usage through ChatGPT.

It has been a satisfying project. It has also left me wondering why it needed to be a project at all.

## The useful part starts with a question

I didn't set out to build another energy app. I wanted to make it easier to understand what was happening at home.

How much electricity did I use over a particular period? What did that consumption cost, including VAT? How does one week compare with another? And how much of the picture can I explain by looking at home charging?

Those are ordinary questions. Answering them shouldn't depend on whether each provider happened to put the right comparison in its dashboard.

My setup now gives me tools to retrieve electricity consumption, calculated consumption costs and invoices; district heating readings and documents; and the home charging sessions returned by Spirii. I can ask for a period in plain language and use those tools to get the underlying records.

The appeal is being able to follow a question. If an answer makes me curious, I can ask the next one without starting again in another portal.

## Looking underneath the dashboard

A dashboard needs to get its numbers from somewhere. In this project, following that trail meant working with several very different interfaces.

The electricity integration uses the documented CUBS Selfcare API. For district heating, I traced the requests and application code behind the E|Forsyning web app used by my local provider. Home charging comes through the API used by the Spirii app.

That distinction matters. A documented API gives you a starting point and something to build against. An undocumented interface requires you to work out how the existing application behaves, and it can change without warning.

Even authentication varied. The electricity connection signs in and renews its token when needed. The heating connection reproduces the web app's challenge-based login. The charging connection uses an app token that currently needs manual replacement.

I enjoy figuring these things out. But having to understand three different authentication approaches to ask questions about my own household usage feels like a fairly good description of the problem.

## Getting a number isn't the same as understanding it

Some of the most useful work happened after I could retrieve the data.

A missing reading must stay missing. Treating it as zero would make a comparison look reassuringly precise while quietly making it wrong.

Electricity consumption costs and invoice totals also answer different questions. An invoice can include subscriptions, advance payments or adjustments that aren't part of the consumption cost for the period I'm examining.

Heating has its own distinctions. The provider's calculated annual account can include forecasts and payments; it isn't interchangeable with an issued bill. And a charging session's start and end times don't establish that the car was drawing power continuously throughout that window.

These details matter even more when an AI assistant is presenting the answer. A fluent explanation doesn't repair an incomplete dataset. I've built the tools to expose gaps and withhold comparisons when the readings don't support them.

The result should help me understand what I know, including where the data stops.

## Start with one small connection

If this makes you curious about your own data, I'd start with one question and one provider.

1. **Choose something you actually want to know.** A comparison between two weeks is a better first goal than collecting everything indefinitely.
2. **Look for an official API or export.** If you're technically curious, your browser's Network tab can also help you understand how your own customer portal retrieves its data.
3. **Keep the first version read-only.** Retrieving consumption is enough to make something useful.
4. **Check a small period against the provider's own view.** Pay attention to units, dates, VAT and missing readings before trusting a larger analysis.
5. **Keep credentials private.** My connection runs server-side, with access restricted to me. Passwords and tokens aren't part of the conversation or the answers.

You don't need a conversational interface to benefit. A spreadsheet or a small script might answer your question perfectly well. I like being able to ask follow-up questions, so I built around that.

## A request to the people sitting on the data

If you work at a utility company—or any organisation holding information that could help your customers understand their own lives—please think about how they can access it beyond your dashboard.

Give them a documented API. Offer a usable export. Make it possible to grant limited, read-only access to a tool they choose, and revoke it again. Explain the units, the time periods and what a missing value means.

Good authentication belongs in that experience. Having to dig through application code, reproduce login flows and manually replace tokens shouldn't.

You don't have to predict every question a customer might ask or build every interface they might prefer. Give them a clear, secure way to use their data, and let them surprise you with what they do next.

I enjoyed building this. I would love for the next person not to have to.
