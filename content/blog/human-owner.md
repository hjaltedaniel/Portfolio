---
title: Automation still needs a human owner
description: A useful automation needs someone responsible for its decisions, exceptions and continued usefulness.
slug: human-owner
date: ""
updated: 2026-10-02
published: false
---
An automated process can run without someone pressing a button each time. That doesn't mean it should run without anyone being responsible for it.

I think ownership is one of the least glamorous and most useful parts of automation. Who knows what the system is supposed to do? Who receives the exceptions? And who can decide that it needs to stop?

## Ownership is more than receiving an alert

An alert is only useful if someone can act on it. The owner needs to understand the intended outcome, have access to the relevant information, and know how to pause the process or use the manual alternative.

That person doesn't have to have written the integration. They do need enough context to recognise when its output is no longer useful.

## Decide what can happen automatically

Here's an illustrative starting point for a workflow that turns an enquiry into a draft quote. It isn't a customer case or a universal approval policy.

| Step | Sensible first boundary |
|---|---|
| Collect information from the enquiry | Automate extraction; keep a link to the source |
| Match a customer or product | Proceed on an unambiguous match; flag uncertainty |
| Prepare a draft | Use approved information and show missing fields |
| Change prices or promise delivery | Require a responsible person's approval |
| Send the quote | Keep human approval in the first version |

The useful conversation is about the consequences of a mistake. A missing note and an incorrect promise to a customer aren't the same kind of problem.

## Give exceptions somewhere to go

Before calling the process finished, I'd want answers to these questions:

- Where do incomplete or uncertain tasks appear?
- Who checks that queue, and when?
- Can they see the original information and the system's output?
- Can the task be completed manually without starting from scratch?
- What should cause the automation to pause?

I'd also test a missing customer, contradictory information, and an unavailable connected system. Not because those are exotic cases, but because ordinary work is rarely as tidy as a demo.

## Keep paying attention

Ownership continues after launch. Review the exceptions, talk to the people using the output, and check whether the original assumptions still hold.

For me, human control isn't about adding approval to every click. It's about knowing where judgement belongs — and making sure someone has the information and authority to exercise it.
