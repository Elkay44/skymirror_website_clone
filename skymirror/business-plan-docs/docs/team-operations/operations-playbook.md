---
sidebar_position: 3
title: "Operations & Customer Success Playbook"
---

# Operations & Customer Success Playbook

## Overview

This playbook defines the operational processes, customer success strategies, and delivery standards for SkyMirror's operations team.

**Team Lead:** COO (Dr. Loveday)  
**Scope:** Customer success, delivery, support, operations  
**Last Updated:** December 2024

:::tip Tooling Reference
For detailed tool configurations and integrations, see the [Workflow & Tooling Guide](./workflow-tooling-guide.md).
:::

---

## Operations Tool Stack

| Tool | Purpose | When to Use |
|------|---------|-------------|
| **Jira** | Project delivery, support tickets | Software Solutions, customer support |
| **Trello** | HR tasks, onboarding, simple workflows | Employee lifecycle, operations tasks |
| **Notion** | Documentation, SOPs | Processes, knowledge base |
| **Slack** | Team communication | Daily coordination |

### Jira Support Workflow

```
┌──────────┐   ┌──────────┐   ┌─────────────┐   ┌──────────┐
│   New    │──▶│   Open   │──▶│ In Progress │──▶│ Resolved │
└──────────┘   └──────────┘   └─────────────┘   └──────────┘
     │                             │                    │
     ▼                             ▼                    ▼
┌──────────┐                  ┌──────────┐         ┌──────────┐
│ Escalated│                  │ On Hold  │         │  Closed  │
└──────────┘                  └──────────┘         └──────────┘
```

### Trello HR Workflow

```
┌───────────┬───────────┬───────────┬───────────┬───────────┐
│ Candidates│  Offers   │ Onboarding│  Active   │ Offboarded│
├───────────┼───────────┼───────────┼───────────┼───────────┤
│ New       │ Pending   │ Week 1    │ Current   │ Alumni    │
│ applicants│ acceptance│ setup     │ employees │           │
└───────────┴───────────┴───────────┴───────────┴───────────┘
```

### Slack Channels for Operations

| Channel | Purpose |
|---------|---------|
| `#team-operations` | Operations team discussions |
| `#customer-success` | CS team coordination |
| `#jira-support` | Jira support ticket notifications |
| `#hr-updates` | HR announcements |
| `#onboarding` | New hire onboarding |

### Daily Operations Workflow

```
08:30 - Review team status (Slack)
09:00 - Operations standup
09:30 - Process improvements
12:00 - Lunch
13:00 - Cross-team coordination
15:00 - HR matters (Trello)
16:00 - Documentation updates (Notion)
```

### Weekly Operations Rituals

| Day | Activity | Tool |
|-----|----------|------|
| Monday | Leadership sync | Slack/Meet |
| Tuesday | All-hands preparation | Notion |
| Wednesday | Process review | Notion |
| Friday | Operational metrics review | Jira/Notion |

### Integrations

- **Jira → Slack**: New support ticket alerts to `#jira-support`
- **Jira → Slack**: Project updates to `#team-operations`
- **Trello → Slack**: HR updates to `#hr-updates`
- **Trello → Slack**: Onboarding progress to `#onboarding`

---

## Team Structure

### Operations Organization

```
COO (Dr. Loveday)
├── Customer Success
│   ├── CS Manager
│   ├── Customer Success Managers (2)
│   └── Onboarding Specialists (2)
├── Support
│   ├── Support Lead
│   ├── Technical Support (2)
│   └── Support Coordinator
├── Delivery (Software Solutions)
│   ├── Delivery Manager
│   ├── Project Managers (2)
│   └── Solutions Architects (2)
└── Operations
    ├── Operations Manager
    ├── HR Coordinator
    └── Office Manager
```

### Role Definitions

