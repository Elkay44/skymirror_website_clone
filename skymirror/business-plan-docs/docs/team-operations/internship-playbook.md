---
sidebar_position: 8
title: "Internship Playbook"
---

# Internship Playbook: Tools, Workflows & Daily Operations

## Overview

This playbook is your operational guide for the day-to-day execution of the internship program. It covers tool usage, workflows, communication protocols, and best practices for maximum productivity and learning.

**Audience:** Interns, Mentors, Program Coordinators  
**Last Updated:** December 2024

:::tip Related Documentation
- [Program Overview](./internship-program-overview.md) - Program structure and philosophy
- [Roadmap](./internship-roadmap.md) - Week-by-week execution plan
- [Coding Standards](./internship-coding-standards.md) - Technical guidelines
:::

---

## Tool Ecosystem

### Complete Tool Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERN TOOL ECOSYSTEM                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TASK MANAGEMENT                                                │
│  ├─ Trello (Personal & Learning)                                │
│  └─ Jira (Product Development)                                  │
│                                                                  │
│  COMMUNICATION                                                   │
│  ├─ Slack (Team chat)                                           │
│  ├─ Google Meet (Video calls)                                   │
│  └─ Email (Formal communication)                                │
│                                                                  │
│  DEVELOPMENT                                                     │
│  ├─ GitHub (Code & version control)                             │
│  ├─ VS Code / Cursor (Code editor)                              │
│  ├─ Antigravity (Dev environment)                               │
│  └─ Claude Code (AI coding assistant)                           │
│                                                                  │
│  SCHEDULING                                                      │
│  ├─ Google Calendar (Time blocking)                             │
│  └─ Toggl (Time tracking - optional)                            │
│                                                                  │
│  DOCUMENTATION                                                   │
│  ├─ Notion (Company wiki)                                       │
│  └─ Markdown (Technical docs)                                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Trello: Personal Productivity & Learning

### Purpose
Trello manages your **personal tasks** and **learning activities**. It's your daily planning tool and self-development tracker.

### Board Setup

#### 1. Personal Board: "My Internship"

**Lists:**
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ To Do Today │ In Progress │   Blocked   │    Done     │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Morning     │ Currently   │ Waiting for │ Completed   │
│ tasks       │ working on  │ review/help │ today       │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Card Template:**
```
Title: [Action] Brief description
Description:
- What: Clear task definition
- Why: Purpose/context
- Time: Estimated duration
- Notes: Any relevant info

Labels:
🔴 Urgent
🟠 High Priority
🟡 Medium Priority
🟢 Low Priority
🔵 Learning
🟣 Personal Growth
```

**Example Cards:**
- ✅ Complete PR for user authentication feature
- 📚 Watch lecture on API design
- 🐛 Fix bug in checkout flow
- 📝 Write weekly reflection

#### 2. Academy Board: "Learning & Growth"

**Lists:**
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│  Lectures   │ Assignments │  Resources  │  Completed  │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ To watch    │ To complete │ To read     │ Done ✅     │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Lecture Card Template:**
```
Title: Lecture: [Topic Name]
Description:
- Duration: XX minutes
- Key concepts: [List]
- Pre-requisites: [If any]
- Resources: [Links]

Checklist:
☐ Watch lecture
☐ Take notes
☐ Complete exercises
☐ Ask questions
☐ Apply in code
```

### Daily Trello Workflow

**Morning (9:00 AM):**
1. Review "To Do Today" list
2. Prioritize top 3 tasks
3. Move today's focus to "In Progress"
4. Check Academy board for lectures

**During Day:**
1. Update card status in real-time
2. Add notes/blockers to cards
3. Move completed items to "Done"
4. Create new cards as tasks emerge

**Evening (5:00 PM):**
1. Move all completed cards to "Done"
2. Review "Blocked" items
3. Plan tomorrow's "To Do Today"
4. Archive old "Done" cards (weekly)

### Trello Best Practices

✅ **Do:**
- Update cards in real-time
- Break large tasks into <2 hour chunks
- Use labels consistently
- Add due dates for time-sensitive items
- Comment on blockers immediately
- Archive completed cards weekly

