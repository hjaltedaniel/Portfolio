---
title: "Unlocking the long tail: two ways to make personalization useful"
description: How curated experiences and discovery can work together to turn more of your articles, guides and products into useful next steps.
slug: unlocking-the-long-tail
date: 2026-11-15
updated: 2026-11-13
published: true
---
![An editorial illustration of a reader discovering a relevant resource among a vast landscape of overlooked articles, with a coral path leading towards an open doorway.](/illustrations/long-tail/library-discovery.webp)

A website can have hundreds of useful articles and still behave as though it only has twelve.

The homepage promotes a handful. The navigation makes room for the main categories. Editors link to the pieces they know best. Somewhere underneath all that sits a detailed guide that would answer a visitor's exact question, if only they could find it.

The same thing happens with products. A large catalog is only valuable to a visitor if they can discover the part of it that matters to them.

When I spoke to ShoppingTomorrow in the Netherlands, I explored a distinction that I keep coming back to: personalization can mean curating an experience for a defined audience, and it can mean helping an individual discover their next useful thing.

Having worked at Umbraco HQ and now working at Relewise, I spend a lot of time thinking about the relationship between content and discovery. Both approaches interest me. They ask different things of the team running a website, and they become particularly useful when we combine them.

## Two different decisions

Imagine running a large knowledge portal for businesses. You publish practical guides, research, case studies, webinars and information about your advisory services.

A visitor arrives from a campaign aimed at smaller manufacturers. You want the page to speak to that audience: recognisable challenges, appropriate language and a relevant invitation to get help. An editor chooses the message and defines when it should appear.

That's **curated, rule-based personalization**. You decide which experience an audience should receive, and the system applies those decisions.

![Curated personalization: editors define an audience and rules, select a message and call to action, and deliver that experience to matching visitors.](/illustrations/long-tail/curated.svg)

Now imagine that visitor reading about energy efficiency, searching for heat recovery and opening a technical case study. Which three articles should appear next? Which upcoming webinar would help? Should a practical checklist come before an invitation to speak to an adviser?

That's the territory of **discovery-based personalization**: selecting and ranking relevant items from a larger pool using the context and signals available.

![Discovery-based personalization: current context and available behavioral signals inform the ranking of eligible articles, webinars and products, giving the visitor relevant next steps.](/illustrations/long-tail/discovery.svg)

I use these as working descriptions, rather than rigid categories of software. A recommendation can be manually curated. A segment can be informed by behavior. Discovery still needs rules. The useful distinction is the decision being made: **are we choosing the message for an audience, or prioritising individual items for this visit?**

| Practical question | Curated personalization | Discovery-based personalization |
| --- | --- | --- |
| What do we define? | Audiences, conditions and content variants | Eligible items, useful signals and ranking objectives |
| What changes for the visitor? | A headline, offer, CTA or page experience | Which articles, products or resources appear, and in what order |
| Where does effort grow? | More audiences and variants to maintain | More content to structure, signals to interpret and results to evaluate |
| Where is it especially useful? | Deliberate messaging and campaign experiences | Search and recommendations across a large collection |

## Why the long tail matters to conversion

The long tail is the collection of less frequently discovered items beyond the familiar popular ones. Individually, each may attract a small audience. That doesn't make each one useful, but some will be exceptionally useful in a particular situation.

A general guide to energy efficiency might attract a broad readership. A specialist article about recovering heat from a particular production process might help a much smaller group make a decision about contacting an adviser.

For that reader, the specialist article could be the bridge between interest and action.

![A conceptual popularity curve highlights a specialist guide in the long tail: less frequently discovered overall, but potentially highly relevant to one reader. No measured data is shown.](/illustrations/long-tail/long-tail.svg)

*The opportunity sits in the match between a resource and a need. A low position on a popularity curve tells us little about its value to a particular visitor.*

That's the conversion opportunity I find interesting. It gives us a reason to make more of our existing library discoverable without treating exposure itself as the goal.

Before changing the website, I'd define the action we're trying to support. For a retailer, that might be a completed purchase. For a knowledge portal, it might be a relevant webinar registration, a membership application or a qualified advisory enquiry. For a support library, it could be completing a task successfully without needing help.