| Role | Responsibilities | KPIs |
|------|------------------|------|
| **CS Manager** | Team leadership, strategy | NRR, NPS, churn |
| **CSM** | Account management, renewals | Retention, expansion |
| **Onboarding Specialist** | Implementation, training | Time-to-value, CSAT |
| **Support Lead** | Support operations | Response time, resolution |
| **Delivery Manager** | Project delivery | On-time, on-budget |

---

## Customer Success Framework

### Customer Lifecycle

```
Onboarding → Adoption → Value Realization → Expansion → Renewal → Advocacy
```

### Customer Health Score

| Factor | Weight | Metrics |
|--------|--------|---------|
| **Product Usage** | 30% | DAU/MAU, feature adoption |
| **Engagement** | 25% | Meeting attendance, response time |
| **Support** | 20% | Ticket volume, sentiment |
| **Business Outcomes** | 15% | ROI achieved, goals met |
| **Relationship** | 10% | Executive sponsor, champion |

#### Health Score Calculation

| Score | Status | Action |
|-------|--------|--------|
| 80-100 | Healthy | Expansion opportunity |
| 60-79 | Neutral | Monitor, engage |
| 40-59 | At Risk | Intervention required |
| 0-39 | Critical | Executive escalation |

### Customer Segmentation

| Segment | ARR | Touch Model | CSM Ratio |
|---------|-----|-------------|-----------|
| **Enterprise** | Over €50K | High-touch | 1:10 |
| **Mid-Market** | €10K-€50K | Medium-touch | 1:30 |
| **SMB** | Under €10K | Tech-touch | 1:100 |

---

## Onboarding Process

### Onboarding Phases

| Phase | Duration | Activities | Owner |
|-------|----------|------------|-------|
| **Kickoff** | Day 1 | Welcome, planning | Onboarding Specialist |
| **Setup** | Week 1 | Technical configuration | Technical Support |
| **Training** | Week 2 | User training | Onboarding Specialist |
| **Go-Live** | Week 3 | Launch, monitoring | CSM |
| **Optimization** | Week 4-8 | Fine-tuning, adoption | CSM |

### Onboarding Checklist

#### Pre-Kickoff
- [ ] Contract signed and processed
- [ ] Customer data collected
- [ ] Technical requirements documented
- [ ] Kickoff meeting scheduled
- [ ] Internal handoff from sales complete

#### Kickoff Meeting
- [ ] Introductions and roles
- [ ] Project timeline review
- [ ] Success criteria defined
- [ ] Communication plan established
- [ ] Next steps confirmed

#### Technical Setup
- [ ] Account provisioned
- [ ] Users created
- [ ] Integrations configured
- [ ] Data migration (if applicable)
- [ ] Security settings configured

#### Training
- [ ] Admin training completed
- [ ] End-user training scheduled
- [ ] Training materials provided
- [ ] Knowledge base access granted
- [ ] Support process explained

#### Go-Live
- [ ] System tested and validated
- [ ] Users activated
- [ ] Go-live communication sent
- [ ] Monitoring enabled
- [ ] Success metrics baseline set

### Time-to-Value Targets

| Product | Target TTV | Definition |
|---------|------------|------------|
| CheckMet | 14 days | First 100 check-ins processed |
| Traquiva | 7 days | First course completed |
| Software Solutions | Per project | First milestone delivered |

---

## Customer Success Playbooks

### Onboarding Playbook (Days 1-30)

| Day | Activity | Channel | Owner |
|-----|----------|---------|-------|
| 1 | Welcome email | Email | CSM |
| 1 | Kickoff call | Video | Onboarding |
| 3 | Technical setup | In-app | Support |
| 7 | Training session 1 | Video | Onboarding |
| 14 | Training session 2 | Video | Onboarding |
| 21 | Go-live check-in | Call | CSM |
| 30 | 30-day review | Video | CSM |

### Adoption Playbook (Days 31-90)

| Week | Activity | Goal |
|------|----------|------|
| 5 | Feature adoption check | 3+ features used |
| 6 | Best practices session | Optimize usage |
| 8 | Business review | Confirm value |
| 10 | Expansion discussion | Identify opportunities |
| 12 | 90-day success review | Document outcomes |

