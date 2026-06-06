"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { BlogBanner } from "./BlogBanner";

const CATEGORIES = ["All", "React", "Node.js", "SEO", "Laravel", "Design"];

interface BlogPost {
  _id?: string;
  id?: string;
  title: string;
  summary?: string;
  category?: string;
  date?: string;
}

const SkeletonCard = () => (
  <div className="blog-skeleton">
    <div className="blog-skeleton__img" />
    <div className="blog-skeleton__body">
      <div className="blog-skeleton__line blog-skeleton__line--short" />
      <div className="blog-skeleton__line" />
      <div className="blog-skeleton__line blog-skeleton__line--medium" />
      <div className="blog-skeleton__line blog-skeleton__line--short" />
    </div>
  </div>
);

const formatDate = (dateStr?: string) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

export const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://profileapi-kx1a.onrender.com/api/posts")
      .then((res) => setBlogPosts(res.data))
      .catch(() => setError("Unable to load blog posts."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = blogPosts.filter((post) => {
    const matchSearch =
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.summary?.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <>
      <BlogBanner />
      <div className="blogs-page">
        <div className="blogs-container">
          {/* Toolbar */}
          <div className="blogs-toolbar">
            <div className="blogs-search">
              <span className="blogs-search__icon">🔍</span>
              <input
                type="text"
                className="blogs-search__input"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="blogs-filter">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`blogs-filter__btn${activeCategory === cat ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="blogs-grid">
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="blogs-empty">
              <span className="blogs-empty__icon">⚠️</span>
              <h3>{error}</h3>
              <p>Please check back later or try refreshing the page.</p>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filtered.length === 0 && (
            <div className="blogs-empty">
              <span className="blogs-empty__icon">📭</span>
              <h3>No posts found</h3>
              <p>Try a different search term or category.</p>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && filtered.length > 0 && (
            <div className="blogs-grid">
              {filtered.map((post, index) => (
                <div
                  key={post._id || post.id}
                  className="blog-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="blog-card__accent" />
                  <div className="blog-card__body">
                    <div className="blog-card__meta-top">
                      <span className="blog-card__category">
                        {post.category || "Article"}
                      </span>
                      <span className="blog-card__read-time">
                        {Math.ceil(((post.summary?.length) || 300) / 200)} min read
                      </span>
                    </div>
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__summary">
                      {(post.summary?.length || 0) > 120
                        ? `${post.summary!.substring(0, 120)}…`
                        : post.summary}
                    </p>
                    <div className="blog-card__footer">
                      <span className="blog-card__date">
                        📅 {formatDate(post.date) || post.date}
                      </span>
                      <Link
                        href={`/blogpost/${post._id}`}
                        className="blog-card__link"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <p className="blogs-count">
              Showing <strong>{filtered.length}</strong> article{filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
