import { NewPostForm } from "@/components/NewPostForm";
import { SimpleFooter } from "@/components/SimpleFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin – New Post | Palwasha Sheikh",
  description: "Admin panel to create new blog posts.",
};

export default function AdminNewPage() {
  return (
    <main>
      <NewPostForm />
      <SimpleFooter />
    </main>
  );
}
