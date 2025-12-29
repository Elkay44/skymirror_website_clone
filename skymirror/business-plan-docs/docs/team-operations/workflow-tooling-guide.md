---
sidebar_position: 0
title: "Workflow & Tooling Guide"
---

# Skymirror Workflow & Tooling Guide

## Overview

This document defines Skymirror's world-class workflow system using our integrated tooling stack. Every team follows standardized processes while maintaining flexibility for their specific needs.

**Effective Date:** December 2024  
**Owner:** CEO (Lukman Ibrahim)  
**Review Cycle:** Quarterly

---

## Tool Stack Overview

| Tool | Primary Purpose | Teams | Cost |
|------|-----------------|-------|------|
| **Linear** | Product development, sprint management | Engineering, Product | €8/user/month |
| **Jira** | Enterprise client projects, complex workflows | Software Solutions | €7.75/user/month |
| **Trello** | Visual task boards, simple projects | Academy, Marketing | Free/€5/user |
| **Slack** | Real-time communication | All Teams | €7.25/user/month |
| **Notion** | Documentation, wikis, knowledge base | All Teams | €8/user/month |
| **GitHub** | Code repository, CI/CD, code review | Engineering | €4/user/month |
| **Zoho Mail** | Email | All Teams | €3/user/month |

### Tool Assignment by Team

```
┌─────────────────────────────────────────────────────────────────────┐
│                        SKYMIRROR TOOL ECOSYSTEM                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐              │
│  │   LINEAR    │    │    JIRA     │    │   TRELLO    │              │
│  │  Products   │    │  Enterprise │    │   Academy   │              │
│  │  CheckMet   │    │  Projects   │    │  Marketing  │              │
│  │  Traquiva   │    │  Software   │    │   Simple    │              │
│  │             │    │  Solutions  │    │   Tasks     │              │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘              │
│         │                  │                  │                      │
│         └──────────────────┼──────────────────┘                      │
│                            │                                         │
│                    ┌───────▼───────┐                                 │
│                    │    SLACK      │                                 │
│                    │  Communication│                                 │
│                    │    Hub        │                                 │
│                    └───────┬───────┘                                 │
│                            │                                         │
│         ┌──────────────────┼──────────────────┐                      │
│         │                  │                  │                      │
│  ┌──────▼──────┐    ┌──────▼──────┐    ┌──────▼──────┐              │
│  │   NOTION    │    │   GITHUB    │    │  ZOHO MAIL  │              │
│  │    Docs     │    │    Code     │    │    Email    │              │
│  │    Wiki     │    │   CI/CD     │    │  @skymirror │              │
│  │  Knowledge  │    │   Reviews   │    │     .eu     │              │
│  └─────────────┘    └─────────────┘    └─────────────┘              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Slack Workspace Structure

### Channel Naming Convention

```
#[team]-[purpose]
#[product]-[purpose]
#[project]-[client]
```

### Core Channels

| Channel | Purpose | Members |
|---------|---------|---------|
| `#general` | Company-wide announcements | Everyone |
| `#random` | Social, non-work chat | Everyone |
| `#leadership` | Executive discussions | Leadership team |
| `#wins` | Celebrate successes | Everyone |

### Team Channels

| Channel | Purpose | Members |
|---------|---------|---------|
| `#team-engineering` | Engineering discussions | All engineers |
| `#team-sales` | Sales team coordination | Sales team |
| `#team-academy` | Academy operations | Academy team |
| `#team-finance` | Finance discussions | Finance team |
| `#team-operations` | Operations coordination | Operations team |
| `#team-marketing` | Marketing coordination | Marketing team |

### Product Channels

| Channel | Purpose | Members |
|---------|---------|---------|
| `#product-checkmet` | CheckMet development | CheckMet team |
| `#product-traquiva` | Traquiva development | Traquiva team |
| `#product-academy` | Academy programs | Academy team |
| `#product-solutions` | Software Solutions | Solutions team |

### Integration Channels

