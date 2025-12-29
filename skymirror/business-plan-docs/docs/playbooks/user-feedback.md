---
sidebar_position: 6
title: "User Feedback Framework"
---

# Skymirror User Feedback & Product Development Framework

## Executive Summary

This framework establishes Skymirror's approach to collecting, analyzing, and acting on user feedback to drive product development. It covers the complete feedback loop from collection to implementation across all Skymirror products: **CheckMet** (AI attendance), **Traquiva** (AI learning platform), **Software Solutions**, and **Skymirror Academy**.

---

## Part 1: Feedback Collection System

### 1.1 Feedback Channels

| Channel | Type | Frequency | Owner | Use Case |
|---------|------|-----------|-------|----------|
| In-App Feedback | Quantitative + Qualitative | Continuous | Product | Feature feedback, bugs |
| NPS Surveys | Quantitative | Quarterly | CS | Overall satisfaction |
| Customer Interviews | Qualitative | Monthly | Product | Deep insights |
| Support Tickets | Qualitative | Continuous | Support | Issues, requests |
| QBRs | Qualitative | Quarterly | CS | Strategic feedback |
| User Analytics | Quantitative | Continuous | Product | Behavior patterns |
| Sales Feedback | Qualitative | Weekly | Sales | Prospect objections |
| Churn Interviews | Qualitative | Per event | CS | Why customers leave |

### 1.2 In-App Feedback System

#### Feedback Widget Triggers

| Trigger | When | Question |
|---------|------|----------|
| Feature First Use | After first use of new feature | "How useful was this feature?" (1-5) |
| Task Completion | After completing key workflow | "How easy was this?" (1-5) |
| Session End | After 10+ min session | "Any feedback for us?" (open text) |
| Error Occurrence | After error message | "Did this resolve your issue?" (Y/N) |
| Monthly Check-in | Monthly for active users | "How likely to recommend?" (0-10) |

#### Feedback Widget Design

```
┌─────────────────────────────────────┐
│  How was your experience today?     │
│                                     │
│  😞  😐  🙂  😊  😍                  │
│   1   2   3   4   5                 │
│                                     │
│  [Optional: Tell us more...]        │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Submit]  [Not now]                │
└─────────────────────────────────────┘
```

### 1.3 NPS Survey Framework

#### Survey Design

**Question 1 (Required):**
> On a scale of 0-10, how likely are you to recommend CheckMet to a colleague?

**Question 2 (Required):**
> What's the primary reason for your score?

**Question 3 (Optional):**
> What could we do to improve your experience?

#### NPS Calculation

```
NPS = % Promoters (9-10) - % Detractors (0-6)
```

| Score | Category | Follow-up |
|-------|----------|-----------|
| 9-10 | Promoter | Request referral, testimonial |
| 7-8 | Passive | Understand barriers to promotion |
| 0-6 | Detractor | Immediate outreach, recovery plan |

#### NPS Benchmarks

| Score | Interpretation | Action |
|-------|----------------|--------|
| 70+ | World-class | Maintain, leverage for growth |
| 50-69 | Excellent | Continue improvements |
| 30-49 | Good | Identify improvement areas |
| 0-29 | Needs work | Urgent focus on experience |
| &lt;0 | Critical | Major intervention needed |

### 1.4 Customer Interview Framework

#### Interview Types

| Type | Purpose | Frequency | Duration | Participants |
|------|---------|-----------|----------|--------------|
| Discovery | Understand problems | Monthly | 45 min | Prospects |
| Usability | Test features | Per release | 30 min | Active users |
| Satisfaction | Gauge happiness | Quarterly | 30 min | All customers |
| Churn | Understand leaving | Per event | 20 min | Churned users |
| Win/Loss | Sales insights | Per deal | 30 min | Won/lost prospects |

#### Interview Script Template

