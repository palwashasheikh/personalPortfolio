// src/components/NewPostForm.js

import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(false);
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData, // multipart/form-data automatically set
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`Success! Post added with ID: ${result._id}`);
        setIsSuccess(true);

        // Reset fields
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        setMessage("Error: " + result.message);
        setIsSuccess(false);
      }
    } catch (err) {
      setMessage("Network Error: Could not connect to server.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="Blog-form my-5" style={{ maxWidth: "800px" }}>
      <h2 className="mb-4">📝 Create New Blog Post</h2>

      {/* Alerts */}
      {message && (
        <Alert variant={isSuccess ? "success" : "danger"}>{message}</Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* Title */}
        <Form.Group className="mb-3">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blog post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isLoading}
          />
        </Form.Group>

        {/* Rich Text Editor */}
        <Form.Group className="mb-4">
          <Form.Label>Post Content</Form.Label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="bg-white"
            style={{ height: "200px" }}
          />
        </Form.Group>

        {/* Image Upload */}
        <Form.Group className="mb-4">
          <Form.Label>Featured Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
        </Form.Group>

        {/* Image Preview */}
        {image && (
          <div className="mb-3">
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              style={{ width: "100%", borderRadius: 8 }}
            />
          </div>
        )}

        {/* Submit Button */}
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Publishing..." : "Publish Blog Post"}
        </Button>
      </Form>
    </Container>
  );
};
