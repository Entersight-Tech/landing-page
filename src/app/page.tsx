import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import Partners from "@/components/Partners";
import Transformation from "@/components/Transformation";
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
        <Partners />
        <Transformation />
        <Outro />
      </main>
      <ScrollReveal />
    </>
  );
}