❌ **Don't:**
- Let cards go stale (update daily)
- Create vague cards ("Work on stuff")
- Ignore blocked items
- Overload "To Do Today" (max 5-7 cards)
- Forget to celebrate "Done" items

---

## Jira: Product Development

### Purpose
Jira manages **professional product work**. This is where real features, bugs, and engineering tasks live.

### Jira Structure

```
EPIC (Large Initiative)
  ├─ STORY (User-facing feature)
  │   ├─ TASK (Implementation work)
  │   ├─ TASK (Testing work)
  │   └─ TASK (Documentation)
  ├─ STORY (Another feature)
  └─ BUG (Defect to fix)
```

### Workflow States

```
┌─────────┐   ┌──────────┐   ┌─────────────┐   ┌───────────┐   ┌──────┐
│ Backlog │──▶│   Todo   │──▶│ In Progress │──▶│ In Review │──▶│ Done │
└─────────┘   └──────────┘   └─────────────┘   └───────────┘   └──────┘
     ▲                                                               │
     └───────────────────────────────────────────────────────────────┘
                           (Reopened if issues found)
```

### Ticket Naming Convention

**Format:** `[Type] Brief description`

**Examples:**
- `[Feature] Add OAuth2 login support`
- `[Bug] Fix timeout on payment API`
- `[Chore] Update dependencies to latest versions`
- `[Docs] Document new API endpoints`

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Summary** | Brief, clear title | "Add user profile photo upload" |
| **Description** | Detailed requirements | User story, acceptance criteria |
| **Assignee** | Who's working on it | Your name |
| **Sprint** | Current sprint | "Sprint 12" |
| **Story Points** | Effort estimate | 3 (Fibonacci: 1,2,3,5,8) |
| **Labels** | Categories | frontend, api, urgent |
| **Priority** | Importance | High, Medium, Low |

### Description Template

```markdown
## User Story
As a [user type], I want to [action] so that [benefit].

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Notes
- Implementation approach
- Dependencies
- Edge cases to consider

## Resources
- Design mockups: [link]
- API docs: [link]
- Related tickets: PROJ-123
```

### Daily Jira Workflow

**Morning Stand-up (9:15 AM):**
1. Open your assigned tickets
2. Update status to "In Progress"
3. Review acceptance criteria
4. Identify any blockers

**During Development:**
1. Keep ticket in "In Progress"
2. Add comments on progress/blockers
3. Link commits to ticket (use ticket ID)
4. Update time tracking (if enabled)

**When Creating PR:**
1. Move ticket to "In Review"
2. Link PR in ticket comments
3. Tag reviewer

**After PR Merge:**
1. Move ticket to "Done"
2. Add final comments
3. Close ticket

### Jira Best Practices

✅ **Do:**
- Update ticket status in real-time
- Comment on blockers immediately
- Link all commits and PRs
- Ask questions in ticket comments
- Keep descriptions up-to-date
- Log time spent (if tracking enabled)

❌ **Don't:**
- Leave tickets in "In Progress" for days without updates
- Work on unassigned tickets
- Skip acceptance criteria
- Forget to link PRs
- Close tickets without verification

### Story Point Estimation Guide

| Points | Effort | Time | Complexity |
|--------|--------|------|------------|
| **1** | Trivial | <2 hours | Very simple, well-known |
| **2** | Small | 2-4 hours | Simple, clear path |
| **3** | Medium | 4-8 hours | Some complexity |
| **5** | Large | 1-2 days | Complex, multiple parts |
| **8** | Very Large | 2-3 days | Very complex, break down |
| **13+** | Too Large | >3 days | Must be split into smaller stories |

**Intern Rule:** If you estimate >5 points, discuss with mentor about breaking it down.

---

## GitHub: Code & Version Control

### Purpose
GitHub is where all code lives. It's your version control, code review, and CI/CD platform.

### Branch Naming Convention

**Format:** `<type>/<ticket-id>-<brief-description>`

