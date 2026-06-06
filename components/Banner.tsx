"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const toRotate = ["Software Engineer", "Full Stack Developer", "SEO Specialist"];
const period = 2200;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);
      if (isDeleting) setDelta(50);
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
        setDelta(150);
      }
    };
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting]);

  const scrollToConnect = () =>
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="banner" id="home">
      <div className="banner__bg">
        <div className="banner__glow-1" />
        <div className="banner__glow-2" />
        <div className="banner__grid" />
      </div>

      <div className="banner__container">
        {/* Text content */}
        <div className="banner__content">
          <div className="banner__tagline">Welcome to my Portfolio</div>

          <h1 className="banner__title">
            Hi! I&apos;m Palwasha,
            <br />a{" "}
            <span className="banner__rotate">
              {text}
              <span className="banner__cursor">|</span>
            </span>
          </h1>

          <p className="banner__desc">
            <strong>Software Engineer</strong> with 8+ years of experience building
            robust and scalable web applications. I specialize in technical
            excellence to deliver high-performance, user-friendly solutions.
          </p>

          <div className="banner__tags">
            {["React", "Node.js", "Laravel", "Next.js", "SEO"].map((tag) => (
              <span key={tag} className="banner__tag">{tag}</span>
            ))}
          </div>

          <button className="btn-primary" onClick={scrollToConnect}>
            <span>Let&apos;s Connect</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="banner__image-wrap">
          <div className="banner__image-ring" />
          <Image
            src="/assets/img/header-img.svg"
            alt="Palwasha – Software Engineer"
            width={400}
            height={400}
            className="banner__image"
            priority
          />
        </div>
      </div>
    </section>
  );
};
