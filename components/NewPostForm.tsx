"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const CATEGORIES = ["React", "Node.js", "SEO", "Laravel", "Design", "Other"];

export const NewPostForm = () => {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    category: "React",
    imageUrl: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post("https://profileapi-kx1a.onrender.com/api/posts", form);
      setStatus({ success: true, message: "Post published successfully!" });
      setForm({ title: "", summary: "", content: "", category: "React", imageUrl: "", date: new Date().toISOString().split("T")[0] });
    } catch {
      setStatus({ success: false, message: "Failed to publish post. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-page">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8, flexWrap: "wrap", gap: 12 }}>
        <h1>New Blog Post</h1>
        <Link href="/blogs" className="navbar__cta" style={{ display: "inline-flex" }}>
          <span>View All Posts</span>
        </Link>
      </div>
      <p>Create and publish a new blog post to your portfolio.</p>

      <form className="admin-form" onSubmit={handleSubmit}>
        <div>
          <label className="admin-form__label">Post Title *</label>
          <input
            type="text"
            className="admin-form__input"
            placeholder="Enter post title..."
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            required
          />
        </div>

        <div>
          <label className="admin-form__label">Summary *</label>
          <input
            type="text"
            className="admin-form__input"
            placeholder="Brief summary (shown in blog listing)..."
            value={form.summary}
            onChange={(e) => update("summary", e.target.value)}
            required
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label className="admin-form__label">Category *</label>
            <select
              className="admin-form__select"
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
            >
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="admin-form__label">Date *</label>
            <input
              type="date"
              className="admin-form__input"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="admin-form__label">Image URL (optional)</label>
          <input
            type="url"
            className="admin-form__input"
            placeholder="https://example.com/image.jpg"
            value={form.imageUrl}
            onChange={(e) => update("imageUrl", e.target.value)}
          />
        </div>

        <div>
          <label className="admin-form__label">Content (HTML) *</label>
          <textarea
            className="admin-form__textarea"
            placeholder="Write your blog post content here... (HTML is supported)"
            value={form.content}
            onChange={(e) => update("content", e.target.value)}
            required
          />
        </div>

        {status.message && (
          <p className={status.success ? "success" : "danger"} style={{ fontSize: 15, fontWeight: 600 }}>
            {status.message}
          </p>
        )}

        <button type="submit" className="admin-form__submit" disabled={submitting}>
          {submitting ? "Publishing…" : "✨ Publish Post"}
        </button>
      </form>
    </div>
  );
};
