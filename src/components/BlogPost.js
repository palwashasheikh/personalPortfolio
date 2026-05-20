import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BlogBanner } from "./BlogBanner";

export const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single post from backend
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://portfolio-backend-h6no.onrender.com/api/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Container className="my-5">Loading...</Container>;
  }

  if (!post) {
    return <Container className="my-5">Blog post not found</Container>;
  }

  return (
    <>
      <BlogBanner />
      <Container className="my-5 blogs-container">
        <article className="blog-post">
          <header className="mb-4">
            <h1 className="fw-bolder mb-1">{post.title}</h1>
            <div className="text-muted fst-italic mb-2">{post.date}</div>
          </header>

          <figure className="mb-4">
            <Image
              src={
  post.imageUrl
    ? `${post.imageUrl}`
    : "https://via.placeholder.com/900x400"
}
              fluid
              rounded
            />
          </figure>

          <section className="mb-5">
            <div
              className="fs-5 mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </section>
        </article>
      </Container>
    </>
  );
};
