---
title: "Stronger together: rule-based and discovery-based personalization"
description: How rule-based personalization in Umbraco Engage and discovery-based resource selection can complement each other to make visitors feel understood at scale.
slug: rule-based-and-discovery-based-personalization
date: 2026-11-15
updated: 2026-11-16
published: true
---
![An editorial illustration of a reader discovering a relevant resource among a vast landscape of overlooked articles, with a coral path leading towards an open doorway.](/illustrations/long-tail/library-discovery.webp)

A website can have hundreds of useful articles and still behave as though it only has twelve.

The homepage promotes a handful. The navigation makes room for the main categories. Editors link to the pieces they know best. Somewhere underneath all that sits a detailed guide that would answer a visitor's exact question, if only they could find it.

The promise of personalization is strong: a website that responds to what matters to you and makes you feel understood. In my experience, few organisations deliver on that promise consistently. A message that recognises your situation and a guide that answers your specific question can both make that promise tangible. The strongest experience connects the two.

Having worked at Umbraco HQ and now working at Relewise, I keep coming back to the gap between that ambition and the work required to maintain it. When I spoke to ShoppingTomorrow in the Netherlands, I explored two decisions that often sit under the same personalization label: choosing a message for an audience, and choosing useful resources for an individual visit.

That distinction matters because the work scales differently. Editors can deliberately shape a campaign experience. Expecting them to maintain every useful connection between hundreds of resources, audiences and changing visitor needs is a much bigger ask.

**Discovery-based personalization can scale that selection.** It can rank eligible resources for each visit without an editor having to handpick every combination. The work shifts towards content quality, eligibility and evaluating whether the selections help.

But scale alone won't make someone feel understood. A ranking that keeps favouring popular content can leave the same twelve pages in front of everyone. The question is whether discovery can connect a specific need with something useful that the visitor would otherwise miss.

For a content-rich Umbraco website, I'd combine deliberate editorial messaging with discovery that adapts the resource selection to the visit. **Rule-based personalization gives the experience direction. Discovery makes relevant selection practical across a growing library.**

## Rule-based and discovery-based personalization make different decisions

Imagine running a large knowledge portal for businesses. You publish practical guides, research, case studies, webinars and information about your advisory services.

A visitor arrives from a campaign aimed at smaller manufacturers. You want the page to speak to that audience: recognisable challenges, appropriate language and a relevant invitation to get help. An editor chooses the message and defines when it should appear.

That's **curated, rule-based personalization**. You decide which experience an audience should receive, and the system applies those decisions.