```markdown
## Customer Interview Script

### Introduction (5 min)
- Thank you for your time
- Purpose of the interview
- Recording permission
- Confidentiality assurance

### Warm-up (5 min)
- Tell me about your role
- How long have you been using CheckMet?
- What were you using before?

### Core Questions (20-30 min)

**Problem Understanding:**
1. What challenges were you facing before CheckMet?
2. How were those challenges affecting your work?
3. What would happen if those problems weren't solved?

**Solution Feedback:**
4. How well does CheckMet solve those problems?
5. What do you like most about CheckMet?
6. What frustrates you most about CheckMet?
7. If you could change one thing, what would it be?

**Usage Patterns:**
8. How often do you use CheckMet?
9. Which features do you use most?
10. Are there features you don't use? Why?

**Value Assessment:**
11. How has CheckMet impacted your work?
12. Can you quantify any time or cost savings?
13. Would you recommend CheckMet? Why/why not?

### Wrap-up (5 min)
- Any other feedback?
- Can we follow up with additional questions?
- Thank you and next steps
```

#### Interview Notes Template

```markdown
## Interview Notes

**Date:** [Date]
**Customer:** [Company Name]
**Interviewee:** [Name, Title]
**Interviewer:** [Name]

### Key Quotes
> "[Direct quote 1]"
> "[Direct quote 2]"
> "[Direct quote 3]"

### Pain Points Mentioned
1. [Pain point 1]
2. [Pain point 2]
3. [Pain point 3]

### Feature Requests
1. [Request 1] - Priority: [H/M/L]
2. [Request 2] - Priority: [H/M/L]

### Positive Feedback
1. [Positive 1]
2. [Positive 2]

### Concerns/Complaints
1. [Concern 1]
2. [Concern 2]

### Insights
1. [Insight 1]
2. [Insight 2]

### Action Items
- [ ] [Action 1] - Owner: [Name]
- [ ] [Action 2] - Owner: [Name]
```

---

## Part 2: Feedback Analysis

### 2.1 Feedback Categorization

#### Category Taxonomy

| Category | Subcategory | Examples |
|----------|-------------|----------|
| **Usability** | Navigation | "Can't find settings" |
| | Workflow | "Too many clicks" |
| | Clarity | "Confusing labels" |
| **Features** | New Request | "Need mobile app" |
| | Enhancement | "Add export to Excel" |
| | Missing | "No bulk upload" |
| **Performance** | Speed | "Dashboard loads slowly" |
| | Reliability | "App crashes" |
| | Accuracy | "Recognition errors" |
| **Integration** | HRIS | "Need Workday integration" |
| | Payroll | "Sync with ADP" |
| | SSO | "Support Okta" |
| **Support** | Response Time | "Slow to respond" |
| | Quality | "Didn't solve issue" |
| | Documentation | "Docs outdated" |

### 2.2 Feedback Scoring Matrix

| Factor | Weight | Scoring Criteria |
|--------|--------|------------------|
| **Frequency** | 25% | How often is this mentioned? |
| **Impact** | 25% | How much does it affect users? |
| **Revenue** | 20% | Does it affect revenue/churn? |
| **Effort** | 15% | How hard to implement? |
| **Strategic** | 15% | Does it align with strategy? |

#### Scoring Scale

| Score | Frequency | Impact | Revenue | Effort | Strategic |
|-------|-----------|--------|---------|--------|-----------|
| 5 | 50%+ users | Critical | Major churn risk | &lt;1 week | Core to vision |
| 4 | 25-50% | High | Moderate risk | 1-2 weeks | Supports vision |
| 3 | 10-25% | Medium | Minor risk | 2-4 weeks | Neutral |
| 2 | 5-10% | Low | No risk | 1-2 months | Tangential |
| 1 | &lt;5% | Minimal | N/A | 3+ months | Misaligned |

### 2.3 Feedback Dashboard

```markdown
## Weekly Feedback Dashboard

### Volume Summary
| Source | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| In-App | XX | XX | ↑/↓ |
| Support | XX | XX | ↑/↓ |
| Interviews | X | X | ↑/↓ |
| NPS Responses | XX | XX | ↑/↓ |

### Sentiment Analysis
| Category | Positive | Neutral | Negative |
|----------|----------|---------|----------|
| Usability | X% | X% | X% |
| Features | X% | X% | X% |
| Performance | X% | X% | X% |
| Support | X% | X% | X% |

### Top Themes This Week
1. [Theme 1] - X mentions - [Trend]
2. [Theme 2] - X mentions - [Trend]
3. [Theme 3] - X mentions - [Trend]

### NPS Trend
| Month | NPS | Promoters | Passives | Detractors |
|-------|-----|-----------|----------|------------|
| [M-2] | XX | X% | X% | X% |
| [M-1] | XX | X% | X% | X% |
| [M-0] | XX | X% | X% | X% |

### Critical Issues
1. [Issue 1] - X customers affected - [Status]
2. [Issue 2] - X customers affected - [Status]

### Action Items
- [ ] [Action 1] - Owner: [Name] - Due: [Date]
- [ ] [Action 2] - Owner: [Name] - Due: [Date]
```

