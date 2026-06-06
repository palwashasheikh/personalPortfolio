import { BlogPost } from "@/components/BlogPost";
import { SimpleFooter } from "@/components/SimpleFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post | Palwasha Sheikh",
  description: "Read this article on Palwasha Sheikh's developer blog.",
};

export default function BlogPostPage() {
  return (
    <main>
      <BlogPost />
      <SimpleFooter />
    </main>
  );
}
