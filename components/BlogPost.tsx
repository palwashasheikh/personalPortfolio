"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { BlogBanner } from "./BlogBanner";

interface Post {
  title: string;
  date?: string;
  imageUrl?: string;
  content: string;
  category?: string;
}

export const BlogPost = () => {
  const params = useParams();
  const id = params?.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://profileapi-kx1a.onrender.com/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        <BlogBanner />
        <div className="loading-container">
          <div className="loading-spinner" />
          <span>Loading post…</span>
        </div>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <BlogBanner />
        <div className="blogs-empty" style={{ padding: "80px 32px" }}>
          <span className="blogs-empty__icon">😕</span>
          <h3>Post not found</h3>
          <p>This blog post doesn&apos;t exist or may have been removed.</p>
          <Link href="/blogs" className="navbar__cta" style={{ display: "inline-flex", marginTop: 24 }}>
            <span>← Back to Blogs</span>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <BlogBanner />
      <div className="blog-post-detail">
        {post.category && (
          <span className="blog-card__category" style={{ marginBottom: 16, display: "inline-block" }}>
            {post.category}
          </span>
        )}
        <h1>{post.title}</h1>
        {post.date && (
          <div className="blog-post-detail__meta">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}

        {post.imageUrl && (
          <figure>
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={780}
              height={420}
              style={{ width: "100%", height: "auto", borderRadius: "var(--r-lg)" }}
              unoptimized
            />
          </figure>
        )}

        <div
          className="blog-post-detail__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--glass-border)" }}>
          <Link href="/blogs" className="btn-primary" style={{ display: "inline-flex" }}>
            <span>← Back to Blogs</span>
          </Link>
        </div>
      </div>
    </>
  );
};
