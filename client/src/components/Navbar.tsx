/* ============================================================
   NAVBAR / Midnight Precision Theme
   Sticky, transitions from transparent → frosted glass on scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = ["hero", "about", "experience", "projects", "skills", "publications", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10, 14, 26, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-110"
            style={{
              background: "rgba(0,212,170,0.12)",
              border: "1.5px solid rgba(0,212,170,0.4)",
              color: "#00d4aa",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.05em",
            }}
          >
            KH
          </div>
          <div
            className="hidden sm:block"
            style={{
              width: "1px",
              height: "20px",
              background: "rgba(0,212,170,0.25)",
            }}
          />
          <span
            className="hidden sm:block font-semibold text-sm tracking-wide"
            style={{ fontFamily: "var(--font-display)", color: "#f0f4f8" }}
          >
            Ketaki Hadnurkar
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "var(--font-display)",
                  color: isActive ? "#00d4aa" : "#8892a4",
                  background: isActive ? "rgba(0,212,170,0.08)" : "transparent",
                  letterSpacing: "0.03em",
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="mailto:ketakihadnurkar.adm@gmail.com"
            className="btn-teal ml-3 text-sm"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md transition-colors"
          style={{ color: "#8892a4" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(10, 14, 26, 0.97)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-3 rounded-md text-sm font-medium transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#8892a4",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:ketakihadnurkar.adm@gmail.com"
              className="btn-teal mt-2 text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