**Types:**
- `feature/` - New functionality
- `bugfix/` - Bug fixes
- `hotfix/` - Urgent production fixes
- `chore/` - Maintenance tasks
- `docs/` - Documentation only

**Examples:**
```
feature/SKY-123-add-oauth-login
bugfix/SKY-456-fix-payment-timeout
chore/SKY-789-update-dependencies
docs/SKY-101-api-documentation
```

### Commit Message Convention

**Format:**
```
<type>(<scope>): <subject> [TICKET-ID]

<body>

<footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting, no code change
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

**Examples:**
```
feat(auth): add OAuth2 login support SKY-123

- Implement Google OAuth2 flow
- Add user session management
- Update login UI

Closes SKY-123
```

```
fix(payment): resolve API timeout issue SKY-456

The payment API was timing out due to missing
retry logic. Added exponential backoff.

Fixes SKY-456
```

### Pull Request Workflow

#### 1. Before Creating PR

**Checklist:**
- [ ] All tests pass locally
- [ ] Code follows style guide
- [ ] No console.logs or debug code
- [ ] Documentation updated
- [ ] Commits are clean and logical

#### 2. Creating PR

**PR Title Format:**
```
[TICKET-ID] Brief description of changes
```

**PR Description Template:**
```markdown
## Description
Brief summary of what this PR does.

## Related Ticket
Closes SKY-123

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing Done
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Edge cases tested

## Screenshots (if UI changes)
[Add screenshots]

## Checklist
- [ ] Code follows style guide
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes
- [ ] Ready for review

## Questions/Notes
Any questions or context for reviewers.
```

#### 3. During Review

**When you receive feedback:**
1. Read all comments carefully
2. Ask clarifying questions if needed
3. Make requested changes
4. Respond to each comment
5. Request re-review when ready

**Response Examples:**
- ✅ "Good catch! Fixed in latest commit."
- ✅ "Changed as suggested. Let me know if this works."
- ✅ "I kept the original approach because [reason]. Thoughts?"
- ❌ "Done." (too brief, not helpful)

#### 4. After Approval

1. Ensure CI/CD passes
2. Squash commits if needed
3. Merge PR (or ask mentor to merge)
4. Delete branch
5. Update Jira ticket to "Done"
6. Celebrate! 🎉

### GitHub Best Practices

✅ **Do:**
- Commit frequently with clear messages
- Keep PRs small (<400 lines)
- Write descriptive PR descriptions
- Respond to reviews promptly
- Test before creating PR
- Link PRs to Jira tickets

❌ **Don't:**
- Commit directly to main/master
- Create massive PRs (>500 lines)
- Ignore CI/CD failures
- Force push after review starts
- Leave unresolved comments
- Merge without approval

---

## Slack: Communication

### Purpose
Slack is your primary communication tool for team coordination, questions, and updates.

### Key Channels

| Channel | Purpose | When to Use |
|---------|---------|-------------|
| **#interns-2025** | Intern cohort chat | Questions, sharing, support |
| **#team-engineering** | Engineering team | Technical discussions |
| **#github-activity** | GitHub notifications | Auto-posted, read-only |
| **#jira-updates** | Jira notifications | Auto-posted, read-only |
| **#daily-standup** | Stand-up updates | Daily check-ins |
| **#random** | Social/fun | Non-work chat |
| **#announcements** | Company news | Important updates |

### Communication Guidelines

#### Response Time Expectations

| Priority | Response Time | Example |
|----------|---------------|---------|
| 🔴 **Urgent** | <30 minutes | Production down, blocker |
| 🟠 **High** | <2 hours | PR review needed, question |
| 🟡 **Normal** | <4 hours | General question |
| 🟢 **Low** | <24 hours | FYI, nice-to-know |

#### Asking Good Questions

**❌ Bad Question:**
```
"My code doesn't work. Help?"
```

**✅ Good Question:**
```
"I'm getting a 404 error when calling the /api/users endpoint.

Context:
- Working on ticket SKY-123
- Using Postman to test
- Endpoint works in dev, fails in staging

