/* ============================================================
   CONTACT SECTION / Midnight Precision Theme
   Centered CTA with animated gradient border
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin, Linkedin, Globe } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ketakihadnurkar.adm@gmail.com",
    href: "mailto:ketakihadnurkar.adm@gmail.com",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "ketaki1806.github.io",
    href: "https://ketaki1806.github.io/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Saarbrücken, Germany",
    href: null,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.05)" }} />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,170,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal" style={{ transitionDelay: "0ms" }}>
            <p className="text-xs font-semibold mb-3 tracking-widest" style={{ color: "#00d4aa", fontFamily: "var(--font-mono)" }}>
              // CONTACT
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}
            >
              Let's Build Something
              <br />
              <span className="gradient-text">Remarkable Together</span>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#8892a4" }}>
              I'm currently open to full-time roles, internships, and research collaborations.
              Whether you have a project in mind or just want to connect / my inbox is always open.
            </p>
          </div>

          {/* CTA button */}
          <div className="reveal mb-12" style={{ transitionDelay: "100ms" }}>
            <a
              href="mailto:ketakihadnurkar.adm@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300"
              style={{
                background: "#00d4aa",
                color: "#0a0e1a",
                fontFamily: "var(--font-display)",
                boxShadow: "0 0 30px rgba(0,212,170,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(0,212,170,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,212,170,0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <Mail size={18} />
              Say Hello
            </a>
          </div>

          {/* Contact info cards */}
          <div className="reveal grid sm:grid-cols-3 gap-4" style={{ transitionDelay: "200ms" }}>
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const inner = (
                <div
                  className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 text-center"
                  style={{ cursor: link.href ? "pointer" : "default" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)" }}
                  >
                    <Icon size={16} style={{ color: "#00d4aa" }} />
                  </div>
                  <div className="text-xs font-semibold" style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}>
                    {link.label}
                  </div>
                  <div className="text-xs font-medium break-all" style={{ color: "#f0f4f8", fontFamily: "var(--font-body)" }}>
                    {link.value}
                  </div>
                </div>
              );
              return link.href ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={link.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