| Channel | Purpose | Integrations |
|---------|---------|--------------|
| `#alerts-production` | Production alerts | PagerDuty, Datadog |
| `#alerts-security` | Security notifications | GitHub, Snyk |
| `#github-activity` | Code activity | GitHub |
| `#linear-updates` | Sprint updates | Linear |
| `#jira-updates` | Project updates | Jira |
| `#trello-deals` | Sales pipeline | Trello |

### Slack Best Practices

1. **Use threads** for discussions to keep channels clean
2. **@channel** only for urgent, everyone-needs-to-see messages
3. **@here** for online team members only
4. **Set status** when away, in meetings, or focused
5. **Respond within 4 hours** during business hours
6. **Use reactions** (✅, 👀, 🎉) to acknowledge without cluttering

---

## Linear Workflow (Product Teams)

### Workspace Structure

```
Skymirror (Workspace)
├── CheckMet (Team)
│   ├── Backlog
│   ├── Current Sprint
│   └── Roadmap
├── Traquiva (Team)
│   ├── Backlog
│   ├── Current Sprint
│   └── Roadmap
└── Platform (Team)
    ├── Infrastructure
    └── DevOps
```

### Issue States

| State | Description | Color |
|-------|-------------|-------|
| **Backlog** | Prioritized but not scheduled | Gray |
| **Todo** | Scheduled for current sprint | Blue |
| **In Progress** | Actively being worked on | Yellow |
| **In Review** | Code review or QA | Purple |
| **Done** | Completed and deployed | Green |
| **Canceled** | Won't do | Red |

### Labels

| Category | Labels |
|----------|--------|
| **Type** | `feature`, `bug`, `improvement`, `chore`, `spike` |
| **Priority** | `urgent`, `high`, `medium`, `low` |
| **Area** | `frontend`, `backend`, `api`, `ml`, `infra`, `docs` |
| **Size** | `xs`, `s`, `m`, `l`, `xl` |

### Sprint Workflow

```
Week 1:
├── Monday: Sprint Planning (2 hours)
├── Tuesday-Thursday: Development
└── Friday: Backlog Refinement (1 hour)

Week 2:
├── Monday-Wednesday: Development
├── Thursday: Code Freeze, QA
└── Friday: Sprint Review + Retrospective (2 hours)
```

### Linear + GitHub Integration

```yaml
# Automatic linking
Branch: feature/SKY-123-add-user-auth
Commit: "feat(auth): add OAuth2 support SKY-123"
PR Title: "[SKY-123] Add OAuth2 authentication"

# Auto-transitions
PR Opened → Issue moves to "In Review"
PR Merged → Issue moves to "Done"
```

### Linear + Slack Integration

- New issues posted to `#linear-updates`
- Sprint summaries every Monday
- Blockers flagged in `#team-engineering`

---

## Jira Workflow (Software Solutions)

### Project Structure

```
Software Solutions (Project)
├── Client Projects
│   ├── CLIENT-A
│   ├── CLIENT-B
│   └── CLIENT-C
└── Internal Projects
    ├── Infrastructure
    └── Tools
```

### Issue Types

| Type | Description | Workflow |
|------|-------------|----------|
| **Epic** | Large feature/initiative | Planning → In Progress → Done |
| **Story** | User-facing feature | Full workflow |
| **Task** | Technical work | Full workflow |
| **Bug** | Defect | Triage → Full workflow |
| **Sub-task** | Breakdown of story/task | Simple workflow |

### Workflow States

```
┌─────────┐    ┌──────────┐    ┌─────────────┐    ┌────────┐    ┌──────┐
│ Backlog │───▶│ Selected │───▶│ In Progress │───▶│ Review │───▶│ Done │
└─────────┘    └──────────┘    └─────────────┘    └────────┘    └──────┘
                                      │                │
                                      │    ┌───────┐   │
                                      └───▶│ Blocked│◀──┘
                                           └───────┘
```

### Custom Fields

