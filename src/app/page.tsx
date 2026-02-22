import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Solutions />
        <Projects />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