---

## Part 3: Feature Prioritization

### 3.1 Prioritization Framework (RICE)

| Factor | Definition | Scoring |
|--------|------------|---------|
| **Reach** | How many users affected per quarter | Number of users |
| **Impact** | How much it improves experience | 3=Massive, 2=High, 1=Medium, 0.5=Low, 0.25=Minimal |
| **Confidence** | How sure are we about estimates | 100%=High, 80%=Medium, 50%=Low |
| **Effort** | Person-weeks to complete | Number of person-weeks |

**RICE Score = (Reach × Impact × Confidence) / Effort**

### 3.2 Feature Prioritization Template

```markdown
## Feature Prioritization - [Quarter]

### Scoring

| Feature | Reach | Impact | Confidence | Effort | RICE Score | Priority |
|---------|-------|--------|------------|--------|------------|----------|
| [Feature 1] | 1000 | 2 | 80% | 4 | 400 | P1 |
| [Feature 2] | 500 | 3 | 100% | 8 | 188 | P2 |
| [Feature 3] | 2000 | 1 | 50% | 2 | 500 | P1 |
| [Feature 4] | 100 | 2 | 80% | 1 | 160 | P2 |

### Priority Definitions

| Priority | Criteria | Timeline |
|----------|----------|----------|
| P0 | Critical bug, revenue impact | Immediate |
| P1 | High RICE, strategic | This quarter |
| P2 | Medium RICE | Next quarter |
| P3 | Low RICE | Backlog |

### Quarterly Roadmap

**This Quarter (P1):**
1. [Feature 1] - [Owner] - [Timeline]
2. [Feature 3] - [Owner] - [Timeline]

**Next Quarter (P2):**
1. [Feature 2] - [Owner] - [Timeline]
2. [Feature 4] - [Owner] - [Timeline]

**Backlog (P3):**
1. [Feature 5]
2. [Feature 6]
```

### 3.3 Product Roadmap Template

```markdown
## Product Roadmap - [Year]

### Vision
[One sentence product vision]

### Annual Themes
1. [Theme 1]: [Description]
2. [Theme 2]: [Description]
3. [Theme 3]: [Description]

---

### Q1: [Theme]

| Feature | Description | Status | Owner |
|---------|-------------|--------|-------|
| [Feature 1] | [Description] | 🟢 Shipped | [Name] |
| [Feature 2] | [Description] | 🟡 In Progress | [Name] |
| [Feature 3] | [Description] | ⚪ Planned | [Name] |

**Key Metrics:**
- [Metric 1]: [Target]
- [Metric 2]: [Target]

---

### Q2: [Theme]

| Feature | Description | Status | Owner |
|---------|-------------|--------|-------|
| [Feature 1] | [Description] | ⚪ Planned | [Name] |
| [Feature 2] | [Description] | ⚪ Planned | [Name] |

**Key Metrics:**
- [Metric 1]: [Target]
- [Metric 2]: [Target]

---

### Q3-Q4: [Theme]

| Feature | Description | Status | Owner |
|---------|-------------|--------|-------|
| [Feature 1] | [Description] | ⚪ Planned | [Name] |
| [Feature 2] | [Description] | ⚪ Planned | [Name] |

---

### Backlog (Future Consideration)
- [Feature 1]
- [Feature 2]
- [Feature 3]
```

---

## Part 4: Feedback Loop Closure

### 4.1 Closing the Loop with Customers

#### Communication Templates

**Feature Shipped:**
```
Subject: You asked, we delivered: [Feature Name]

Hi [Name],

Remember when you told us you wanted [feature description]?

We listened! [Feature Name] is now live in CheckMet.

Here's what's new:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

Try it out: [Link]

Thanks for helping us make CheckMet better!

Best,
[Product Team]
```

