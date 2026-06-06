"use client";

import { useState } from "react";
import Image from "next/image";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    alert("Thanks for subscribing!");
  };

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="footer__newsletter">
          <h3>Stay in the Loop</h3>
          <p>Subscribe to get notified about new projects and articles.</p>
          <form className="footer__email-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="footer__email-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="footer__email-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <a href="/" className="footer__brand">PALWASHA</a>
        <p className="footer__copy">© {new Date().getFullYear()} Palwasha Sheikh. All rights reserved.</p>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/palwashasoftwareengineer/" target="_blank" rel="noopener noreferrer" className="footer__social">
            <Image src="/assets/img/nav-icon1.svg" alt="LinkedIn" width={18} height={18} />
          </a>
          <a href="https://www.facebook.com/palwasha.jutt" target="_blank" rel="noopener noreferrer" className="footer__social">
            <Image src="/assets/img/nav-icon2.svg" alt="Facebook" width={18} height={18} />
          </a>
          <a href="https://www.instagram.com/palwasha_jutt/" target="_blank" rel="noopener noreferrer" className="footer__social">
            <Image src="/assets/img/nav-icon3.svg" alt="Instagram" width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