| Field | Purpose | Required |
|-------|---------|----------|
| **Client** | Client name | Yes |
| **Billable Hours** | Time tracking | Yes |
| **Due Date** | Delivery deadline | Yes |
| **Story Points** | Estimation | Yes |
| **Sprint** | Sprint assignment | Yes |

### Jira + Trello Integration

- Jira issues can link to Trello cards for visibility
- Time tracking in Jira for client billing
- Milestones tracked in Notion
- Project updates shared via Slack

---

## Trello Workflow (Academy & Marketing)

### Board Structure

#### Skymirror Academy Board

```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│   Ideas     │   Planning  │  In Progress│   Review    │    Done     │
├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ New course  │ Q1 Bootcamp │ Python      │ Web Dev     │ Data Science│
│ ideas       │ planning    │ curriculum  │ curriculum  │ Bootcamp    │
│             │             │             │ review      │ (Dec 2024)  │
│ Partner     │ Corporate   │ Marketing   │             │             │
│ programs    │ training    │ materials   │             │             │
│             │ proposal    │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

#### Marketing Board

```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│  Backlog    │  This Week  │  Creating   │   Review    │  Published  │
├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ Blog ideas  │ CheckMet    │ Traquiva    │ Academy     │ CheckMet    │
│             │ case study  │ launch post │ testimonial │ launch      │
│ Social      │             │             │             │ (Nov 2024)  │
│ campaigns   │ LinkedIn    │ Product     │             │             │
│             │ series      │ demo video  │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

### Labels

| Label | Color | Meaning |
|-------|-------|---------|
| **Urgent** | Red | Due within 48 hours |
| **High Priority** | Orange | Important this week |
| **Content** | Blue | Content creation |
| **Design** | Purple | Design needed |
| **Approved** | Green | Ready to publish |

### Power-Ups

- **Calendar** - Deadline visualization
- **Slack** - Card notifications
- **Google Drive** - File attachments

---

## Notion Workspace Structure

### Top-Level Structure

```
Skymirror Workspace
├── 🏠 Home (Dashboard)
├── 📚 Company Wiki
│   ├── About Skymirror
│   ├── Culture & Values
│   ├── Policies
│   └── Benefits
├── 📋 Meeting Notes
│   ├── Leadership Meetings
│   ├── All-Hands
│   └── Team Meetings
├── 📖 Documentation
│   ├── Engineering Docs
│   ├── Product Specs
│   ├── API Documentation
│   └── Runbooks
├── 🎯 OKRs & Goals
│   ├── Company OKRs
│   └── Team OKRs
├── 📊 Reports
│   ├── Weekly Reports
│   ├── Monthly Reports
│   └── Quarterly Reviews
└── 🗂️ Templates
    ├── Meeting Templates
    ├── Project Templates
    └── Document Templates
```

### Key Databases

#### Team Directory

| Property | Type | Purpose |
|----------|------|---------|
| Name | Title | Team member name |
| Role | Select | Job title |
| Team | Select | Department |
| Email | Email | Contact |
| Slack | Text | Slack handle |
| Start Date | Date | Join date |
| Manager | Relation | Reports to |

#### Project Database

| Property | Type | Purpose |
|----------|------|---------|
| Project Name | Title | Project identifier |
| Status | Select | Active/Complete/On Hold |
| Team | Multi-select | Assigned teams |
| Owner | Person | Project owner |
| Start Date | Date | Kickoff date |
| Due Date | Date | Target completion |
| Linear/Jira Link | URL | Issue tracker |

#### Decision Log

| Property | Type | Purpose |
|----------|------|---------|
| Decision | Title | What was decided |
| Date | Date | When decided |
| Participants | Person | Who was involved |
| Context | Text | Background |
| Outcome | Text | Result |
| Status | Select | Implemented/Pending |

### Notion Best Practices

1. **Use templates** for consistency
2. **Link related pages** for discoverability
3. **Archive** instead of delete
4. **Tag owners** on all documents
5. **Review quarterly** for outdated content

