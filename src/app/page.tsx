import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import CaseStudies from "@/components/CaseStudies";
import Partners from "@/components/Partners";
import DigitalTransformation from "@/components/DigitalTransformation";
import Outro from "@/components/Outro";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Values />
        <Problem />
        <Solutions />
        <CaseStudies />
        <Partners />
        <DigitalTransformation />
        <Outro />
      </main>
      <ScrollReveal />
    </>
  );
}
