/* ============================================================
   ABOUT SECTION — Midnight Precision Theme
   Two-column asymmetric layout with stats and visual
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import React from "react";

const highlights = [
  { icon: "🎓", label: "MSc Computer Science", sub: "Universität des Saarlandes" },
  { icon: "💼", label: "Full-Stack Engineer", sub: "React · .NET · Angular · Spring Boot" },
  { icon: "🤖", label: "ML Researcher", sub: "PyTorch · TensorFlow · CNNs" },
  { icon: "🌍", label: "Multilingual", sub: "English (C1) · German (A2)" },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ background: "#0d1120" }}
    >
      {/* Subtle top border */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.05)" }} />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <div className="reveal" style={{ transitionDelay: "0ms" }}>
              <p
                className="text-xs font-semibold mb-3 tracking-widest"
                style={{ color: "#00d4aa", fontFamily: "var(--font-mono)" }}
              >
                // ABOUT ME
              </p>
              <h2
                className="section-heading text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "#f0f4f8" }}
              >
                Engineer by craft,<br />researcher by curiosity.
              </h2>
              <p className="text-xs mb-6" style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}>
                coord(48.9°N, 7.0°E) / status:active / role:engineer+researcher
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: "100ms" }}>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#8892a4" }}>
                I'm a software engineer currently pursuing my Master's in Computer Science at
                Saarland University, Germany. With over 3 years of industry experience, I've built
                production systems for top-tier banks in Singapore, Malaysia, and Spain / from
                FX trading platforms to bonds terminals.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#8892a4" }}>
                My work spans the full stack: architecting scalable backends with .NET microservices,
                crafting precise React/Angular frontends, and applying ML (PyTorch, TensorFlow) to
                real-world problems. I care deeply about code quality, system design, and the
                intersection of engineering and user experience.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="reveal grid grid-cols-2 gap-3" style={{ transitionDelay: "200ms" }}>
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="glass-card rounded-xl p-4"
                >
                  <div className="text-xl mb-2">{h.icon}</div>
                  <div
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}
                  >
                    {h.label}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                  >
                    {h.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(0,212,170,0.15)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,212,170,0.06)",
              }}
            >
              <img
                src="/manus-storage/about-visual_4344e69c.png"
                alt="Abstract data visualization"
                className="w-full h-80 object-cover"
              />
              {/* Overlay stats */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{ background: "linear-gradient(to top, rgba(10,14,26,0.95) 0%, transparent 60%)" }}
              >
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { n: "3+", l: "Years" },
                    { n: "10+", l: "Technologies" },
                    { n: "5+", l: "Industries" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: "#00d4aa", fontFamily: "var(--font-display)" }}
                      >
                        {s.n}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                      >
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education cards */}
            <div className="mt-4 space-y-3">
              {[
                {
                  school: "Universität des Saarlandes",
                  degree: "MSc Computer Science",
                  period: "Ongoing",
                  grade: "2.1 out of 4.0",
                  active: true,
                },
                {
                  school: "VIIT Pune",
                  degree: "BTech Computer Engineering",
                  period: "Jun 2023",
                  grade: "9.83 out of 10.0",
                  active: false,
                },
              ].map((edu) => (
                <div
                  key={edu.school}
                  className="glass-card rounded-xl p-4 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}
                      >
                        {edu.school}
                      </span>
                      {edu.active && <span className="badge-active">Active</span>}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                    >
                      {edu.degree}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div
                      className="text-sm font-bold"
                      style={{ color: "#00d4aa", fontFamily: "var(--font-display)" }}
                    >
                      {edu.grade}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                    >
                      {edu.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