### At-Risk Playbook

| Day | Activity | Owner |
|-----|----------|-------|
| 0 | Alert triggered | System |
| 1 | Internal review | CSM |
| 2 | Customer outreach | CSM |
| 5 | Recovery call | CSM + Manager |
| 7 | Action plan created | CSM |
| 14 | Progress check | CSM |
| 30 | Status review | Manager |

### Renewal Playbook (90 Days Before)

| Day | Activity | Owner |
|-----|----------|-------|
| -90 | Renewal alert | System |
| -90 | Account review | CSM |
| -75 | Value review meeting | CSM |
| -60 | Renewal proposal | CSM |
| -45 | Negotiation (if needed) | CSM + Manager |
| -30 | Contract sent | CSM |
| -14 | Follow-up | CSM |
| -7 | Final reminder | CSM |
| 0 | Renewal processed | Operations |

---

## Support Operations

### Support Tiers

| Tier | Scope | Response | Resolution |
|------|-------|----------|------------|
| **Tier 1** | Basic issues, how-to | 4 hours | 24 hours |
| **Tier 2** | Technical issues | 8 hours | 48 hours |
| **Tier 3** | Complex/engineering | 24 hours | 5 days |

### SLA Definitions

| Priority | Description | Response | Resolution |
|----------|-------------|----------|------------|
| **P1 - Critical** | Service down | 1 hour | 4 hours |
| **P2 - High** | Major feature broken | 4 hours | 24 hours |
| **P3 - Medium** | Feature degraded | 8 hours | 48 hours |
| **P4 - Low** | Minor issue | 24 hours | 5 days |

### Support Channels

| Channel | Hours | Use Case |
|---------|-------|----------|
| Email | 24/7 | All issues |
| Chat | 9am-6pm CET | Quick questions |
| Phone | 9am-6pm CET | Urgent issues |
| Knowledge Base | 24/7 | Self-service |
| Community | 24/7 | Peer support |

### Ticket Workflow

```
New → Triaged → In Progress → Pending Customer → Resolved → Closed
```

### Escalation Matrix

| Trigger | Escalate To | Timeline |
|---------|-------------|----------|
| P1 not resolved in 4 hours | Support Lead | Immediate |
| P2 not resolved in 24 hours | Support Lead | Immediate |
| Customer complaint | CS Manager | 4 hours |
| Repeated issues (3+) | CS Manager | 24 hours |
| Executive complaint | COO | Immediate |

### Support Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Response Time | Under 4 hours | Avg time to first response |
| Resolution Time | Under 24 hours | Avg time to resolution |
| First Contact Resolution | Over 70% | % resolved on first contact |
| CSAT | Over 4.5/5 | Post-ticket survey |
| Ticket Volume | Trending down | Tickets per customer |

---

## Project Delivery (Software Solutions)

### Project Methodology

We follow a hybrid Agile-Waterfall approach:

| Phase | Approach | Duration |
|-------|----------|----------|
| Discovery | Waterfall | 1-2 weeks |
| Design | Waterfall | 2-4 weeks |
| Development | Agile (Scrum) | 4-16 weeks |
| Testing | Agile | 1-3 weeks |
| Deployment | Waterfall | 1 week |

### Project Governance

| Meeting | Frequency | Attendees | Purpose |
|---------|-----------|-----------|---------|
| Kickoff | Once | All stakeholders | Align on scope, timeline |
| Sprint Demo | Bi-weekly | Client + team | Show progress |
| Status Update | Weekly | PM + client PM | Progress, risks |
| Steering Committee | Monthly | Executives | Strategic decisions |

### Project Documentation

| Document | When | Owner |
|----------|------|-------|
| Statement of Work | Pre-project | Sales + PM |
| Project Plan | Kickoff | PM |
| Technical Design | Design phase | Tech Lead |
| Status Reports | Weekly | PM |
| Change Requests | As needed | PM |
| Acceptance Sign-off | Completion | PM + Client |

