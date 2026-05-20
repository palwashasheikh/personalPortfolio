import React from 'react';
import { Container } from 'react-bootstrap';

export const BlogBanner = () => {
  return (
    <div className="blog-hero">
      {/* Ambient glows */}
      <div className="blog-hero__glow blog-hero__glow--left"></div>
      <div className="blog-hero__glow blog-hero__glow--right"></div>

      {/* Floating decorative circles */}
      <div className="blog-hero__orb blog-hero__orb--1"></div>
      <div className="blog-hero__orb blog-hero__orb--2"></div>
      <div className="blog-hero__orb blog-hero__orb--3"></div>

      <Container className="blog-hero__content">
        <span className="blog-hero__eyebrow">✍️ Articles & Insights</span>
        <h1 className="blog-hero__title">
          My <span className="blog-hero__title--gradient">Blog</span>
        </h1>
        <p className="blog-hero__subtitle">
          Thoughts on software development, modern web technologies,
          SEO strategies, and lessons learned from 8+ years in the field.
        </p>
        <div className="blog-hero__meta">
          <span className="blog-hero__tag">React</span>
          <span className="blog-hero__tag">Node.js</span>
          <span className="blog-hero__tag">SEO</span>
          <span className="blog-hero__tag">Laravel</span>
        </div>
      </Container>
    </div>
  );
};