What I've tried:
- Checked API logs (no errors)
- Verified endpoint URL
- Tested with different user IDs

Error message: "User not found"

Could this be a database sync issue? 

Code: [link to GitHub]
```

#### Daily Stand-up Format

**Post in #daily-standup:**
```
📅 [Your Name] - [Date]

✅ Yesterday:
- Completed PR for user authentication (SKY-123)
- Fixed bug in payment flow (SKY-456)
- Attended lecture on API design

🎯 Today:
- Start work on profile photo upload (SKY-789)
- Code review for teammate's PR
- Complete testing assignment

🚧 Blockers:
- None / Waiting for design mockups for SKY-789
```

#### End-of-Day Update

**Send to your mentor (DM):**
```
📊 EOD Update - [Date]

Completed:
✅ Merged PR for SKY-123
✅ 70% done with SKY-789

In Progress:
🔄 SKY-789 - Profile photo upload (will finish tomorrow)

Blockers:
🚧 Need design review for upload UI

Tomorrow:
📋 Complete SKY-789
📋 Start SKY-790

Questions:
❓ Best approach for image compression?
```

### Slack Best Practices

✅ **Do:**
- Use threads for discussions
- React with emojis to acknowledge
- @mention for direct attention
- Use code blocks for code snippets
- Search before asking (might be answered)
- Be respectful and professional

❌ **Don't:**
- Send "hello" and wait for response (just ask)
- DM everyone (use channels)
- Ignore @mentions
- Post sensitive info in public channels
- Spam multiple channels
- Expect instant responses (async communication)

### Code Formatting in Slack

**Inline code:**
```
Use `backticks` for inline code
```

**Code blocks:**
```
```javascript
function example() {
  return "Use triple backticks";
}
```
```

---

## Google Calendar: Time Management

### Purpose
Google Calendar ensures everyone knows when you're available and helps you manage time effectively.

### Calendar Setup

**Shared Calendar:** "Interns Schedule"
- All lectures
- Stand-ups
- Demos
- Mentor 1:1s
- Company meetings

**Your Personal Calendar:**
- Deep work blocks
- Personal tasks
- Breaks
- Learning time

### Time Blocking Strategy

**Example Daily Schedule:**
```
09:00 - 09:15  🎤 Daily Stand-up (Shared)
09:15 - 10:30  💻 Deep Work Block 1
10:30 - 11:00  ☕ Break
11:00 - 12:00  💻 Deep Work Block 2
12:00 - 13:00  🍽️ Lunch
13:00 - 14:30  💻 Afternoon Work
14:30 - 15:00  ☕ Break
15:00 - 16:30  💻 Final Work Block
16:30 - 17:00  📝 Wrap-up & Planning
```

**Weekly Recurring Events:**
```
Monday 09:00     Sprint Planning
Monday 10:00     Week Kickoff
Wednesday 15:00  Mid-week Check-in
Thursday 14:00   Technical Deep-dive
Friday 11:00     Sprint Demo
Friday 13:00     Retrospective
Friday 14:00     Mentor 1:1
```

### Calendar Best Practices

✅ **Do:**
- Block focus time for deep work
- Mark yourself as "Busy" during focus blocks
- Accept meeting invites promptly
- Add Zoom/Meet links to events
- Set reminders (15 min before)
- Update if plans change

❌ **Don't:**
- Double-book yourself
- Ignore meeting invites
- Schedule over others' focus time
- Forget to block lunch
- Over-schedule (leave buffer time)

---

## Time Tracking (Optional)

### Purpose
Time tracking helps you understand where time goes and improve productivity.

### Tools

**Option 1: Toggl**
- Simple, visual
- Desktop + mobile apps
- Easy reporting

**Option 2: Jira Time Tracking**
- Built into Jira
- Automatic ticket linking
- Sprint reports

### What to Track

**Categories:**
- Development (coding)
- Code Review
- Testing
- Meetings
- Learning (lectures)
- Documentation
- Debugging
- Planning

### Weekly Time Review

**Every Friday:**
1. Review time distribution
2. Identify time sinks
3. Adjust next week's plan
4. Share insights with mentor

**Example Analysis:**
```
Week 2 Time Breakdown:
- Development: 18 hours (45%)
- Learning: 8 hours (20%)
- Meetings: 6 hours (15%)
- Code Review: 4 hours (10%)
- Other: 4 hours (10%)

