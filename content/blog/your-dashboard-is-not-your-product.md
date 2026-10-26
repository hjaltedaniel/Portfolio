---
title: Your dashboard is becoming one way in. Build for the others.
description: What a household budget and a demo builder taught me about APIs, MCP and designing SaaS that customers can use beyond your dashboard.
slug: your-dashboard-is-not-your-product
date: 2026-10-26
updated: 2026-10-26
published: true
---
I've built a service for our household budget. I work with it through ChatGPT, alongside a bank connection provided by BankMCP.

The budget service holds the records and performs the calculations. The conversation gives me a way to ask questions and review changes.

Building it left me thinking about the software I use and build at work. If a service can do something useful, why should its own dashboard be the only place I can ask it to do that thing?

That's becoming a product question, not just an integration question.

## The dashboard is one place the work can happen

We've spent years making dashboards easier to navigate. Better filters, clearer settings, fewer clicks. That work still matters.

But it assumes the customer has already come to our application.

Increasingly, I want a service to participate in work that's happening somewhere else: a conversation, a coding environment or a workflow spanning several products. I want its capabilities available there, with the same rules and permissions I'd expect in its own interface.

An API provides a programmatic way to use those capabilities. MCP adds a standard way for an AI application to discover and call tools exposed by a service. The [MCP tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) defines names, descriptions and input schemas, and makes clear that the protocol doesn't prescribe one particular user interface.

That distinction is useful. A tool can sit behind a conversation, but the user experience doesn't have to be a chat box for every task.

## There are already concrete examples

When Anthropic [introduced MCP in November 2024](https://www.anthropic.com/news/model-context-protocol), it framed the problem as connecting assistants to data and tools that would otherwise remain isolated. The proposal was a shared connection standard rather than a separate custom integration for every pairing.

Commerce offers another example. Shopify and Google co-developed the Universal Commerce Protocol, which Shopify [describes in its January 2026 engineering article](https://shopify.engineering/UCP). It lets agents and merchants discover supported capabilities and work through transactions, including handing the buyer to a human-facing flow when needed. UCP and MCP serve different purposes; the relevant point here is that a merchant's capabilities can participate in an experience outside its own storefront.

Those examples don't establish that dashboards are disappearing or that every customer wants an agent. They do show that serving customers through another interface is already a concrete engineering concern.

My reading is that more software teams will need to design for both the person using their application and the authorised tool acting on that person's behalf.

## My household budget is a small version of this

[BankMCP](https://bankmcp.dk/) exposes read-only access to bank balances and transactions through Enable Banking. My own BudgetService holds the household plan and ledger.

In a conversation, I can bring those capabilities together. Neither service needs to anticipate every screen or comparison I might want.

The important boundary remains in the services. BudgetService calculates the totals, checks household access and validates proposed changes. The assistant helps me express an intention and understand the result.

That is what I want from other software too: dependable capabilities I can use in the context of the work I'm already doing.

## I'm asking the same question about my demo builder

I've also been building a demo builder. Now I want to expose its capabilities through MCP.

If I'm already working in Codex, preparing a demo and discussing what it should contain, why should I have to leave that context to create it?

The interface I want could let me request a demo, inspect what is missing, review the proposed setup and start the work after approval. That's the direction I want to take; I'm not describing a completed MCP integration.

A dashboard would still be useful for inspecting the result or making visual adjustments. But moving to it should serve the task. It shouldn't be a requirement imposed by the way I happened to build the first interface.

The design exercise changes when I ask: what would another client need to complete this workflow correctly?

It needs clear inputs. It needs validation errors it can act on. If creation takes time, it needs a job identifier and a way to check progress. It needs to know whether retrying will create a second demo. And it needs an unambiguous result, including somewhere I can inspect what was created.

Those are product features, even when they don't appear as a button.

## What becomes more important for SaaS

I don't think the answer is to wrap every dashboard button in an MCP tool and declare the product ready.

A screen often supplies context implicitly. The selected account, the active workspace, the meaning of an empty field and the consequence of clicking “save” may all be obvious to a person looking at it. An external client needs those things made explicit.

Here are the areas I'd put more attention into.

**Actions with clear meaning.** “Create a demo from this validated definition” is easier to reason about than an operation whose behaviour depends on hidden screen state. Name the action, specify its inputs and describe what success changes.

**Permissions that travel with the request.** A connection needs to act for an identifiable user, within the right account and scope. Access to read records shouldn't quietly imply permission to publish, delete or spend. Revoking access needs to work beyond signing out of the dashboard.

**Results that explain what actually happened.** A client needs to distinguish complete success from a partial import or a background job that has only just started. Stable identifiers, useful errors and source information help the person check the outcome.

**Predictable retries and corrections.** Connections fail. Requests time out. A client may not know whether an operation finished. Products need defined retry behaviour and a way to inspect and correct the result.

**Review at the right moment.** A consequential action needs a clear proposal and an appropriate approval step. The MCP specification itself [recommends visible tool activity and human control](https://modelcontextprotocol.io/specification/2025-06-18/server/tools). The service still has to enforce its own permissions and validation; a tool description isn't an access-control system.

These are familiar engineering concerns. What changes is how directly they shape the everyday customer experience when the customer arrives through another product.

## The commercial question gets interesting too

If customers can use your service without regularly opening your application, how will you recognise that they're getting value?

A successful external workflow may produce no dashboard session at all. I'd want to measure completed tasks, reliable outcomes and whether people can recover when something fails, alongside the usual interface metrics.

It also raises questions about packaging and pricing. Does a plan include tool access? What counts as usage when one user request causes several calls? Can the customer understand the cost before starting a large job?

I don't have a universal answer. But I'd rather make those decisions deliberately than discover that a product's pricing and permissions only make sense when every action is a person clicking once.

There's a distribution question as well. If customers encounter your capabilities through another assistant, some of the relationship sits in that assistant's interface. I'd want clear attribution, a way back to the underlying records and a useful human-facing product when deeper inspection is needed.

My bet is that reliability, accessible capabilities and trust will carry more weight in that environment. That's a product thesis, not a claim that the market has already settled on one model.

## A useful exercise for the next thing you build

Take one valuable workflow in your product and imagine a customer completing it without opening your dashboard.

Can an authorised client discover the action, supply the required context, preview the consequences, execute it and verify the result? Can the person stop it or recover from a mistake?

If that exercise exposes hidden assumptions, you've found useful product work. Build a small API capability, connect it through MCP where that helps, and test the whole task from outside your own interface.

I still want well-designed dashboards. I also want software that can meet me where I'm working.

For my household budget, that's ChatGPT. For creating a demo, I want it to be Codex. The service should be ready when the front door changes.
