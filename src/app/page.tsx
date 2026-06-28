import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import Cases from "@/components/Cases";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
        <Cases />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