---

## GitHub Workflow

### Repository Structure

```
skymirror/
├── checkmet-api          # CheckMet backend
├── checkmet-web          # CheckMet frontend
├── checkmet-mobile       # CheckMet mobile app
├── checkmet-ml           # CheckMet ML models
├── traquiva-api          # Traquiva backend
├── traquiva-web          # Traquiva frontend
├── traquiva-ai           # Traquiva AI engine
├── skymirror-infra       # Infrastructure as code
├── skymirror-docs        # Documentation
└── client-projects/      # Software Solutions
    ├── client-a-project
    └── client-b-project
```

### Branch Strategy

```
main (production)
├── develop (staging)
│   ├── feature/SKY-123-feature-name
│   ├── bugfix/SKY-456-bug-description
│   └── chore/update-dependencies
└── hotfix/SKY-789-critical-fix
```

### Pull Request Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Feature
- [ ] Bug fix
- [ ] Refactor
- [ ] Documentation

## Linear/Jira Issue
SKY-123

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests passing
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console.log or debug code
```

### GitHub Actions Workflows

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: npm test
      
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run linter
        run: npm run lint

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Security scan
        run: npm audit
```

### Code Review Requirements

| Branch | Required Reviews | Required Checks |
|--------|------------------|-----------------|
| `main` | 2 approvals | All CI passing |
| `develop` | 1 approval | All CI passing |
| `feature/*` | 1 approval | Tests passing |

---

---

## Cross-Tool Integrations

### Integration Map

```
┌─────────────────────────────────────────────────────────────────────┐
│                      INTEGRATION ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│    ┌──────────┐         ┌──────────┐         ┌──────────┐           │
│    │  LINEAR  │◀───────▶│  SLACK   │◀───────▶│   JIRA   │           │
│    └────┬─────┘         └────┬─────┘         └────┬─────┘           │
│         │                    │                    │                  │
│         │    ┌───────────────┼───────────────┐    │                  │
│         │    │               │               │    │                  │
│         ▼    ▼               ▼               ▼    ▼                  │
│    ┌──────────┐         ┌──────────┐         ┌──────────┐           │
│    │  GITHUB  │◀───────▶│  NOTION  │◀───────▶│  TRELLO  │           │
│    └──────────┘         └──────────┘         └──────────┘           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Integrations

| Integration | Trigger | Action |
|-------------|---------|--------|
| Linear → Slack | Issue created/updated | Post to channel |
| Linear → GitHub | Branch created | Link to issue |
| GitHub → Linear | PR merged | Close issue |
| GitHub → Slack | PR opened/merged | Notify team |
| Jira → Slack | Sprint started/ended | Notify team |
| Jira → Notion | Project completed | Update client database |
| Trello → Slack | Deal won | Celebrate in #wins |
| Trello → Notion | Deal closed | Update client database |
| Trello → Slack | Card moved to Done | Notify channel |

### Zapier Automations

| Zap Name | Trigger | Action |
|----------|---------|--------|
| New Lead Alert | Trello: New card in Leads | Slack: Post to #trello-deals |
| Deal Won Celebration | Trello: Card moved to Won | Slack: Post to #wins |
| Invoice Reminder | Trello: Card in Overdue list | Slack: DM to finance |
| New Hire Announcement | Trello: Card in Onboarding | Slack: Post to #general |
| Weekly Report | Schedule: Every Friday | Notion: Create report page |

---

## Team-Specific Workflows

### Engineering Team (Eric - CTO)

**Primary Tools:** Linear, GitHub, Slack, Notion

```
Daily Workflow:
├── 09:00 - Check Linear for sprint priorities
├── 09:15 - Daily standup (Slack huddle or meet)
├── 09:30 - Deep work: coding, reviews
├── 12:00 - Lunch
├── 13:00 - Meetings, collaboration
├── 15:00 - Code reviews (GitHub)
├── 16:00 - Documentation (Notion)
└── 17:00 - Update Linear, plan tomorrow