Umbraco Engage provides a concrete example through its [segment-based personalization](https://docs.umbraco.com/umbraco-engage/marketers-and-editors/personalization). Editors define a segment and tailor the experience for it on a specific page, across multiple pages or by Document Type. On our portal, that could mean an introduction about energy costs for smaller manufacturers and an invitation to explore improvements relevant to their business.

The editorial decision matters. You choose which challenges to acknowledge, how to explain your offer and which invitation fits that audience. Engage also supports implicit and explicit personalization, so rule-based doesn't mean ignoring behavior. The distinction is what the system is choosing: an editorially defined experience for the audience.

![Curated personalization: editors define an audience and rules, select a message and call to action, and deliver that experience to matching visitors.](/illustrations/long-tail/curated.svg)

Now imagine that visitor reading about energy efficiency, searching for heat recovery and opening a technical case study. Which three articles should appear next? Which upcoming webinar would help? Should a practical checklist come before an invitation to speak to an adviser?

That's the territory of **discovery-based personalization**: selecting and ranking relevant items from a larger pool using the context and signals available.

Here, the team defines which resources are eligible and what a useful selection should achieve. The discovery layer chooses the individual items for the visit. A reader exploring heat recovery may need a different technical guide from someone exploring insulation, even if both belong to the same audience segment.

![Discovery-based personalization: current context and available behavioral signals inform the ranking of eligible articles, webinars and products, giving the visitor relevant next steps.](/illustrations/long-tail/discovery.svg)

These decisions overlap: recommendations can be curated, and audience segments can use behavior. The distinction I find useful is **choosing the message for an audience versus prioritising individual resources for this visit**.

| Practical question | Curated, rule-based personalization | Discovery-based personalization |
| --- | --- | --- |
| What do we define? | Audiences, conditions and content variants | Eligible items, useful signals and ranking objectives |
| What changes for the visitor? | A headline, offer, CTA or page experience | Which articles, products or resources appear, and in what order |
| Where does effort grow? | More audiences and variants to maintain | More content to structure, signals to interpret and results to evaluate |
| Where is it especially useful? | Deliberate messaging and campaign experiences | Search and recommendations across a large collection |

## A specialist guide can matter more than a popular one

The long tail is the collection of less frequently discovered items beyond the familiar popular ones. Individually, each may attract a small audience. That doesn't make each one useful, but some will be exceptionally useful in a particular situation.

A general guide to energy efficiency might attract a broad readership. A specialist article about recovering heat from a particular production process might help a much smaller group make a decision about contacting an adviser.

For that reader, the specialist article could be the bridge between interest and action.

![A conceptual popularity curve highlights a specialist guide in the long tail: less frequently discovered overall, but potentially highly relevant to one reader. No measured data is shown.](/illustrations/long-tail/long-tail.svg)

*The opportunity sits in the match between a resource and a need. A low position on a popularity curve tells us little about its value to a particular visitor.*

For our portal, I'd choose a concrete outcome before changing the experience: registrations for a relevant webinar or qualified advisory enquiries. Reading another article can be a useful step towards either. It isn't, by itself, evidence that we helped someone achieve anything.

## Follow one reader through the portal

Here's an illustrative journey, rather than a customer case study.

A production manager arrives at our fictional knowledge portal through a campaign about reducing energy costs. The landing page presents a message written for smaller manufacturers, with an invitation to explore practical improvements.

The visitor reads an introductory guide, then a case study about heat recovery. A recommendation area offers a more detailed technical guide and a relevant webinar. After reading the guide, the visitor registers for the webinar. Later, they might decide to request an advisory conversation.

![An illustrative reader journey moves from a curated campaign through topic exploration to a choice: register for a relevant webinar or continue reading. A later advisory enquiry is possible, not guaranteed.](/illustrations/long-tail/reader-journey.svg)

*The next step is an invitation. The visitor still decides whether to register, keep researching or leave with the answer they needed.*

Here, “feeling understood” has a practical meaning. The visitor has moved beyond general energy advice into heat recovery. The next resources reflect that change instead of sending them back to the portal's most popular articles.

The campaign provides starting context; subsequent actions help refine the selection. They don't prove a job title, budget or readiness to buy. Someone researching heat recovery could also be a student or consultant. I'd offer both a useful resource and a route to advice, letting the reader choose.

The same pattern works in commerce. A visitor reads a guide to growing vegetables on a balcony, explores compact planters, then finds advice on drainage alongside suitable accessories. The content helps them choose; the products give them a way to act. Those connections can be useful in both directions.

## Stronger together: curate the frame, personalise what fills it

This is where I think personalization becomes strongest: the message and the resource selection support each other on the same page.

On our knowledge portal, an editor might create a campaign-specific introduction and a recommendation area labelled “Practical next steps for your business.” The editor defines the purpose of that area and the kinds of resources allowed inside it.

Discovery then selects the individual resources. Depending on the context, that could mean a technical article, a checklist or a webinar about the subject the visitor is exploring.

![A combined experience: a curated campaign message and CTA sit above resources selected by discovery within editorial eligibility rules. Both support the same conversion goal.](/illustrations/long-tail/together.svg)

This is also where editorial control remains essential. An expired webinar should be excluded. A withdrawn guide should disappear. A members-only resource needs the appropriate access treatment. If a visitor explicitly selects a country or industry, that choice should carry more weight than a weak behavioral guess.

I'd give each decision a clear owner. The editor owns the message, the purpose of the recommendation area and any mandatory content. Eligibility rules enforce language, publication status and access. Ranking chooses among the remaining items. That makes conflicting behavior easier to explain and debug.

In an Umbraco implementation, an Engage-managed content variant could contain a recommendation component whose resources are selected by a discovery service. Engage shapes the message for the audience; discovery adapts the selection within that experience.

For the manufacturer exploring heat recovery, the introduction can explain why the subject matters to a smaller business while the component offers a specialist guide and an upcoming webinar. The message makes the resources meaningful; the resources give the message a useful next step. That is the combined experience I'd aim for.

## What this looks like in an Umbraco implementation

I would start with one content type, one placement and one conversion goal. For our portal, that could be practical guides, a recommendation area below each guide, and registrations for relevant webinars.

Before integrating anything, I'd agree on three things with the team.

### 1. Which content is eligible?

The discovery layer needs enough information to select a useful resource: a stable ID, title, URL, summary, language, topics and content type. A webinar also needs its date and registration status; a guide may need a review status.

Keep that information current when editors publish, update, restrict or remove content. Access restrictions must still be enforced when someone opens the resource. Scaling the selection is only useful if the resources it selects are available and appropriate.

### 2. What can the component use to choose?

Start with the article being read, an explicit topic selection or a search query. Where the site's consent and privacy setup permits it, behavioral history can refine those choices. A related-content module based only on the current article is a useful baseline and a fallback for visitors without history; it isn't individual behavioral personalization.

Give the component a clear brief: “Show three resources that help the reader take the next step on this topic.” Exclude the current page and agree on a curated fallback for empty or slow responses.

### 3. How will we know if it helped?

Record when recommendations are shown, which resources are selected and whether a registration or enquiry follows. Those are different events, and the distinction matters when evaluating the result. Keep identifiers consistent so the team can connect the placement, destination and outcome.

This is where the scaling argument needs to hold up in practice. Adding another eligible guide should make it available for relevant journeys without requiring an editor to revisit every page that might recommend it. Editors still own its quality and suitability. They no longer have to maintain every individual connection.

## Measure useful discovery, not just activity

To check whether discovery reaches beyond the usual twelve pages, I would measure both the outcome and how the experience distributes attention.

| Measure | What it helps us understand |
| --- | --- |
| Primary conversion rate | Whether eligible visitors complete the chosen action |
| Quality of the conversion | Whether registrations and enquiries lead to the outcomes we actually value |
| Recommendation click-through rate | Whether the placement attracts interest; a diagnostic rather than the final verdict |
| Coverage of eligible content | How much of the relevant library receives exposure and engagement |
| Concentration of exposure | Whether a few items still occupy most recommendation positions |
| Guardrails | Whether latency, abandonment or unsuccessful searches get worse |

Define the eligible library before calculating coverage. Including expired, restricted or irrelevant pages would make the denominator misleading. More coverage is only helpful if the newly discovered resources support useful journeys.

Compare discovery with a stable baseline through a controlled experiment where traffic allows it. Keep the campaign message unchanged initially so you can evaluate the resource selection. Test the combined effect of messaging and discovery later, when you have enough traffic to separate their contributions.

On a smaller site, start with fewer variants and acknowledge the uncertainty. A handful of extra enquiries isn't enough to declare a winner.

I'd also resist comparing everyone who clicked a recommendation with everyone who didn't. People who click may already be more motivated. That comparison describes behavior; it doesn't establish that the recommendation caused the conversion.

## Start with one useful next step

For a first experiment, I'd bring an editor, a developer and the person responsible for the conversion goal together around one brief:

> Help readers of our energy-efficiency guides find a relevant next resource, and test whether that leads to more registrations for the right webinar.

Choose one placement, agree on eligible resources and a dependable fallback, and measure registrations against a stable baseline. Check which resources receive attention as well as whether the registrations are useful. Expand from what you learn.

The promise of personalization becomes credible when the experience responds to what someone is trying to do. Rule-based personalization lets editors deliberately shape the message and invitation. Discovery connects that experience with relevant resources across a growing library, without asking editors to build every journey by hand. Together, they give us a practical way to make more visitors feel understood.

The guide buried in your portal doesn't have to become your most popular page to earn its place. It needs to reach someone whose next decision it can help.
