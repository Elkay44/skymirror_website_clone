---
sidebar_position: 5
title: "SkyMirror Academy Playbook"
---

# SkyMirror Academy Playbook

## Overview

This playbook defines the operational processes, curriculum development, and delivery standards for SkyMirror Academy's educational programs.

**Team Lead:** Academy Lead (Huzaifa)  
**Scope:** Bootcamps, corporate training, curriculum development  
**Last Updated:** December 2024

:::tip Tooling Reference
For detailed tool configurations and integrations, see the [Workflow & Tooling Guide](./workflow-tooling-guide.md).
:::

---

## Academy Tool Stack

| Tool | Purpose | When to Use |
|------|---------|-------------|
| **Trello** | Program planning, enrollment pipeline, content calendar | Curriculum development, student tracking |
| **Notion** | Course content, documentation, invoicing | Curriculum, student resources, billing |
| **Slack** | Team & student communication | Daily coordination |
| **Traquiva** | Learning delivery platform | Course delivery |
| **Google Meet** | Live sessions | Classes, mentoring |

---

## Trello Board Structure

### Academy Programs Board

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

### Content Development Board

```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│  Backlog    │  Writing    │   Review    │  Recording  │  Published  │
├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ Module      │ Python      │ JavaScript  │ React       │ HTML/CSS    │
│ ideas       │ basics      │ fundamentals│ intro       │ course      │
│             │             │             │             │             │
│ Exercise    │ SQL         │             │ Node.js     │ Git basics  │
│ concepts    │ queries     │             │ API course  │ course      │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

### Trello Labels

| Label | Color | Meaning |
|-------|-------|---------|
| **Urgent** | Red | Due within 48 hours |
| **High Priority** | Orange | Important this week |
| **Bootcamp** | Blue | Bootcamp program |
| **Corporate** | Purple | Corporate training |
| **Content** | Green | Content creation |
| **Review Needed** | Yellow | Awaiting review |

---

## Slack Channels for Academy

| Channel | Purpose |
|---------|---------|
| `#team-academy` | Academy team discussions |
| `#product-academy` | Cross-functional academy updates |
| `#academy-students` | Student community (shared) |
| `#academy-instructors` | Instructor coordination |
| `#academy-content` | Content development |

---

## Daily Academy Workflow

```
09:00 - Check student inquiries (Slack, email)
09:30 - Curriculum development (Notion)
11:00 - Instructor coordination
12:00 - Lunch
13:00 - Student sessions (Google Meet)
15:00 - Content creation
16:00 - Update Trello, plan ahead
17:00 - Review student progress
```

---

## Weekly Academy Rituals

| Day | Activity | Tool |
|-----|----------|------|
| Monday | Week planning | Trello |
| Tuesday | Curriculum review | Notion |
| Wednesday | Instructor sync | Slack/Meet |
| Thursday | Student feedback review | Notion |
| Friday | Content publishing | Traquiva |

---

## Team Structure

### Academy Organization

```
Academy Lead (Huzaifa)
├── Curriculum Development
│   ├── Curriculum Designer
│   └── Content Writers (2)
├── Instruction
│   ├── Lead Instructor
│   ├── Instructors (3)
│   └── Teaching Assistants (4)
├── Student Success
│   ├── Student Success Manager
│   └── Career Coaches (2)
└── Operations
    ├── Program Coordinator
    └── Enrollment Specialist
```

---

## Program Types

### Bootcamps

| Program | Duration | Format | Price |
|---------|----------|--------|-------|
| Full-Stack Web Development | 12 weeks | Full-time | €4,000 |
| Data Science & ML | 12 weeks | Full-time | €4,500 |
| Frontend Development | 8 weeks | Part-time | €2,500 |
| Backend Development | 8 weeks | Part-time | €2,500 |

### Corporate Training

| Program | Duration | Format | Price |
|---------|----------|--------|-------|
| Tech Fundamentals | 3 days | On-site/Virtual | €800/person |
| Custom Development | Variable | On-site/Virtual | Custom |
| Leadership in Tech | 2 days | Virtual | €600/person |

---

## Curriculum Development Process

### Phase 1: Planning (Trello)

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│   Research   │──▶│   Outline    │──▶│   Approve    │
└──────────────┘   └──────────────┘   └──────────────┘
```

- [ ] Market research completed
- [ ] Learning objectives defined
- [ ] Module structure outlined
- [ ] Timeline established
- [ ] Resources identified

### Phase 2: Development (Notion)

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│    Write     │──▶│    Review    │──▶│   Finalize   │
└──────────────┘   └──────────────┘   └──────────────┘
```

- [ ] Content written in Notion
- [ ] Exercises created
- [ ] Peer review completed
- [ ] Technical review completed
- [ ] Final edits applied