### Change Control Process

1. **Request:** Client submits change request
2. **Assess:** PM evaluates impact (scope, timeline, cost)
3. **Approve:** Client approves change order
4. **Implement:** Team implements change
5. **Document:** Update project documentation

### Delivery Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| On-Time Delivery | Over 90% | Projects delivered on schedule |
| On-Budget | Over 85% | Projects within budget |
| Client Satisfaction | Over 4.5/5 | Post-project survey |
| Defect Rate | Under 5% | Defects found post-delivery |
| Change Order Rate | Under 20% | Scope changes vs. original |

---

## Operational Excellence

### Process Improvement

#### Continuous Improvement Cycle

```
Plan → Do → Check → Act → Repeat
```

#### Improvement Sources

| Source | Frequency | Owner |
|--------|-----------|-------|
| Customer feedback | Ongoing | CS Team |
| Support tickets | Weekly | Support Lead |
| Team retrospectives | Bi-weekly | All teams |
| Process audits | Quarterly | Operations Manager |

### Quality Assurance

| Area | Standard | Audit Frequency |
|------|----------|-----------------|
| Customer onboarding | Checklist completion | Monthly |
| Support tickets | SLA compliance | Weekly |
| Project delivery | Quality gates | Per project |
| Documentation | Accuracy, completeness | Quarterly |

### Risk Management

| Risk Category | Examples | Mitigation |
|---------------|----------|------------|
| Customer | Churn, dissatisfaction | Health monitoring, proactive outreach |
| Delivery | Delays, quality issues | Project governance, QA |
| Operational | Process failures | Documentation, training |
| Resource | Capacity constraints | Forecasting, cross-training |

---

## Communication Standards

### Internal Communication

| Type | Channel | Frequency |
|------|---------|-----------|
| Team updates | Slack | Daily |
| Status reports | Email | Weekly |
| All-hands | Video | Monthly |
| Documentation | Notion/Confluence | Ongoing |

### Customer Communication

| Type | Channel | Frequency |
|------|---------|-----------|
| Onboarding updates | Email | Per milestone |
| Product updates | Email | Monthly |
| Business reviews | Video | Quarterly |
| Renewals | Email + Call | 90 days before |

### Communication Templates

#### Onboarding Welcome Email

```
Subject: Welcome to SkyMirror! Let's get started 🚀

Hi [First Name],

Welcome to SkyMirror! We're thrilled to have [Company Name] on board.

I'm [CSM Name], your Customer Success Manager. I'll be your main point of contact throughout your journey with us.

**Here's what happens next:**

1. **Kickoff Call** - [Date/Time]
   We'll review your goals and create a success plan.

2. **Technical Setup** - Week 1
   Our team will configure your account.

3. **Training** - Week 2
   We'll train your team on best practices.

4. **Go-Live** - Week 3
   You'll be up and running!

**Before our kickoff, please:**
- [ ] Complete the onboarding questionnaire: [Link]
- [ ] Identify your project team
- [ ] Gather any data for migration

Questions? Reply to this email or book time with me: [Calendly Link]

Looking forward to working with you!

Best,
[CSM Name]
```

#### Quarterly Business Review Agenda

```
# Quarterly Business Review
## [Company Name] | [Date]

### Agenda (60 minutes)

1. **Introductions** (5 min)

2. **Review Period Highlights** (10 min)
   - Key achievements
   - Usage metrics
   - ROI delivered

3. **Product Updates** (10 min)
   - New features released
   - Upcoming roadmap

4. **Success Planning** (15 min)
   - Goals for next quarter
   - Action items

5. **Expansion Opportunities** (10 min)
   - Additional use cases
   - New features/products

6. **Open Discussion** (10 min)
   - Questions
   - Feedback

### Attendees
- [Customer contacts]
- [SkyMirror contacts]
```

---

## Tools & Systems

### Operations Stack