Reading another article can be a useful intermediate step. It isn't, by itself, evidence that the website helped someone achieve anything.

## Follow one reader through the portal

Here's an illustrative journey, rather than a customer case study.

A production manager arrives at our fictional knowledge portal through a campaign about reducing energy costs. The landing page presents a message written for smaller manufacturers, with an invitation to explore practical improvements.

The visitor reads an introductory guide, then a case study about heat recovery. A recommendation area offers a more detailed technical guide and a relevant webinar. After reading the guide, the visitor registers for the webinar. Later, they might decide to request an advisory conversation.

![An illustrative reader journey moves from a curated campaign through topic exploration to a choice: register for a relevant webinar or continue reading. A later advisory enquiry is possible, not guaranteed.](/illustrations/long-tail/reader-journey.svg)

*The next step is an invitation. The visitor still decides whether to register, keep researching or leave with the answer they needed.*

The campaign gives us a reasonable starting context. Subsequent actions give us additional evidence about what might be useful. None of them proves the visitor's job title, budget or readiness to buy.

That's an important restraint. Someone researching heat recovery could be a student, a consultant or a production manager. A useful recommendation doesn't require us to pretend we know which one.

I'd keep the guidance helpful at each step and make the commercial invitation proportionate to the page. A technical guide can offer both a related resource and a clear route to advice. The reader gets to choose.

The same pattern works in commerce. A visitor reads a guide to growing vegetables on a balcony, explores compact planters, then finds advice on drainage alongside suitable accessories. The content helps them choose; the products give them a way to act. Those connections can be useful in both directions.

## Curate the frame, personalise what fills it

The two approaches can operate within the same page.

On our knowledge portal, an editor might create a campaign-specific introduction and a recommendation area labelled “Practical next steps for your business.” The editor defines the purpose of that area and the kinds of resources allowed inside it.

Discovery then selects the individual resources. Depending on the context, that could mean a technical article, a checklist or a webinar about the subject the visitor is exploring.

![A combined experience: a curated campaign message and CTA sit above resources selected by discovery within editorial eligibility rules. Both support the same conversion goal.](/illustrations/long-tail/together.svg)

This is also where editorial control remains essential. An expired webinar should be excluded. A withdrawn guide should disappear. A members-only resource needs the appropriate access treatment. If a visitor explicitly selects a country or industry, that choice should carry more weight than a weak behavioral guess.

I'd give each decision a clear owner. The editor owns the message, the purpose of the recommendation area and any mandatory content. Eligibility rules enforce language, publication status and access. Ranking chooses among the remaining items. That makes conflicting behavior easier to explain and debug.

