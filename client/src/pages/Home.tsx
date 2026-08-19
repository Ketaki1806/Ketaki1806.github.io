/* ============================================================
   HOME PAGE — Ketaki Hadnurkar Portfolio
   Midnight Precision Theme — All sections assembled
   ============================================================ */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0a0e1a", color: "#f0f4f8" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}
