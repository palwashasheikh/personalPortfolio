import { Banner } from "@/components/Banner";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { skillsData } from "@/data/skills";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <Skills skills={skillsData} />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