### Phase 3: Production (Traquiva)

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│   Record     │──▶│    Edit      │──▶│   Publish    │
└──────────────┘   └──────────────┘   └──────────────┘
```

- [ ] Videos recorded
- [ ] Content uploaded to Traquiva
- [ ] Quizzes/assessments added
- [ ] Quality check completed
- [ ] Published and announced

---

## Student Lifecycle

```
Inquiry → Application → Enrollment → Onboarding → Learning → Graduation → Career Support → Alumni
```

### Stage Details

| Stage | Activities | Tools |
|-------|------------|-------|
| **Inquiry** | Answer questions, provide info | Trello, Slack |
| **Application** | Review application, interview | Trello, Meet |
| **Enrollment** | Payment, contracts | Notion, Trello |
| **Onboarding** | Welcome, setup, orientation | Notion, Slack |
| **Learning** | Classes, projects, mentoring | Traquiva, Meet |
| **Graduation** | Final project, certification | Traquiva |
| **Career Support** | Resume, interviews, placement | Notion, Slack |
| **Alumni** | Community, referrals | Slack |

---

## Quality Metrics

### Student Success KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Completion Rate | >85% | Students completing program |
| NPS Score | >50 | Post-program survey |
| Job Placement Rate | >80% | Within 6 months of graduation |
| Time to First Job | Under 90 days | From graduation |
| Student Satisfaction | >4.5/5 | Course ratings |

### Operational KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Enrollment Conversion | >15% | Inquiries to enrolled |
| Instructor Rating | >4.5/5 | Student feedback |
| Content Quality | >4.5/5 | Student ratings |
| Support Response Time | Under 4 hours | Inquiry response |

---

## Content Standards

### Video Lessons

| Element | Standard |
|---------|----------|
| Length | 5-15 minutes per video |
| Quality | 1080p minimum |
| Audio | Clear, no background noise |
| Captions | Required for all videos |
| Branding | SkyMirror Academy intro/outro |

### Written Content

| Element | Standard |
|---------|----------|
| Format | Markdown in Notion |
| Code Examples | Syntax highlighted, tested |
| Images | High quality, annotated |
| Exercises | Clear instructions, expected output |
| Quizzes | 5-10 questions per module |

---

## Instructor Guidelines

### Before Class

- [ ] Review lesson plan (Notion)
- [ ] Test all code examples
- [ ] Prepare screen share
- [ ] Check recording setup
- [ ] Post pre-class materials (Slack)

### During Class

- [ ] Start recording
- [ ] Welcome students
- [ ] Cover learning objectives
- [ ] Interactive coding
- [ ] Q&A time
- [ ] Assign homework

### After Class

- [ ] Upload recording to Traquiva
- [ ] Post summary in Slack
- [ ] Update Trello card
- [ ] Review student questions
- [ ] Prepare next session

---

## Trello for Academy Enrollment

### Lead Sources (Labels)

| Label | Color | Source |
|-------|-------|--------|
| Website | Blue | Inquiry form |
| Social | Purple | LinkedIn, Instagram |
| Referral | Green | Alumni, partners |
| Event | Orange | Webinars, workshops |
| Corporate | Yellow | Direct outreach |

### Enrollment Pipeline (Trello Board)

```
┌───────────┬───────────┬───────────┬───────────┬───────────┐
│  Inquiry  │ Qualified │ Interview │ Enrolled  │  Started  │
├───────────┼───────────┼───────────┼───────────┼───────────┤
│ New       │ Reviewed  │ Scheduled │ Payment   │ Active    │
│ inquiries │ applicants│ interviews│ received  │ students  │
└───────────┴───────────┴───────────┴───────────┴───────────┘
```

### Required Card Fields (Custom Fields)

- Name, Email, Phone
- Program of Interest
- Start Date Preference
- Background/Experience

---

## Integrations

| Integration | Trigger | Action |
|-------------|---------|--------|
| Trello → Slack | New inquiry | Post to `#team-academy` |
| Trello → Slack | Card completed | Notify team |
| Traquiva → Notion | Course published | Update curriculum docs |
| Trello → Notion | Enrollment | Update student database |

---

## Templates

### Notion Templates

- Course Outline Template
- Lesson Plan Template
- Student Progress Tracker
- Feedback Survey Template
- Career Support Checklist

### Trello Templates

- New Program Card
- Content Development Card
- Corporate Training Card
- Event Planning Card

---

## Onboarding New Instructors

### Week 1

- [ ] Tool access (Trello, Notion, Slack, Traquiva)
- [ ] Review Academy playbook
- [ ] Shadow existing instructor
- [ ] Review curriculum standards
- [ ] Meet the team

### Week 2

- [ ] Practice teaching session
- [ ] Feedback and coaching
- [ ] Assign first module
- [ ] Review student feedback process

### Week 3+

- [ ] Lead first class (observed)
- [ ] Independent teaching
- [ ] Regular check-ins

---

*Document Version: 1.0*  
*Last Updated: December 2024*  
*Owner: Academy Lead (Huzaifa)*  
*Review Cycle: Quarterly*
