import { Blogs } from "@/components/Blogs";
import { SimpleFooter } from "@/components/SimpleFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Palwasha Sheikh – Software Engineer",
  description: "Articles on React, Node.js, Laravel, SEO, and software engineering from Palwasha Sheikh.",
};

export default function BlogsPage() {
  return (
    <main>
      <Blogs />
      <SimpleFooter />
    </main>
  );
}