For readers familiar with Umbraco Engage, its [segment-based personalization](https://docs.umbraco.com/umbraco-engage/marketers-and-editors/personalization) provides a concrete example of the curated side. Segments can inform variations on individual pages, across pages or by Document Type. Engage also supports implicit personalization, so the distinction here isn't whether behavior is involved. It's what we ask the system to choose.

In a combined implementation, that could mean an Engage-managed content variant containing a recommendation component whose items are selected by a discovery service. That's an architectural option, not an assumption that connecting two products automatically produces a coherent experience.

## What this looks like in an Umbraco implementation

I would start with one content type, one placement and one conversion goal. For our portal, that could be practical guides, a recommendation area below each guide, and registrations for relevant webinars.

There are four building blocks I'd want the team to agree on before writing much integration code.

### 1. A useful representation of the content

Umbraco remains where editors manage the content. The discovery layer needs a representation it can search or recommend: a stable ID, title, URL, summary, content type, language, topics and relevant eligibility information.

For a webinar, I'd include its date and registration status. For a technical guide, its review status might matter. For products, availability and market restrictions may determine whether an item belongs in the candidate pool.

Publish and update events need to keep that representation current. Unpublishing, deleting or restricting an item needs to remove it from discovery or update its eligibility too. Access restrictions must still be enforced when someone opens the resource.

Useful metadata helps us make sensible connections. It also lets us explain why a resource was eligible in the first place.

### 2. Context and signals with a clear meaning

The current article, an explicit topic selection and a search query can all help establish context. Where the site's consent and privacy setup permits behavioral tracking, views and subsequent actions can provide further signals.

Keep the distinctions intact. Showing a recommendation, clicking it and completing a registration are different events. If we record them as though they all mean “interest,” evaluation becomes much less useful.

A context-only module recommending resources related to the current article is a sensible baseline. It isn't individual behavioral personalization, but it gives us something useful to compare against and a fallback for visitors without history.

### 3. A component with a defined job

“Show three things that help the reader take the next step on this topic” is a better component brief than “add AI recommendations.”

Define eligible content types, exclusions, the number of items and the fallback. Exclude the page being read. Decide how to handle a slow response or an empty result. A curated set of relevant resources can keep the component useful when personalized results aren't available.

In an Umbraco and Relewise implementation, content synchronization and tracking would provide inputs to search and recommendation requests. Relewise's [behavioral tracking documentation](https://docs.relewise.com/docs/tracking/) includes content-view events as well as product-related events. The same overall design can be implemented with other discovery technology; the component's purpose should be clear before choosing a provider.

### 4. A feedback loop tied to the goal

Record when the module is actually shown, which resource is selected and whether a meaningful downstream action follows. Keep identifiers consistent so you can connect the recommendation to its destination and outcome.

A system that recommends articles needs feedback about article journeys. Tracking only purchases would leave much of a knowledge portal's value invisible.

## Measure useful discovery, not just activity

Personalization doesn't automatically unlock the long tail. A ranking that repeatedly favours popular items could make the same small set even more dominant.

I would measure both the outcome and how the experience distributes attention.

| Measure | What it helps us understand |
| --- | --- |
| Primary conversion rate | Whether eligible visitors complete the chosen action |
| Quality of the conversion | Whether registrations, enquiries or purchases lead to the outcomes we actually value |
| Recommendation click-through rate | Whether the placement attracts interest; a diagnostic rather than the final verdict |
| Coverage of eligible content | How much of the relevant library receives exposure and engagement |
| Concentration of exposure | Whether a few items still occupy most recommendation positions |
| Guardrails | Whether latency, abandonment or unsuccessful searches get worse |

Define the eligible library before calculating coverage. Including expired, restricted or irrelevant pages would make the denominator misleading. More coverage is only helpful if the newly discovered resources support useful journeys.

Where traffic allows it, I'd compare the new approach with a stable baseline through a controlled experiment. A stronger setup can compare default messaging with curated messaging, and baseline recommendations with discovery, including a group that receives both. That helps separate the contribution of each change and their interaction.

On a smaller site, I'd start with fewer variants and acknowledge the uncertainty. A handful of extra enquiries isn't enough to declare a winner.

I'd also resist comparing everyone who clicked a recommendation with everyone who didn't. People who click may already be more motivated. That comparison describes behavior; it doesn't establish that the recommendation caused the conversion.

## Make the next useful step easier to find

I think the most promising starting point for personalization is often already sitting in the CMS: a carefully researched guide, a useful case study or a product that solves a very specific problem. Someone has done the work to create it. The remaining challenge is connecting it with the person who needs it, at a moment when it can help.

Curated personalization gives that connection a deliberate frame. An editor can explain why the subject matters to an audience, choose an appropriate invitation and take responsibility for the message. Discovery makes it practical to select relevant resources from a collection that has grown beyond what anyone can maintain by hand.

Together, they give us a way to combine editorial judgement with the breadth of the library. A knowledge portal can help a reader build enough understanding to join a webinar or ask for advice. A retailer can connect useful guidance with products that fit the problem. In both cases, conversion follows from helping someone make progress.

For a first experiment, I'd bring an editor, a developer and the person responsible for the conversion goal together around one brief:

> Help readers of our energy-efficiency guides find a relevant next resource, and test whether that leads to more registrations for the right webinar.

Choose one placement. Agree on the eligible resources and a dependable fallback. Decide which message needs editorial control and which selection can adapt to the visit. Measure completed registrations against a stable baseline, alongside the quality and breadth of what gets discovered.

That is a manageable piece of work with a question worth answering. If it helps, expand from what you've learned.

The guide buried in your portal doesn't have to become your most popular page to earn its place. It needs to reach someone whose next decision it can help. **That's the long-tail opportunity I'd build personalization around: making more of what we already know useful at the moment someone is ready to act.**
