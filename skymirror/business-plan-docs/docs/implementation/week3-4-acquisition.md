---
sidebar_position: 2
title: "Week 3-4: Customer Acquisition"
---

# Skymirror Implementation: Week 3-4
## Customer Acquisition Tracking & Investor Data Room

### Overview
This document provides the detailed implementation plan for setting up customer acquisition tracking systems and preparing the investor data room during Weeks 3-4.

---

## Week 3: Customer Acquisition Tracking

### Day 1-2: CRM Setup (HubSpot)

#### HubSpot Configuration

**1. Pipeline Stages**

| Stage | Definition | Exit Criteria | Probability |
|-------|------------|---------------|-------------|
| Lead | New contact identified | Qualified as potential fit | 10% |
| Qualified | Meets ICP criteria | Discovery call scheduled | 20% |
| Discovery | Initial meeting completed | Pain confirmed, budget discussed | 30% |
| Demo | Product demonstration | Positive feedback, stakeholders identified | 50% |
| Proposal | Proposal/quote sent | Verbal commitment or negotiation | 70% |
| Negotiation | Terms being discussed | Agreement on terms | 85% |
| Closed Won | Contract signed | Payment received | 100% |
| Closed Lost | Deal lost | Reason documented | 0% |

**2. Contact Properties (Custom)**

| Property | Type | Purpose |
|----------|------|---------|
| Company Size | Number | ICP qualification |
| Industry | Dropdown | Segment analysis |
| Product Interest | Multi-select | CheckMet, Traquiva, Software, Academy |
| Lead Source | Dropdown | Attribution |
| Pain Points | Multi-select | Discovery insights |
| Budget Range | Dropdown | Qualification |
| Decision Timeline | Dropdown | Forecasting |
| Champion Name | Text | Relationship tracking |
| Competitor | Dropdown | Competitive intelligence |

**3. Deal Properties (Custom)**

| Property | Type | Purpose |
|----------|------|---------|
| Product | Dropdown | CheckMet, Traquiva, Software, Academy |
| Number of Users | Number | Sizing |
| Contract Length | Dropdown | 12/24/36 months |
| Discount % | Number | Margin tracking |
| Implementation Fee | Currency | One-time revenue |
| MRR | Currency | Recurring revenue |
| ARR | Currency | Annual value |
| Close Reason | Dropdown | Win/loss analysis |
| Competitor Lost To | Dropdown | Competitive tracking |

---

### Day 3-4: Sales Analytics Dashboard

#### Key Metrics to Track

**Funnel Metrics**

| Metric | Definition | Target | Tracking |
|--------|------------|--------|----------|
| Leads Generated | New leads per month | 50+ | HubSpot |
| MQL Rate | Leads → MQL conversion | 40% | HubSpot |
| SQL Rate | MQL → SQL conversion | 50% | HubSpot |
| Demo Rate | SQL → Demo conversion | 60% | HubSpot |
| Win Rate | Demo → Closed Won | 25% | HubSpot |
| Sales Cycle | Avg days to close | &lt;60 days | HubSpot |

**Revenue Metrics**

| Metric | Definition | Target | Tracking |
|--------|------------|--------|----------|
| New MRR | MRR from new customers | €5K+/mo | HubSpot + Billing |
| Expansion MRR | MRR from upsells | €1K+/mo | HubSpot + Billing |
| Churned MRR | MRR lost | &lt;5% | Billing |
| Net New MRR | New + Expansion - Churn | Positive | Calculated |
| Average Deal Size | Total revenue / Deals | €15K | HubSpot |

**Acquisition Metrics**

| Metric | Definition | Target | Tracking |
|--------|------------|--------|----------|
| CAC | Total S&M spend / New customers | &lt;€8K | Finance + HubSpot |
| CAC Payback | Months to recover CAC | &lt;12 mo | Calculated |
| LTV:CAC | Customer LTV / CAC | Over 3:1 | Calculated |
| Marketing Qualified Leads | Leads meeting criteria | 20+/mo | HubSpot |
| Sales Qualified Leads | Leads accepted by sales | 10+/mo | HubSpot |

