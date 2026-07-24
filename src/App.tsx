import { useEffect } from "react";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SecurityResearch from "./components/SecurityResearch";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    let raf = 0;
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScrollTo = (targetY: number, duration = 650) => {
      cancelAnimationFrame(raf);
      const startY = window.scrollY;
      const dist = targetY - startY;
      if (Math.abs(dist) < 1) return;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        window.scrollTo(0, startY + dist * easeInOutCubic(p));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      const hash = a?.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      e.preventDefault();
      const scrollMt = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
      const targetY = window.scrollY + el.getBoundingClientRect().top - scrollMt;
      animateScrollTo(Math.max(0, targetY));
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <SecurityResearch />
        <Certifications />
        <Awards />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
