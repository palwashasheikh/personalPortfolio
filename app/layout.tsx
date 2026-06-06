import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Palwasha Sheikh | Software Engineer",
  description:
    "Software Engineer with 8+ years of experience building robust and scalable web applications. Specializing in React, Node.js, Laravel and SEO.",
  keywords: "Palwasha Sheikh, Software Engineer, React, Node.js, Laravel, SEO, Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