Weekly Rituals:
├── Monday: Sprint planning (Linear)
├── Wednesday: Tech talk (Notion + Slack)
├── Friday: Retrospective, backlog refinement
└── Friday: Update engineering docs (Notion)
```

### Sales Team (CMO - Jerone)

**Primary Tools:** Trello, Slack, Notion

```
Daily Workflow:
├── 08:30 - Review pipeline (Trello)
├── 09:00 - Team sync (Slack)
├── 09:30 - Outreach: calls, emails
├── 12:00 - Lunch
├── 13:00 - Client meetings
├── 15:00 - Proposal work (Notion templates)
├── 16:00 - Update Trello cards, log activities
└── 17:00 - Plan tomorrow's outreach

Weekly Rituals:
├── Monday: Pipeline review (Trello)
├── Wednesday: Sales training (Notion)
├── Thursday: Forecast update (Trello)
└── Friday: Win/loss analysis (Notion)
```

### Finance Team (Abdulwahab - CFO)

**Primary Tools:** Trello, Notion, Slack

```
Daily Workflow:
├── 09:00 - Review cash position (Notion)
├── 09:30 - Process invoices, payments (Trello)
├── 11:00 - Expense approvals (Trello)
├── 12:00 - Lunch
├── 13:00 - Financial analysis (Notion)
├── 15:00 - Vendor management
└── 16:00 - Update financial reports (Notion)

Weekly Rituals:
├── Monday: Cash flow review (Notion)
├── Wednesday: Budget vs actual review (Notion)
├── Thursday: Invoice follow-ups (Trello)
└── Friday: Weekly financial summary (Notion)
```

### Operations Team (Dr. Loveday - COO)

**Primary Tools:** Jira, Trello, Notion, Slack

```
Daily Workflow:
├── 08:30 - Review team status (Slack)
├── 09:00 - Operations standup
├── 09:30 - Process improvements
├── 12:00 - Lunch
├── 13:00 - Cross-team coordination
├── 15:00 - HR matters (Trello)
└── 16:00 - Documentation updates (Notion)

Weekly Rituals:
├── Monday: Leadership sync (Slack/Meet)
├── Tuesday: All-hands preparation (Notion)
├── Wednesday: Process review (Notion)
└── Friday: Operational metrics review (Jira/Notion)
```

### Academy Team (Huzaifa - Academy Lead)

**Primary Tools:** Trello, Notion, Slack, Traquiva

```
Daily Workflow:
├── 09:00 - Check student inquiries
├── 09:30 - Curriculum development
├── 11:00 - Instructor coordination
├── 12:00 - Lunch
├── 13:00 - Student sessions
├── 15:00 - Content creation
└── 16:00 - Update Trello, plan ahead