Insights:
- Spending good time on development ✅
- Could reduce meeting time
- Need more code review practice
```

---

## Development Environment

### Required Setup

#### 1. Code Editor
**Primary:** VS Code or Cursor
**Extensions:**
- ESLint / Pylint
- Prettier
- GitLens
- GitHub Copilot (if available)
- Stack-specific extensions

#### 2. Antigravity Setup
**Purpose:** Standardized dev environment

**Setup Steps:**
1. Install Antigravity CLI
2. Clone project repository
3. Run `antigravity init`
4. Verify environment works

#### 3. Claude Code (GLM Coding Plan)
**Purpose:** AI-powered coding assistant

**Setup:**
```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Configure GLM
npx @z_ai/coding-helper

# Start in project
cd your-project
claude
```

**Usage Examples:**
```
"Explain this codebase"
"Fix this failing test"
"Refactor this function"
"Write unit tests for this file"
"Why is this API slow?"
```

### Development Workflow

**Starting Work:**
```bash
# 1. Pull latest changes
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/SKY-123-add-feature

# 3. Start development
# ... code ...

# 4. Commit frequently
git add .
git commit -m "feat(module): add feature SKY-123"

# 5. Push to remote
git push origin feature/SKY-123-add-feature

# 6. Create PR on GitHub
```

**Before Creating PR:**
```bash
# Run tests
npm test  # or pytest

# Run linter
npm run lint  # or ruff check .

# Format code
npm run format  # or black .

# Check build
npm run build  # if applicable
```

---

## Meeting Protocols

### Daily Stand-up (15 min)

**Format:**
- Each person: 2-3 minutes max
- Three questions:
  1. What did you do yesterday?
  2. What will you do today?
  3. Any blockers?

**Tips:**
- Be concise
- Focus on outcomes, not activities
- Raise blockers (don't solve in stand-up)
- Take detailed discussions offline

### Sprint Planning (1 hour)

**Agenda:**
1. Review last sprint (10 min)
2. Discuss upcoming work (20 min)
3. Task assignment (20 min)
4. Questions & clarifications (10 min)

**Your Role:**
- Understand assigned tasks
- Ask clarifying questions
- Commit to realistic workload
- Raise concerns early

### Sprint Demo (1 hour)

**Your Demo (5-10 min):**
1. **Context:** "I worked on [feature] for [purpose]"
2. **Demo:** Show working feature (live demo)
3. **Challenges:** "Main challenge was [X], solved by [Y]"
4. **Impact:** "This enables users to [benefit]"
5. **Q&A:** Answer questions

**Demo Tips:**
- Practice beforehand
- Have backup (screenshots/video)
- Focus on user value
- Be proud of your work!

### Sprint Retrospective (30 min)

**Format:**
- What went well? ✅
- What could improve? 🔄
- Action items 📋

**Your Participation:**
- Share honest feedback
- Suggest improvements
- Volunteer for action items
- Be constructive

### Mentor 1:1 (30-60 min)

**Weekly Agenda:**
1. **Progress Review** (10 min)
   - What you accomplished
   - Challenges faced
   
2. **Technical Discussion** (20 min)
   - Code review feedback
   - Learning questions
   - Best practices
   
3. **Growth & Career** (10 min)
   - Skill development
   - Career goals
   - Next steps

**Prepare:**
- List of questions
- Code examples to discuss
- Reflection on week
- Goals for next week

---

## Documentation Standards

### Code Documentation

**Inline Comments:**
```typescript
// ❌ Bad: Obvious comment
let x = 5; // Set x to 5

