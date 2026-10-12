import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Problem from "@/components/Problem";
import Results from "@/components/Results";
import Distill from "@/components/Distill";
import Solutions from "@/components/Solutions";
import CaseStudies from "@/components/CaseStudies";
import Work from "@/components/Work";
import Cases from "@/components/Cases";
import Partners from "@/components/Partners";
import Transformation from "@/components/Transformation";
import Outro from "@/components/Outro";
import ScrollReveal from "@/components/ScrollReveal";
import Scramble from "@/components/Scramble";
import Motion from "@/components/Motion";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* the hero stays pinned while these panels slide over it */}
        <div className="curtain">
          <Hero />
          <Partners />
        </div>
        <Problem />
        <Distill />
        <Solutions />
        <Transformation />
        <CaseStudies />
        <Work />
        <Results />
        <Cases />
        <Values />
        <Outro />
      </main>
      <ScrollReveal />
      <Scramble />
      <Motion />
    </>
  );
}