Weekly Rituals:
├── Monday: Week planning (Trello)
├── Tuesday: Curriculum review
├── Thursday: Student feedback review
└── Friday: Content publishing
```

---

## Meeting Cadence

### Company-Wide

| Meeting | Frequency | Duration | Tool | Attendees |
|---------|-----------|----------|------|-----------|
| All-Hands | Bi-weekly | 45 min | Slack/Meet | Everyone |
| Leadership Sync | Weekly | 60 min | Meet | Leadership |
| Town Hall | Monthly | 60 min | Meet | Everyone |

### Team-Level

| Meeting | Frequency | Duration | Tool | Attendees |
|---------|-----------|----------|------|-----------|
| Daily Standup | Daily | 15 min | Slack Huddle | Team |
| Sprint Planning | Bi-weekly | 2 hours | Linear/Jira | Team |
| Retrospective | Bi-weekly | 1 hour | Notion | Team |
| 1:1s | Weekly | 30 min | Meet | Manager + Report |

### Cross-Functional

| Meeting | Frequency | Duration | Purpose |
|---------|-----------|----------|---------|
| Product Review | Weekly | 1 hour | Demo progress |
| Sales + Product | Bi-weekly | 30 min | Feature requests |
| Engineering + Ops | Weekly | 30 min | Infrastructure |

---

## Onboarding Checklist

### Day 1: Access Setup

- [ ] Zoho Mail account created (@skymirror.eu)
- [ ] Slack workspace invitation sent
- [ ] Notion workspace access granted
- [ ] GitHub organization invitation sent
- [ ] Linear/Jira/Trello access (based on team)
- [ ] 1Password vault access

### Week 1: Tool Training

- [ ] Slack channels joined, profile completed
- [ ] Notion workspace tour completed
- [ ] Primary project tool training (Linear/Jira/Trello)
- [ ] GitHub setup (SSH keys, 2FA)
- [ ] First team meeting attended

### Week 2: Workflow Integration

- [ ] First task assigned in project tool
- [ ] First PR submitted (engineering)
- [ ] First document created in Notion
- [ ] Integrations configured
- [ ] Workflow questions addressed

---

## Security & Compliance

### Access Control

| Tool | SSO | 2FA | Access Review |
|------|-----|-----|---------------|
| Zoho Mail | Yes | Required | Monthly |
| Slack | Yes | Required | Quarterly |
| Notion | Yes | Required | Quarterly |
| GitHub | Yes | Required | Monthly |
| Linear | Yes | Required | Quarterly |
| Jira | Yes | Required | Quarterly |
| Trello | Yes | Required | Quarterly |

### Data Classification

| Level | Examples | Allowed Tools |
|-------|----------|---------------|
| **Public** | Marketing content | All |
| **Internal** | Meeting notes, processes | Notion, Slack |
| **Confidential** | Financial data, client info | Encrypted Notion, Trello |
| **Restricted** | Credentials, PII | 1Password only |

### Offboarding Checklist

- [ ] Zoho Mail account suspended
- [ ] Slack deactivated
- [ ] Notion access removed
- [ ] GitHub access removed
- [ ] Linear/Jira/Trello access removed
- [ ] 1Password vault access revoked
- [ ] Handover documentation completed

---

## Tool Administration

### Tool Owners

| Tool | Primary Admin | Backup Admin |
|------|---------------|--------------|
| Slack | Operations | CTO |
| Notion | Operations | CEO |
| GitHub | CTO | DevOps Lead |
| Linear | CTO | Tech Lead |
| Jira | Delivery Manager | CTO |
| Trello | Academy Lead | CMO |
| Zoho Mail | CFO | COO |

### Monthly Admin Tasks

- [ ] Review user access across all tools
- [ ] Archive inactive channels/spaces
- [ ] Update integrations as needed
- [ ] Review and optimize workflows
- [ ] Cost review and optimization

---

## Appendix: Quick Reference

### Keyboard Shortcuts

#### Slack
- `Cmd/Ctrl + K` - Quick switch
- `Cmd/Ctrl + Shift + M` - Mentions
- `Cmd/Ctrl + /` - Shortcuts menu

#### Linear
- `C` - Create issue
- `Cmd/Ctrl + K` - Command menu
- `G then B` - Go to backlog

#### Notion
- `Cmd/Ctrl + P` - Quick find
- `Cmd/Ctrl + N` - New page
- `/` - Command menu

#### GitHub
- `.` - Open in github.dev
- `T` - File finder
- `Cmd/Ctrl + K` - Command palette

### Support Contacts

| Tool | Support Channel | Escalation |
|------|-----------------|------------|
| Slack | `#help-slack` | Operations |
| Notion | `#help-notion` | Operations |
| GitHub | `#help-engineering` | CTO |
| Linear | `#help-engineering` | CTO |
| Jira | `#help-engineering` | Delivery Manager |
| Trello | `#help-operations` | COO |
| Zoho Mail | `#help-operations` | COO |

---

*Document Version: 1.2*  
*Last Updated: December 2024*  
*Owner: CEO (Lukman Ibrahim)*  
*Review Cycle: Quarterly*