**Feature In Progress:**
```
Subject: Update on your feedback

Hi [Name],

A few months ago, you shared feedback about [issue/request].

I wanted to let you know we're actively working on this. Here's the plan:
- [What we're building]
- [Expected timeline]
- [How it will help]

We'll let you know when it's ready to try.

Thanks for your patience and continued feedback!

Best,
[Product Team]
```

**Feature Declined:**
```
Subject: Following up on your suggestion

Hi [Name],

Thank you for suggesting [feature/change].

After careful consideration, we've decided not to pursue this right now because [reason]. However, we've noted it for future consideration as our product evolves.

In the meantime, here's an alternative approach that might help: [workaround].

We really appreciate you taking the time to share your ideas with us.

Best,
[Product Team]
```

### 4.2 Feedback Status Tracking

| Status | Definition | Customer Communication |
|--------|------------|------------------------|
| **New** | Just received | Acknowledge receipt |
| **Reviewing** | Under consideration | No communication yet |
| **Planned** | On roadmap | Share timeline |
| **In Progress** | Being built | Share progress |
| **Shipped** | Released | Announce and thank |
| **Declined** | Won't do | Explain reasoning |
| **Duplicate** | Already tracked | Merge with existing |

---

## Part 5: User Research Program

### 5.1 Research Calendar

| Month | Research Type | Focus Area | Participants |
|-------|---------------|------------|--------------|
| Jan | Discovery | [Topic] | 8-10 prospects |
| Feb | Usability | [Feature] | 6-8 users |
| Mar | NPS Deep Dive | Detractors | 5-6 detractors |
| Apr | Discovery | [Topic] | 8-10 prospects |
| May | Usability | [Feature] | 6-8 users |
| Jun | Satisfaction | All segments | 10-12 users |
| Jul | Discovery | [Topic] | 8-10 prospects |
| Aug | Usability | [Feature] | 6-8 users |
| Sep | NPS Deep Dive | Passives | 5-6 passives |
| Oct | Discovery | [Topic] | 8-10 prospects |
| Nov | Usability | [Feature] | 6-8 users |
| Dec | Annual Review | All segments | 10-12 users |

### 5.2 User Research Repository

```markdown
## Research Repository

### Research Index

| Date | Type | Topic | Key Findings | Link |
|------|------|-------|--------------|------|
| [Date] | Discovery | [Topic] | [Summary] | [Link] |
| [Date] | Usability | [Feature] | [Summary] | [Link] |

### Key Insights Database

| Insight | Source | Date | Confidence | Status |
|---------|--------|------|------------|--------|
| [Insight 1] | [Research] | [Date] | High/Med/Low | Validated/Testing |
| [Insight 2] | [Research] | [Date] | High/Med/Low | Validated/Testing |

### Persona Updates

| Persona | Last Updated | Key Changes |
|---------|--------------|-------------|
| HR Director | [Date] | [Changes] |
| Operations Manager | [Date] | [Changes] |
```

### 5.3 Usability Testing Protocol

#### Test Setup

**Participants:** 6-8 users per test
**Duration:** 30-45 minutes per session
**Compensation:** €50 gift card or account credit

#### Test Script Template

```markdown
## Usability Test Script

### Setup (5 min)
- Welcome and thank you
- Purpose explanation
- Think-aloud instructions
- Recording consent

### Warm-up (5 min)
- Current role and responsibilities
- Familiarity with CheckMet
- Typical usage patterns

### Tasks (20-30 min)

**Task 1: [Task Name]**
- Scenario: [Context]
- Goal: [What they need to accomplish]
- Success criteria: [How we measure success]

Observe:
- [ ] Completed successfully
- [ ] Time to complete: ___
- [ ] Errors made: ___
- [ ] Confusion points: ___

**Task 2: [Task Name]**
[Same structure]

**Task 3: [Task Name]**
[Same structure]

### Debrief (5 min)
- Overall impressions
- Most confusing part
- Most useful part
- Suggestions for improvement

### Wrap-up
- Thank you
- Next steps
- Compensation
```

---

## Part 6: Metrics & Reporting

### 6.1 Feedback Metrics

