import React, { useState } from 'react';
import colorSharp from "../assets/img/color-sharp.png";
import 'react-multi-carousel/lib/styles.css';
import '../Skills.css';
import TrackVisibility from 'react-on-screen';

const CATEGORIES = ["All", "Frontend", "Backend", "Marketing"];

export const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section className="skill-section" id="skills">
      <div className="skill-bg-glow skill-bg-glow--left"></div>
      <div className="skill-bg-glow skill-bg-glow--right"></div>
      <div className="container">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={`skill-header ${isVisible ? "skill-header--visible" : ""}`}>
              <span className="skill-eyebrow">What I bring to the table</span>
              <h2 className="skill-title">Skills & <span className="skill-title--gradient">Expertise</span></h2>
              <p className="skill-subtitle">
                8+ years crafting robust web solutions — from pixel-perfect frontends
                to scalable backends and data-driven SEO strategies.
              </p>

              {/* Category Filter */}
              <div className="skill-filter">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    className={`skill-filter__btn ${activeCategory === cat ? "skill-filter__btn--active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) => (
            <div className="skills-grid">
              {filtered.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`skill-card ${isVisible ? "skill-card--visible" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 0.1 + 0.3}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TrackVisibility>

        {/* Stats Row */}
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={`skill-stats ${isVisible ? "skill-stats--visible" : ""}`}>
              <div className="skill-stat">
                <span className="skill-stat__number">8+</span>
                <span className="skill-stat__label">Years Experience</span>
              </div>
              <div className="skill-stat__divider"></div>
              <div className="skill-stat">
                <span className="skill-stat__number">50+</span>
                <span className="skill-stat__label">Projects Delivered</span>
              </div>
              <div className="skill-stat__divider"></div>
              <div className="skill-stat">
                <span className="skill-stat__number">30+</span>
                <span className="skill-stat__label">Happy Clients</span>
              </div>
              <div className="skill-stat__divider"></div>
              <div className="skill-stat">
                <span className="skill-stat__number">8</span>
                <span className="skill-stat__label">Technologies</span>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