| Tool | Purpose | Owner |
|------|---------|-------|
| Jira | Support tickets, project delivery | Support Lead |
| Trello | HR tasks, onboarding | Operations Manager |
| Notion | Documentation, customer data | Operations Manager |
| Slack | Team communication | All |
| Calendly | Scheduling | All |
| Loom | Video updates | All |

### Automation

| Process | Tool | Trigger |
|---------|------|--------|
| Onboarding emails | Slack | Contract signed |
| Support alerts | Jira → Slack | New ticket |
| Renewal reminders | Trello | 90 days before |
| NPS surveys | Notion | Post-milestone |
| Support escalations | Jira → Slack | SLA breach |

---

## Metrics & Reporting

### Customer Success Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| **Net Revenue Retention** | (Starting ARR + Expansion - Churn) / Starting ARR | Over 100% |
| **Gross Retention** | (Starting ARR - Churn) / Starting ARR | Over 90% |
| **NPS** | Net Promoter Score | Over 50 |
| **CSAT** | Customer Satisfaction | Over 4.5/5 |
| **Time-to-Value** | Days to first value milestone | Under 14 days |
| **Adoption Rate** | % of features used | Over 60% |

### Reporting Cadence

| Report | Frequency | Audience |
|--------|-----------|----------|
| Support Dashboard | Daily | Support team |
| CS Health Report | Weekly | CS team |
| Operations Review | Weekly | Operations team |
| Customer Metrics | Monthly | Leadership |
| QBR | Quarterly | All stakeholders |

---

## Training & Development

### Onboarding (New Team Members)

| Week | Focus | Activities |
|------|-------|------------|
| 1 | Company & Product | Culture, product deep-dive |
| 2 | Process & Tools | Systems training |
| 3 | Shadowing | Observe customer calls |
| 4 | Practice | Supervised customer interactions |

### Ongoing Training

| Training | Frequency | Content |
|----------|-----------|---------|
| Product Updates | Monthly | New features |
| Skills Development | Quarterly | Communication, problem-solving |
| Industry Knowledge | Quarterly | Market trends |
| Certification | Annual | Methodology refresh |

---

## Jira Support Best Practices

### Ticket Management

1. **Respond** within SLA (see response time targets)
2. **Categorize** tickets accurately for reporting
3. **Escalate** promptly when needed
4. **Document** resolution for knowledge base
5. **Follow up** after resolution for CSAT

### Support SLAs

| Priority | First Response | Resolution |
|----------|----------------|------------|
| Critical | 1 hour | 4 hours |
| High | 4 hours | 24 hours |
| Medium | 8 hours | 48 hours |
| Low | 24 hours | 5 days |

### Knowledge Base Maintenance

| Task | Frequency | Owner |
|------|-----------|-------|
| Review top tickets | Weekly | Support Lead |
| Update FAQs | Bi-weekly | Support Team |
| Create new articles | As needed | Support Team |
| Archive outdated content | Monthly | Support Lead |

---

## Trello HR Best Practices

### Employee Onboarding Checklist (Trello Card)

- [ ] Set up Zoho Mail account (@skymirror.eu)
- [ ] Add to Slack workspace
- [ ] Grant Notion access
- [ ] Assign tool access (Linear/Jira/Trello)
- [ ] Schedule orientation meetings
- [ ] Assign onboarding buddy
- [ ] Complete Week 1 training
- [ ] Move card to "Active" when complete

### Leave Management (Trello Board)

| List | Purpose |
|------|--------|
| Leave Requests | New requests pending approval |
| Approved | Approved leave |
| In Progress | Currently on leave |
| Completed | Returned from leave |

### Leave Types

| Leave Type | Days/Year | Approval |
|------------|-----------|----------|
| Annual Leave | 25 | Manager |
| Sick Leave | 10 | Auto (with note) |
| Personal Leave | 3 | Manager |
| Parental Leave | Per law | HR |

---

*Document Version: 1.1*  
*Last Updated: December 2024*  
*Owner: COO (Dr. Loveday)*  
*Review Cycle: Quarterly*
