import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import CaseStudies from "@/components/CaseStudies";
import Work from "@/components/Work";
import Cases from "@/components/Cases";
import Transformation from "@/components/Transformation";
import Outro from "@/components/Outro";
import ScrollReveal from "@/components/ScrollReveal";

// problem → what we do → proof (cases, creative work, clients) → how we
// work together → contact
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <CaseStudies />
        <Work />
        <Cases />
        <Transformation />
        <Outro />
      </main>
      <ScrollReveal />
    </>
  );
}
