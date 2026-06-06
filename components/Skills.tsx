"use client";

import { useState, useEffect, useRef, Fragment } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  description: string;
}

const CATEGORIES = ["All", "Frontend", "Backend", "Marketing"];

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export const Skills = ({ skills }: { skills: Skill[] }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerIO = useIntersection(0.1);
  const gridIO = useIntersection(0.05);
  const statsIO = useIntersection(0.1);

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="skills" id="skills">
      <div className="skills__glow-left" />
      <div className="skills__glow-right" />
      <div className="skills__container">

        {/* Header */}
        <div
          ref={headerIO.ref}
          className={`skills__header${headerIO.visible ? " visible" : ""}`}
        >
          <span className="section-eyebrow">What I bring to the table</span>
          <h2 className="section-title">
            Skills &amp;{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            8+ years crafting robust web solutions — from pixel-perfect frontends
            to scalable backends and data-driven SEO strategies.
          </p>
          <div className="skills__filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`skills__filter-btn${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div ref={gridIO.ref} className="skills__grid">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-card${gridIO.visible ? " visible" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card__top">
                <div className="skill-card__icon">{skill.icon}</div>
                <div className="skill-card__meta">
                  <h5 className="skill-card__name">{skill.name}</h5>
                  <span className="skill-card__category">{skill.category}</span>
                </div>
                <span className="skill-card__percent">{skill.level}%</span>
              </div>
              <p className="skill-card__desc">{skill.description}</p>
              <div className="skill-bar">
                <div
                  className="skill-bar__fill"
                  style={{
                    width: gridIO.visible ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 0.08 + 0.3}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsIO.ref}
          className={`skills__stats${statsIO.visible ? " visible" : ""}`}
        >
          {[
            { number: "8+", label: "Years Experience" },
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "8", label: "Technologies" },
          ].map((s, i, arr) => (
            <Fragment key={s.label}>
              <div className="stat">
                <span className="stat__number">{s.number}</span>
                <span className="stat__label">{s.label}</span>
              </div>
              {i < arr.length - 1 && <div className="stat__divider" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