// ✅ Good: Explains why
let maxRetries = 5; // API rate limit allows 5 retries per minute
```

**Function Documentation:**
```typescript
/**
 * Uploads user profile photo to S3 and updates database
 * 
 * @param userId - Unique user identifier
 * @param file - Image file (max 5MB, jpg/png only)
 * @returns Promise<string> - URL of uploaded photo
 * @throws {ValidationError} If file exceeds size limit
 * @throws {StorageError} If S3 upload fails
 */
async function uploadProfilePhoto(userId: string, file: File): Promise<string> {
  // Implementation
}
```

### README Files

**Project README Template:**
```markdown
# Project Name

Brief description of what this project does.

## Setup

```bash
npm install
npm run dev
```

## Architecture

Brief overview of structure.

## Key Features

- Feature 1
- Feature 2

## Testing

```bash
npm test
```

## Deployment

Brief deployment instructions.

## Contributing

Link to contributing guide.
```

### Technical Documentation

**When to Document:**
- New features
- Complex logic
- API endpoints
- Configuration changes
- Architectural decisions

**Where to Document:**
- README files (project overview)
- Inline comments (complex code)
- Notion (architecture, decisions)
- Jira (feature context)
- PR descriptions (change rationale)

---

## Productivity Tips

### Focus Techniques

**Pomodoro Technique:**
```
25 min work → 5 min break → repeat 4x → 15 min long break
```

**Deep Work Blocks:**
```
90 min focused work → 15 min break
- No Slack
- No email
- No phone
- Single task only
```

### Task Management

**Eisenhower Matrix:**
```
┌─────────────────┬─────────────────┐
│  Urgent +       │  Not Urgent +   │
│  Important      │  Important      │
│  DO NOW         │  SCHEDULE       │
├─────────────────┼─────────────────┤
│  Urgent +       │  Not Urgent +   │
│  Not Important  │  Not Important  │
│  DELEGATE       │  ELIMINATE      │
└─────────────────┴─────────────────┘
```

**Daily Top 3:**
- Identify 3 most important tasks
- Complete before anything else
- Everything else is bonus

### Energy Management

**Peak Performance Times:**
- Morning (9-12): Complex problem-solving
- Afternoon (1-3): Meetings, collaboration
- Late afternoon (3-5): Admin, planning

**Energy Boosters:**
- Take real breaks (away from screen)
- Stay hydrated
- Move every hour
- Eat proper lunch
- Sleep 7-8 hours

---

## Troubleshooting Guide

### Common Issues & Solutions

#### "I'm Stuck on a Problem"

**Steps:**
1. **Try (30 min):** Debug yourself
2. **Search (15 min):** Google, Stack Overflow, docs
3. **Ask Claude Code (15 min):** Use AI assistant
4. **Ask Team (immediate):** Post in Slack with context

**When to Ask:**
- After 1 hour of being stuck
- If blocking other work
- If urgent/time-sensitive

#### "I'm Behind Schedule"

**Steps:**
1. **Assess:** How far behind? Why?
2. **Communicate:** Tell mentor immediately
3. **Adjust:** Reduce scope or get help
4. **Learn:** What to do differently?

**Don't:**
- Hide the problem
- Work excessive overtime
- Panic

#### "I Don't Understand the Task"

**Steps:**
1. **Re-read:** Jira ticket, acceptance criteria
2. **Research:** Similar features, documentation
3. **Ask:** Mentor or team (don't guess)

**Good Questions:**
- "What's the expected user flow?"
- "Are there similar features I can reference?"
- "What's the priority: speed or perfection?"

#### "My PR Has Lots of Feedback"

**Mindset:**
- Feedback = learning opportunity
- Everyone gets feedback (even seniors)
- Code review makes you better

**Response:**
1. Read all feedback carefully
2. Ask questions if unclear
3. Make changes
4. Thank reviewers
5. Request re-review

#### "I'm Overwhelmed"

**Steps:**
1. **Pause:** Take a break
2. **List:** Write down everything
3. **Prioritize:** What's actually urgent?
4. **Communicate:** Talk to mentor
5. **Adjust:** Reduce scope if needed

**Remember:**
- It's a learning program
- Everyone feels this sometimes
- Asking for help is strength, not weakness

---

## Success Habits

### Daily Habits

**Morning:**
- [ ] Review calendar
- [ ] Check Slack messages
- [ ] Plan top 3 tasks
- [ ] Attend stand-up
- [ ] Start deep work

**During Day:**
- [ ] Update Jira in real-time
- [ ] Commit code frequently
- [ ] Take regular breaks
- [ ] Ask questions when stuck
- [ ] Help others when possible

**Evening:**
- [ ] Update all tickets
- [ ] Push code to GitHub
- [ ] Send EOD update to mentor
- [ ] Plan tomorrow
- [ ] Reflect on learnings

### Weekly Habits

**Monday:**
- [ ] Sprint planning
- [ ] Set weekly goals
- [ ] Review calendar

**Wednesday:**
- [ ] Mid-week check-in
- [ ] Adjust if behind

**Friday:**
- [ ] Sprint demo
- [ ] Retrospective
- [ ] Mentor 1:1
- [ ] Weekly reflection
- [ ] Time review

### Growth Habits

**Continuous:**
- Ask "why?" not just "how?"
- Document learnings
- Share knowledge
- Seek feedback
- Practice explaining code
- Read others' code
- Contribute to discussions

---

## Emergency Procedures

### Technical Emergencies

**Production Issue:**
1. Alert mentor immediately
2. Don't make changes without approval
3. Document what happened
4. Learn from incident

**Lost Work:**
1. Check Git history
2. Check local backups
3. Ask for help recovering
4. Commit more frequently going forward

**Access Issues:**
1. Post in #it-help
2. Tag IT support
3. Work on offline tasks meanwhile

### Personal Emergencies

**Sick Day:**
1. Message mentor ASAP
2. Update Jira tickets
3. Set Slack status
4. Don't work when sick

**Personal Issue:**
1. Talk to mentor or HR
2. We're understanding
3. Health/family first

---

## Quick Reference

### Daily Checklist

```
Morning:
☐ Check Slack
☐ Review calendar
☐ Plan top 3 tasks
☐ Attend stand-up

