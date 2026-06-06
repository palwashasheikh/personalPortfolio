"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { key: "home", label: "Home", href: "/#home" },
    { key: "skills", label: "Skills", href: "/#skills" },
    { key: "projects", label: "Projects", href: "/#projects" },
    { key: "blogs", label: "Blogs", href: "/blogs" },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, key: string, href: string) => {
    setActiveLink(key);
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link href="/" className="navbar__brand">PALWASHA</Link>

        {/* Desktop Menu */}
        <div className={`navbar__menu${menuOpen ? " open" : ""}`}>
          {navLinks.map((nl) => (
            <a
              key={nl.key}
              href={nl.href}
              className={`navbar__link${activeLink === nl.key ? " active" : ""}`}
              onClick={(e) => scrollTo(e, nl.key, nl.href)}
            >
              {nl.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <div className="navbar__socials">
            <a href="https://www.linkedin.com/in/palwashasoftwareengineer/" target="_blank" rel="noopener noreferrer" className="navbar__social-btn">
              <Image src="/assets/img/nav-icon1.svg" alt="LinkedIn" width={18} height={18} />
            </a>
            <a href="https://github.com/palwashasheikh" target="_blank" rel="noopener noreferrer" className="navbar__social-btn">
              <Image src="/assets/img/iconsgithub.svg" alt="GitHub" width={18} height={18} />
            </a>
            <a href="https://www.instagram.com/palwasha_jutt/" target="_blank" rel="noopener noreferrer" className="navbar__social-btn">
              <Image src="/assets/img/nav-icon3.svg" alt="Instagram" width={18} height={18} />
            </a>
          </div>
          <a href="/#connect" className="navbar__cta" onClick={(e) => { e.preventDefault(); document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" }); }}>
            <span>Let&apos;s Connect</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};
