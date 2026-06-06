"use client";

import { useState } from "react";
import Image from "next/image";

const formInitial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitial);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

  const onFormUpdate = (key: keyof typeof formInitial, value: string) =>
    setFormDetails((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      });
      const result = await res.json();
      setFormDetails(formInitial);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully! I'll get back to you soon." });
      } else {
        setStatus({ success: false, message: "Something went wrong. Please try again later." });
      }
    } catch {
      setStatus({ success: false, message: "Network error. Please try again." });
    } finally {
      setButtonText("Send Message");
    }
  };

  return (
    <section className="contact" id="connect">
      <div className="contact__bg-glow" />
      <div className="contact__container">

        {/* Image side */}
        <div className="contact__image-wrap">
          <div className="contact__image-glow" />
          <Image
            src="/assets/img/contact-img.svg"
            alt="Contact Palwasha"
            width={480}
            height={480}
            className="contact__image"
          />
        </div>

        {/* Form side */}
        <div className="contact__form-side">
          <span className="contact__label">Get in touch</span>
          <h2 className="contact__title">Let&apos;s Work <span className="gradient-text">Together</span></h2>
          <p className="contact__subtitle">
            Have a project in mind? I&apos;d love to hear about it. Send me a message
            and let&apos;s create something amazing together.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <input
                type="text"
                className="contact__input"
                placeholder="First Name"
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                required
              />
              <input
                type="text"
                className="contact__input"
                placeholder="Last Name"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                required
              />
            </div>
            <div className="contact__row">
              <input
                type="email"
                className="contact__input"
                placeholder="Email Address"
                value={formDetails.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                required
              />
              <input
                type="tel"
                className="contact__input"
                placeholder="Phone No."
                value={formDetails.phone}
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </div>
            <textarea
              className="contact__textarea"
              placeholder="Tell me about your project..."
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
              required
            />
            <button type="submit" className="contact__submit">
              {buttonText}
            </button>
            {status.message && (
              <p className={`contact__status ${status.success ? "success" : "danger"}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
