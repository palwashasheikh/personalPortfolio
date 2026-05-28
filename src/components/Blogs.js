import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BlogBanner } from './BlogBanner';
import '../Blog.css';

const CATEGORIES = ["All", "React", "Node.js", "SEO", "Laravel", "Design"];

const SkeletonCard = () => (
  <Col md={4} sm={6} className="mb-4">
    <div className="blog-skeleton">
      <div className="blog-skeleton__img"></div>
      <div className="blog-skeleton__body">
        <div className="blog-skeleton__line blog-skeleton__line--short"></div>
        <div className="blog-skeleton__line"></div>
        <div className="blog-skeleton__line blog-skeleton__line--medium"></div>
        <div className="blog-skeleton__line blog-skeleton__line--short"></div>
      </div>
    </div>
  </Col>
);

export const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://profileapi-kx1a.onrender.com/api/posts");
        setBlogPosts(response.data);
      } catch (err) {
        setError("Unable to load blog posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filtered = blogPosts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.summary?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Format date nicely
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <>
      <BlogBanner />

      <div className="blogs-page">
        <Container>

          {/* Search + Filter Bar */}
          <div className="blogs-toolbar">
            <div className="blogs-search">
              <span className="blogs-search__icon">🔍</span>
              <input
                type="text"
                className="blogs-search__input"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="blogs-filter">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`blogs-filter__btn ${activeCategory === cat ? "blogs-filter__btn--active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Loading skeletons */}
          {loading && (
            <Row>
              {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
            </Row>
          )}

          {/* Error state */}
          {!loading && error && (
            <div className="blogs-empty">
              <span className="blogs-empty__icon">⚠️</span>
              <h3>{error}</h3>
              <p>Please check back later or try refreshing the page.</p>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && filtered.length === 0 && (
            <div className="blogs-empty">
              <span className="blogs-empty__icon">📭</span>
              <h3>No posts found</h3>
              <p>Try a different search term or category.</p>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && !error && filtered.length > 0 && (
            <Row>
              {filtered.map((post, index) => (
                <Col key={post._id || post.id} md={4} sm={6} className="mb-4">
                  <div
                    className="blog-post-card"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    {/* Top accent bar */}
                    <div className="blog-post-card__accent"></div>

                    <div className="blog-post-card__body">
                      {/* Category + reading time */}
                      <div className="blog-post-card__meta-top">
                        <span className="blog-post-card__category">
                          {post.category || "Article"}
                        </span>
                        <span className="blog-post-card__read-time">
                          {Math.ceil((post.summary?.length || 300) / 200)} min read
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="blog-post-card__title">{post.title}</h3>

                      {/* Summary */}
                      <p className="blog-post-card__summary">
                        {post.summary?.length > 120
                          ? `${post.summary.substring(0, 120)}…`
                          : post.summary}
                      </p>

                      {/* Footer */}
                      <div className="blog-post-card__footer">
                        <span className="blog-post-card__date">
                          📅 {formatDate(post.date) || post.date}
                        </span>
                        <Link
                          to={`/blogpost/${post._id}`}
                          className="blog-post-card__link"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}

          {/* Posts count */}
          {!loading && !error && filtered.length > 0 && (
            <p className="blogs-count">
              Showing <strong>{filtered.length}</strong> article{filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </Container>
      </div>
    </>
  );
};

