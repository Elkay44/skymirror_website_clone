#!/bin/bash

SOURCE="/Users/lukman.ibrahim/skymirror/skymirror_website_clone/business-plan"
DEST="/Users/lukman.ibrahim/skymirror/business-plan-docs/docs"

# Function to add frontmatter and copy
add_frontmatter() {
    local src=$1
    local dest=$2
    local position=$3
    local title=$4
    
    echo "---" > "$dest"
    echo "sidebar_position: $position" >> "$dest"
    echo "title: \"$title\"" >> "$dest"
    echo "---" >> "$dest"
    echo "" >> "$dest"
    cat "$src" >> "$dest"
}

# Core Business Plan
add_frontmatter "$SOURCE/1-executive-summary.md" "$DEST/core/executive-summary.md" 1 "Executive Summary"
add_frontmatter "$SOURCE/2-company-description.md" "$DEST/core/company-description.md" 2 "Company Description"
add_frontmatter "$SOURCE/3-market-analysis.md" "$DEST/core/market-analysis.md" 3 "Market Analysis"
add_frontmatter "$SOURCE/4-products-and-services.md" "$DEST/core/products-and-services.md" 4 "Products & Services"
add_frontmatter "$SOURCE/5-marketing-and-sales-strategy.md" "$DEST/core/marketing-and-sales-strategy.md" 5 "Marketing & Sales Strategy"
add_frontmatter "$SOURCE/6-operations-plan.md" "$DEST/core/operations-plan.md" 6 "Operations Plan"
add_frontmatter "$SOURCE/7-organization-and-management.md" "$DEST/core/organization-and-management.md" 7 "Organization & Management"
add_frontmatter "$SOURCE/8-financial-plan.md" "$DEST/core/financial-plan.md" 8 "Financial Plan"
add_frontmatter "$SOURCE/9-risk-analysis.md" "$DEST/core/risk-analysis.md" 9 "Risk Analysis"
add_frontmatter "$SOURCE/10-implementation-plan.md" "$DEST/core/implementation-plan.md" 10 "Implementation Plan"

# Strategic Documents
add_frontmatter "$SOURCE/12-technology-roadmap.md" "$DEST/strategic/technology-roadmap.md" 1 "Technology Roadmap"
add_frontmatter "$SOURCE/13-sustainability-and-esg.md" "$DEST/strategic/sustainability-and-esg.md" 2 "Sustainability & ESG"
add_frontmatter "$SOURCE/14-competitive-analysis.md" "$DEST/strategic/competitive-analysis.md" 3 "Competitive Analysis"
add_frontmatter "$SOURCE/15-scenario-analysis.md" "$DEST/strategic/scenario-analysis.md" 4 "Scenario Analysis"
add_frontmatter "$SOURCE/16-exit-strategy.md" "$DEST/strategic/exit-strategy.md" 5 "Exit Strategy"
add_frontmatter "$SOURCE/17-international-expansion-strategy.md" "$DEST/strategic/international-expansion.md" 6 "International Expansion"
add_frontmatter "$SOURCE/18-intellectual-property-strategy.md" "$DEST/strategic/intellectual-property.md" 7 "Intellectual Property"
add_frontmatter "$SOURCE/19-data-security-and-privacy-framework.md" "$DEST/strategic/data-security-privacy.md" 8 "Data Security & Privacy"

# Operational Playbooks
add_frontmatter "$SOURCE/20-gap-analysis-and-action-plan.md" "$DEST/playbooks/gap-analysis.md" 1 "Gap Analysis & Action Plan"
add_frontmatter "$SOURCE/21-okr-kpi-framework.md" "$DEST/playbooks/okr-kpi-framework.md" 2 "OKR & KPI Framework"
add_frontmatter "$SOURCE/22-strategic-hiring-playbook.md" "$DEST/playbooks/strategic-hiring.md" 3 "Strategic Hiring Playbook"
add_frontmatter "$SOURCE/23-customer-acquisition-playbook.md" "$DEST/playbooks/customer-acquisition.md" 4 "Customer Acquisition Playbook"
add_frontmatter "$SOURCE/24-investor-relations-guide.md" "$DEST/playbooks/investor-relations.md" 5 "Investor Relations Guide"
add_frontmatter "$SOURCE/25-user-feedback-framework.md" "$DEST/playbooks/user-feedback.md" 6 "User Feedback Framework"
add_frontmatter "$SOURCE/26-founder-legal-framework.md" "$DEST/playbooks/founder-legal-framework.md" 7 "Founder & Legal Framework"
add_frontmatter "$SOURCE/27-customer-discovery-playbook.md" "$DEST/playbooks/customer-discovery.md" 8 "Customer Discovery Playbook"
add_frontmatter "$SOURCE/28-operations-systems-playbook.md" "$DEST/playbooks/operations-systems.md" 9 "Operations & Systems Playbook"
add_frontmatter "$SOURCE/29-revenue-scaling-framework.md" "$DEST/playbooks/revenue-scaling.md" 10 "Revenue & Scaling Framework"
add_frontmatter "$SOURCE/30-community-international-guide.md" "$DEST/playbooks/community-international.md" 11 "Community & International Guide"

# Implementation Roadmap
add_frontmatter "$SOURCE/31-implementation-week1-2-legal.md" "$DEST/implementation/week1-2-legal.md" 1 "Week 1-2: Legal & Founder Agreements"
add_frontmatter "$SOURCE/32-implementation-week3-4-acquisition.md" "$DEST/implementation/week3-4-acquisition.md" 2 "Week 3-4: Customer Acquisition"
add_frontmatter "$SOURCE/33-implementation-week5-6-okr.md" "$DEST/implementation/week5-6-okr.md" 3 "Week 5-6: OKR & Dashboards"
add_frontmatter "$SOURCE/34-implementation-week7-8-discovery.md" "$DEST/implementation/week7-8-discovery.md" 4 "Week 7-8: Customer Discovery"

# Supporting Documents
add_frontmatter "$SOURCE/company-one-pager.md" "$DEST/supporting/company-one-pager.md" 1 "Company One-Pager"
add_frontmatter "$SOURCE/company-pitch.md" "$DEST/supporting/company-pitch.md" 2 "Company Pitch"
add_frontmatter "$SOURCE/financial-projections.md" "$DEST/supporting/financial-projections.md" 3 "Financial Projections"
add_frontmatter "$SOURCE/35-documentation-alignment-report.md" "$DEST/supporting/alignment-report.md" 4 "Documentation Alignment Report"

echo "Done! All documents copied."