| Metric | Definition | Target | Frequency |
|--------|------------|--------|-----------|
| **NPS** | Net Promoter Score | 40+ | Quarterly |
| **CSAT** | Customer Satisfaction | 4.5/5 | Per interaction |
| **CES** | Customer Effort Score | &lt;3 | Per task |
| **Feedback Volume** | Total feedback items | Trending up | Weekly |
| **Response Rate** | % of users giving feedback | 20%+ | Monthly |
| **Time to Close** | Days to address feedback | &lt;30 days | Monthly |
| **Feature Adoption** | % using new features | 60%+ | Per release |

### 6.2 Monthly Feedback Report Template

```markdown
## Monthly Feedback Report - [Month Year]

### Executive Summary
[3-4 sentences summarizing the month]

### Key Metrics

| Metric | This Month | Last Month | Target | Status |
|--------|------------|------------|--------|--------|
| NPS | XX | XX | 40+ | 🟢/🟡/🔴 |
| CSAT | X.X | X.X | 4.5 | 🟢/🟡/🔴 |
| Feedback Volume | XXX | XXX | ↑ | 🟢/🟡/🔴 |
| Time to Close | XX days | XX days | &lt;30 | 🟢/🟡/🔴 |

### Feedback Breakdown

| Category | Volume | Sentiment | Trend |
|----------|--------|-----------|-------|
| Usability | XX | X.X/5 | ↑/↓ |
| Features | XX | X.X/5 | ↑/↓ |
| Performance | XX | X.X/5 | ↑/↓ |
| Support | XX | X.X/5 | ↑/↓ |

### Top Requests

| Request | Mentions | Priority | Status |
|---------|----------|----------|--------|
| [Request 1] | XX | P1 | In Progress |
| [Request 2] | XX | P2 | Planned |
| [Request 3] | XX | P2 | Backlog |

### Customer Quotes

> "[Quote 1]" - [Customer, Title]

> "[Quote 2]" - [Customer, Title]

### Actions Taken

1. [Action 1] - [Outcome]
2. [Action 2] - [Outcome]

### Next Month Focus

1. [Focus 1]
2. [Focus 2]
```

---

## Part 7: Tools & Systems

### 7.1 Recommended Tool Stack

| Purpose | Tool | Cost | Priority |
|---------|------|------|----------|
| In-App Feedback | Hotjar / Pendo | €50-200/mo | High |
| NPS Surveys | Delighted / Wootric | €50-100/mo | High |
| User Analytics | Mixpanel / Amplitude | Free-$100/mo | High |
| Interview Scheduling | Calendly | Free-$15/mo | Medium |
| Research Repository | Notion / Dovetail | Free-$50/mo | Medium |
| Session Recording | FullStory / Hotjar | €100-300/mo | Medium |

### 7.2 Integration Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  In-App     │────▶│  Feedback   │────▶│  Product    │
│  Feedback   │     │  Database   │     │  Backlog    │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
┌─────────────┐            │            ┌─────────────┐
│  NPS        │────────────┤───────────▶│  Dashboard  │
│  Surveys    │            │            │  & Reports  │
└─────────────┘            │            └─────────────┘
                           │
┌─────────────┐            │            ┌─────────────┐
│  Support    │────────────┘───────────▶│  Customer   │
│  Tickets    │                         │  Profiles   │
└─────────────┘                         └─────────────┘
```

---

## Part 8: Governance

### 8.1 Roles & Responsibilities

| Role | Responsibilities |
|------|------------------|
| **Product Manager** | Own feedback collection, analysis, prioritization |
| **UX Researcher** | Conduct interviews, usability tests |
| **Customer Success** | Collect feedback during QBRs, escalate issues |
| **Support** | Tag and categorize tickets, escalate trends |
| **Engineering** | Implement features, provide effort estimates |
| **Leadership** | Review monthly reports, approve roadmap |

### 8.2 Meeting Cadence

| Meeting | Frequency | Attendees | Purpose |
|---------|-----------|-----------|---------|
| Feedback Triage | Weekly | PM, UX, Support | Review new feedback |
| Prioritization | Bi-weekly | PM, Eng, Design | Prioritize backlog |
| Roadmap Review | Monthly | Leadership, PM | Review roadmap progress |
| Research Readout | Monthly | All product | Share research findings |

---

*Document Version: 1.0*
*Last Updated: December 2024*
*Owner: Product Manager*
*Review Cycle: Quarterly*