During Day:
☐ Update Jira real-time
☐ Commit frequently
☐ Ask questions
☐ Take breaks

Evening:
☐ Update tickets
☐ Push code
☐ EOD update
☐ Plan tomorrow
```

### Key Shortcuts

**Slack:**
- `Cmd/Ctrl + K` - Quick switcher
- `Cmd/Ctrl + /` - Shortcuts menu
- `@channel` - Notify everyone
- `@here` - Notify online users

**VS Code:**
- `Cmd/Ctrl + P` - Quick file open
- `Cmd/Ctrl + Shift + P` - Command palette
- `Cmd/Ctrl + /` - Toggle comment
- `Cmd/Ctrl + D` - Select next occurrence

**GitHub:**
- `T` - File finder
- `L` - Jump to line
- `B` - Blame view
- `Y` - Permalink

### Contact List

| Need | Contact | Channel |
|------|---------|---------|
| Technical help | Your mentor | Slack DM |
| Program questions | CTO (Eric) | Slack DM |
| IT issues | IT Support | #it-help |
| HR matters | Operations | #hr-support |
| Urgent | Your mentor | Phone/Slack |

---

## Appendix: Templates

### Weekly Reflection Template

```markdown
# Week [X] Reflection

## Accomplishments
- 
- 
- 

## Challenges
- 
- 

## Learnings
- 
- 

## Next Week Goals
- 
- 

## Questions/Concerns
- 
```

### Bug Report Template

```markdown
## Bug Description
Brief description of the issue.

## Steps to Reproduce
1. 
2. 
3. 

## Expected Behavior
What should happen.

## Actual Behavior
What actually happens.

## Environment
- Browser/OS:
- Version:
- User type:

## Screenshots
[Add if applicable]

## Additional Context
Any other relevant information.
```

---

**Questions?** Ask in #interns-2025 or message your mentor!

**Ready to start?** Check the [Roadmap](./internship-roadmap.md) for your week-by-week plan!
