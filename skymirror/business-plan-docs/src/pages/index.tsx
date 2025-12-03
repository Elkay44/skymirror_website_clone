import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero-section">
      <div className="hero-bg"></div>
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div style={{marginBottom: '1.5rem'}}>
          <span className="badge-confidential">
            🔒 Internal Business Documentation
          </span>
        </div>
        <Heading as="h1" className="hero-title">
          {siteConfig.title}
        </Heading>
        <p className="hero-subtitle">{siteConfig.tagline}</p>
        <div className="hero-buttons">
          <Link
            className="btn-primary"
            to="/docs">
            Explore Documentation →
          </Link>
          <Link
            className="btn-outline"
            to="/docs/core/executive-summary">
            Executive Summary
          </Link>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Documents</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-label">Leadership</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">€7.3M</div>
            <div className="stat-label">Y3 Revenue</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProductCard({title, description, link, icon, gradient}: {
  title: string, 
  description: string, 
  link: string, 
  icon: string,
  gradient: string
}) {
  return (
    <div className="col col--3">
      <div className="card" style={{height: '100%', padding: '0', overflow: 'hidden'}}>
        <div style={{
          background: gradient,
          padding: '1.5rem',
          color: 'white'
        }}>
          <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>{icon}</div>
          <h3 style={{margin: 0, fontSize: '1.25rem', fontWeight: 700}}>{title}</h3>
        </div>
        <div style={{padding: '1.5rem'}}>
          <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem', minHeight: '3rem'}}>
            {description}
          </p>
          <a href={link} className="button button--primary button--block">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <span className="section-title">Our Portfolio</span>
          <Heading as="h2" className="section-heading">
            Four Integrated Products
          </Heading>
          <p className="section-desc">
            Building an integrated technology ecosystem for enterprise workforce management and education
          </p>
        </div>
        <div className="row">
          <ProductCard 
            title="Checkmet"
            description="AI-powered attendance management with 99.9% facial recognition accuracy."
            link="https://checkmet.eu"
            icon="🤖"
            gradient="linear-gradient(135deg, #0066cc 0%, #0891b2 100%)"
          />
          <ProductCard 
            title="Traquiva"
            description="AI-powered learning platform with 30% faster skill acquisition."
            link="https://www.traquiva.com"
            icon="📚"
            gradient="linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)"
          />
          <ProductCard 
            title="Software Solutions"
            description="Custom enterprise software development and consulting."
            link="https://www.skymirror.eu/full-stack-development"
            icon="💻"
            gradient="linear-gradient(135deg, #059669 0%, #10b981 100%)"
          />
          <ProductCard 
            title="Skymirror Academy"
            description="Technology education, bootcamps, and corporate training."
            link="https://skymirror.academy"
            icon="🎓"
            gradient="linear-gradient(135deg, #d97706 0%, #f59e0b 100%)"
          />
        </div>
      </div>
    </section>
  );
}

function DocumentCategories() {
  const categories = [
    { title: 'Core Business Plan', count: 10, icon: '📋', link: '/docs/core/executive-summary', desc: 'Executive summary, market analysis, financials' },
    { title: 'Strategic Documents', count: 8, icon: '🎯', link: '/docs/strategic/technology-roadmap', desc: 'Technology roadmap, exit strategy, IP' },
    { title: 'Operational Playbooks', count: 10, icon: '📚', link: '/docs/playbooks/okr-kpi-framework', desc: 'Hiring, acquisition, investor relations' },
    { title: 'Implementation Roadmap', count: 5, icon: '🚀', link: '/docs/implementation/week1-2-legal', desc: 'Week-by-week execution plans' },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <span className="section-title">Documentation</span>
          <Heading as="h2" className="section-heading">
            Comprehensive Business Plan
          </Heading>
          <p className="section-desc">
            Over 40 documents covering every aspect of Skymirror's strategy, operations, and growth plans
          </p>
        </div>
        <div className="row">
          {categories.map((cat, idx) => (
            <div className="col col--3" key={idx}>
              <Link to={cat.link} style={{textDecoration: 'none'}}>
                <div className="card" style={{
                  padding: '2rem',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{cat.icon}</div>
                  <h3 style={{fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--sky-text)'}}>{cat.title}</h3>
                  <p style={{fontSize: '0.8rem', color: 'var(--sky-text-muted)', marginBottom: '1rem'}}>{cat.desc}</p>
                  <span style={{
                    background: 'linear-gradient(135deg, var(--sky-primary) 0%, var(--sky-primary-dark) 100%)',
                    color: '#0a0a0f',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>{cat.count} Documents</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const team = [
    { name: 'Lukman Ibrahim', role: 'CEO', focus: 'Vision & Strategy' },
    { name: 'Eric', role: 'CTO', focus: 'Technology & Innovation' },
    { name: 'Dr. Loveday', role: 'COO', focus: 'Operations & Delivery' },
    { name: 'Abdulwahab A', role: 'CFO', focus: 'Finance & Investor Relations' },
    { name: 'Jerone Lebadie', role: 'CMO', focus: 'Marketing & Brand' },
  ];

  return (
    <section className="leadership-section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <span className="section-title">Leadership</span>
          <Heading as="h2" className="section-heading">
            Executive Team
          </Heading>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem'}}>
          {team.map((member, idx) => (
            <div key={idx} style={{
              background: 'var(--sky-bg-card)',
              borderRadius: '1rem',
              padding: '1.5rem 2rem',
              textAlign: 'center',
              minWidth: '180px',
              border: '1px solid var(--sky-border)',
              transition: 'all 0.3s ease'
            }} className="card">
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--sky-primary) 0%, var(--sky-primary-light) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#0a0a0f',
                fontWeight: 700,
                fontSize: '1.25rem'
              }}>
                {member.name.charAt(0)}
              </div>
              <h4 style={{margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--sky-text)'}}>{member.name}</h4>
              <div style={{color: 'var(--sky-primary)', fontWeight: 600, fontSize: '0.875rem'}}>{member.role}</div>
              <div style={{color: 'var(--sky-text-muted)', fontSize: '0.75rem', marginTop: '0.25rem'}}>{member.focus}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section" style={{textAlign: 'center'}}>
      <div className="container">
        <Heading as="h2" className="section-heading">
          Ready to Explore?
        </Heading>
        <p className="section-desc" style={{marginBottom: '2rem'}}>
          Dive into our comprehensive business plan documentation and discover Skymirror's vision for the future.
        </p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
          <Link
            className="btn-primary"
            to="/docs">
            Start Reading →
          </Link>
          <a
            className="btn-outline"
            href="https://www.skymirror.eu"
            target="_blank"
            rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Business Plan"
      description="Skymirror Business Plan - Software, AI, and Education for a Connected, Sustainable World">
      <HomepageHeader />
      <main>
        <Products />
        <DocumentCategories />
        <Leadership />
        <CTASection />
      </main>
    </Layout>
  );
}