#### Dashboard Template

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SALES DASHBOARD - [MONTH]                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PIPELINE                    REVENUE                   EFFICIENCY   │
│  ┌──────────────┐          ┌──────────────┐         ┌──────────────┐│
│  │ Value: €450K │          │ MRR: €15.2K  │         │ CAC: €7,500  ││
│  │ Deals: 12    │          │ ▲ +12% MoM   │         │ Target: €8K  ││
│  └──────────────┘          └──────────────┘         └──────────────┘│
│                                                                      │
│  FUNNEL THIS MONTH                                                   │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │ Leads: 45 → MQL: 18 → SQL: 9 → Demo: 5 → Proposal: 3 → Won: 1  ││
│  │         40%      50%      56%       60%         33%             ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                      │
│  BY PRODUCT                                                          │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│
│  │ CheckMet     │ │ Traquiva     │ │ Software     │ │ Academy      ││
│  │ €250K pipe   │ │ €80K pipe    │ │ €100K pipe   │ │ €20K pipe    ││
│  │ 6 deals      │ │ 2 deals      │ │ 3 deals      │ │ 1 deal       ││
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘│
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Day 5: Lead Source Tracking

#### Lead Source Categories

| Source | Channel | Tracking Method |
|--------|---------|-----------------|
| Organic Search | Website | UTM + HubSpot |
| Paid Search | Google Ads | UTM + HubSpot |
| LinkedIn | Organic + Ads | UTM + HubSpot |
| Referral | Customer referral | Manual tag |
| Partner | Partner referral | Partner code |
| Event | Conference/webinar | Event code |
| Outbound | SDR prospecting | Manual tag |
| Content | Blog/whitepaper | UTM + HubSpot |

#### Attribution Model

**First Touch Attribution:**
- Credit goes to first marketing touchpoint
- Used for: Understanding awareness channels

**Last Touch Attribution:**
- Credit goes to last touchpoint before conversion
- Used for: Understanding conversion drivers

**Multi-Touch Attribution (Future):**
- Credit distributed across touchpoints
- Used for: Full funnel optimization

---

## Week 4: Investor Data Room

### Day 1-2: Data Room Structure

#### Data Room Organization

```
📁 Skymirror Data Room
├── 📁 1. Company Overview
│   ├── Executive Summary.pdf
│   ├── Pitch Deck.pdf
│   ├── One-Pager.pdf
│   └── Company Timeline.pdf
│
├── 📁 2. Corporate Documents
│   ├── Articles of Association.pdf
│   ├── Shareholder Agreement.pdf
│   ├── Cap Table.xlsx
│   ├── Board Resolutions.pdf
│   └── Corporate Registration.pdf
│
├── 📁 3. Financial Information
│   ├── Historical Financials (2023-2024).xlsx
│   ├── Financial Projections (5-year).xlsx
│   ├── Monthly P&L.xlsx
│   ├── Cash Flow Statement.xlsx
│   ├── Unit Economics Model.xlsx
│   └── Burn Rate Analysis.xlsx
│
├── 📁 4. Product & Technology
│   ├── Product Overview - CheckMet.pdf
│   ├── Product Overview - Traquiva.pdf
│   ├── Technology Architecture.pdf
│   ├── Product Roadmap.pdf
│   ├── IP Portfolio Summary.pdf
│   └── Security & Compliance.pdf
│
├── 📁 5. Market & Competition
│   ├── Market Analysis.pdf
│   ├── Competitive Landscape.pdf
│   ├── TAM-SAM-SOM Analysis.pdf
│   └── Industry Reports/
│
├── 📁 6. Customers & Traction
│   ├── Customer List (Anonymized).pdf
│   ├── Case Studies/
│   ├── Customer Testimonials.pdf
│   ├── NPS Results.pdf
│   ├── Retention Metrics.pdf
│   └── Pipeline Summary.xlsx
│
├── 📁 7. Team
│   ├── Org Chart.pdf
│   ├── Founder Bios.pdf
│   ├── Key Hire Profiles.pdf
│   ├── Advisory Board.pdf
│   └── Hiring Plan.pdf
│
├── 📁 8. Legal
│   ├── Employment Agreements/
│   ├── IP Assignments/
│   ├── Customer Contracts (Samples)/
│   ├── Vendor Agreements/
│   ├── GDPR Compliance.pdf
│   └── Litigation Summary.pdf
│
└── 📁 9. Fundraising
    ├── Use of Funds.pdf
    ├── Funding History.pdf
    ├── Investor Updates/
    └── Term Sheet (Draft).pdf
```

---

### Day 3-4: Key Documents Preparation

#### Pitch Deck Outline (15 slides)

