"use client";

import Link from "next/link";

export const BlogBanner = () => (
  <div className="blog-banner">
    <div className="blog-banner__glow" />
    <div className="blog-banner__container">
      <span className="section-eyebrow">Thoughts & Insights</span>
      <h1 className="blog-banner__title">
        My <span className="gradient-text">Blog</span>
      </h1>
      <p className="blog-banner__subtitle">
        Exploring the latest in web development, SEO strategies, and software
        engineering best practices.
      </p>
      <div style={{ marginTop: 28 }}>
        <Link href="/" className="navbar__cta" style={{ display: "inline-flex" }}>
          <span>← Back to Portfolio</span>
        </Link>
      </div>
    </div>
  </div>
);
