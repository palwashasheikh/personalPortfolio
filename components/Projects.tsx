"use client";

import { useState } from "react";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
  tags: string[];
}

const webProjects: Project[] = [
  { title: "Ecommerce Market Place", description: "Design & Development", imgUrl: "/assets/img/Emarket.png", link: "https://e-market-place.vercel.app/", tags: ["React", "Laravel", "MySQL", "Stripe"] },
  { title: "Clothes Renting", description: "Design & Development & SEO", imgUrl: "/assets/img/Rent.png", link: "https://www.renttherunway.com/", tags: ["React", "Sass", "SEO"] },
  { title: "School Portal", description: "Design & Development", imgUrl: "/assets/img/School.png", link: "https://froebels.edu.pk/", tags: ["React", "Bootstrap", "Node.js"] },
  { title: "Freelance Platform", description: "Design & Development", imgUrl: "/assets/img/Feelance.png", link: "https://dureforce.com/", tags: ["React", "Express", "MongoDB", "Socket.io"] },
  { title: "Companies Profiling", description: "Design & Development", imgUrl: "/assets/img/kcaa.png", link: "https://www.kcaa.pk/", tags: ["React", "PHP", "Laravel", "MySQL"] },
  { title: "Daily News & Articles", description: "Design & Development", imgUrl: "/assets/img/mirror.png", link: "https://mirrorspectator.com/", tags: ["React", "WordPress API", "Redux"] },
];

const appProjects: Project[] = [
  { title: "Real Estate Application", description: "Design & Development", imgUrl: "/assets/img/realestate.png", link: "https://liqa.com.sa/", tags: ["React Native", "Node.js", "MongoDB", "Google Maps"] },
  { title: "Company Website", description: "Design & Development", imgUrl: "/assets/img/company.png", link: "https://reacta-pp.vercel.app/", tags: ["React", "Tailwind CSS", "Animate.css"] },
];

const TABS = ["Web Projects", "Apps & Designs", "SEO & Performance"];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="proj-card">
      <div className="proj-card__img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.imgUrl} alt={project.title} className="proj-card__img" />
        <div className="proj-card__overlay">
          <div className="proj-card__overlay-title">{project.title}</div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-card__view-btn">
            View Live
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="proj-card__body">
        <h4 className="proj-card__title">{project.title}</h4>
        <p className="proj-card__desc">{project.description}</p>
        <div className="proj-card__tags">
          {project.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
        </div>
      </div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="projects__glow" />
      <div className="projects__container">

        <div className="projects__header">
          <span className="section-eyebrow">My Work</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        </div>
        <p className="projects__desc">
          From ERP systems to ecommerce marketplaces — I&apos;ve built robust, scalable
          solutions across diverse industries using modern technology stacks.
        </p>

        {/* Tab switcher */}
        <div className="projects__tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`projects__tab${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        {activeTab === 0 && (
          <div className="projects__grid">
            {webProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        )}

        {activeTab === 1 && (
          <div className="projects__grid">
            {appProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        )}

        {activeTab === 2 && (
          <div className="seo-dashboard">
            <div className="seo-dashboard-header">
              <h3>SEO &amp; Web Speed Metrics</h3>
              <p>Delivering high-ranking, user-friendly solutions by merging technical excellence with SEO best practices.</p>
            </div>
            <div className="seo-grid">
              {/* Lighthouse Score */}
              <div className="seo-card">
                <div className="seo-card-head">
                  <h4>Lighthouse Score</h4>
                  <span className="seo-badge seo-badge--success">Perfect</span>
                </div>
                <div className="seo-chart-container">
                  <svg viewBox="0 0 36 36" className="seo-circular-chart">
                    <defs>
                      <linearGradient id="seoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#6A0DAD" />
                      </linearGradient>
                    </defs>
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray="99, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="18" y="20.35" className="seo-percentage">99</text>
                  </svg>
                </div>
                <div className="seo-stats-row">
                  <div className="seo-stat-item"><span>LCP</span><strong>0.8s</strong></div>
                  <div className="seo-stat-item"><span>FID</span><strong>11ms</strong></div>
                  <div className="seo-stat-item"><span>CLS</span><strong>0.01</strong></div>
                </div>
              </div>

              {/* Organic Growth */}
              <div className="seo-card">
                <div className="seo-card-head">
                  <h4>Organic Growth</h4>
                  <span className="seo-badge seo-badge--success">+180%</span>
                </div>
                <svg viewBox="0 0 100 40" className="sparkline">
                  <defs>
                    <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#6A0DAD" />
                    </linearGradient>
                  </defs>
                  <path d="M0,35 Q15,30 30,15 T60,20 T90,5 T100,2" fill="none" stroke="url(#sparkGrad)" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <p className="seo-desc">Boosted monthly organic search volume by 180% within 6 months using dynamic schema markup, advanced SEO indexing, and core web vitals optimization.</p>
              </div>

              {/* Top Rankings */}
              <div className="seo-card">
                <div className="seo-card-head">
                  <h4>Top Rankings</h4>
                  <span className="seo-badge seo-badge--highlight">Top #3</span>
                </div>
                <div>
                  {[
                    { kw: '"b2b marketplace"', rank: "#1 Rank" },
                    { kw: '"clothing rentals"', rank: "#2 Rank" },
                    { kw: '"pakistan school portal"', rank: "#1 Rank" },
                    { kw: '"erp inventory react"', rank: "#3 Rank" },
                  ].map((r) => (
                    <div key={r.kw} className="keyword-row">
                      <span>{r.kw}</span>
                      <strong>{r.rank}</strong>
                    </div>
                  ))}
                </div>
                <p className="seo-desc">Dominating competitive keywords in highly saturated search niches using localized targeting and metadata structure tuning.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