| Slide | Content |
|-------|---------|
| 1. Cover | Skymirror logo, tagline, contact |
| 2. Problem | Workforce management pain points |
| 3. Solution | CheckMet, Traquiva, Software, Academy |
| 4. Product | Screenshots, key features |
| 5. Market | TAM/SAM/SOM, growth trends |
| 6. Business Model | Revenue streams, pricing |
| 7. Traction | Revenue, customers, growth |
| 8. Competition | Positioning, differentiation |
| 9. Go-to-Market | Sales strategy, channels |
| 10. Team | Founders, key hires, advisors |
| 11. Financials | Revenue projections, unit economics |
| 12. Roadmap | Product and business milestones |
| 13. Fundraise | Amount, use of funds |
| 14. Vision | Long-term vision, exit potential |
| 15. Ask | Clear ask, next steps |

#### Financial Model Requirements

| Section | Content |
|---------|---------|
| Revenue Model | By product (CheckMet, Traquiva, Software, Academy) |
| Customer Assumptions | New customers, churn, expansion |
| Pricing | By tier, by product |
| COGS | Hosting, support, delivery |
| Operating Expenses | By department |
| Headcount | By function, by quarter |
| Cash Flow | Monthly for 24 months |
| Scenarios | Base, upside, downside |

#### Cap Table Template

| Shareholder | Class | Notes |
|-------------|-------|-------|
| Lukman Ibrahim (CEO) | Common A | Founder, majority shareholder |
| Eric (CTO) | Common B | Co-founder |
| Dr. Loveday (COO) | Common B | Co-founder |
| Abdulwahab A (CFO) | Common B | Co-founder |
| Jerone Lebadie (CMO) | Common B | Co-founder |
| Employee Option Pool | Options | Reserved for team |
| Advisor Pool | Options | Reserved for advisors |
| Series A Investors | Preferred | Future round |

**Note:** Specific share counts and equity percentages are confidential and shared with investors under NDA only. Cap table details available in secure data room.

---

### Day 5: Investor Targeting

#### Target Investor Profile

| Criteria | Ideal Investor |
|----------|----------------|
| Stage | Seed / Series A |
| Check Size | €500K - €5M |
| Geography | Europe, with Hungary/CEE interest |
| Sector Focus | B2B SaaS, HR Tech, EdTech, AI |
| Value-Add | Enterprise sales, international expansion |
| Portfolio | Complementary, not competitive |

#### Target Investor List

| Investor | Type | Focus | Check Size | Status |
|----------|------|-------|------------|--------|
| [Investor 1] | VC | HR Tech | €1-5M | ⬜ Research |
| [Investor 2] | VC | B2B SaaS | €2-10M | ⬜ Research |
| [Investor 3] | Angel | EdTech | €100-500K | ⬜ Research |
| [Investor 4] | VC | CEE Focus | €1-3M | ⬜ Research |
| [Investor 5] | Corporate | HR | Strategic | ⬜ Research |

#### Outreach Tracking

| Investor | Contact | Intro Source | Status | Next Step | Notes |
|----------|---------|--------------|--------|-----------|-------|
| [Name] | [Email] | [Referrer] | ⬜ Cold | Research | |
| [Name] | [Email] | [Referrer] | ⬜ Warm Intro | Schedule call | |

---

## Deliverables Checklist

### Week 3 Deliverables
- [ ] HubSpot CRM configured with custom properties
- [ ] Sales pipeline stages defined
- [ ] Lead source tracking implemented
- [ ] Sales dashboard created
- [ ] CAC tracking system operational
- [ ] Weekly sales report template

### Week 4 Deliverables
- [ ] Data room structure created
- [ ] All corporate documents uploaded
- [ ] Financial model completed
- [ ] Pitch deck finalized
- [ ] Cap table documented
- [ ] Target investor list (20+ investors)
- [ ] Outreach templates prepared

---

## Next Steps (Week 5-6)

After completing acquisition tracking and data room:

1. **OKR Framework Deployment**
   - Finalize company OKRs
   - Cascade to business units
   - Set up tracking system

2. **Operational Dashboards**
   - Executive dashboard
   - Product dashboard
   - Customer success dashboard
   - Financial dashboard
   - Team dashboard

---

*Document Version: 1.0*
*Created: December 2024*
*Owner: CEO / CFO*
*Status: Implementation Ready*
