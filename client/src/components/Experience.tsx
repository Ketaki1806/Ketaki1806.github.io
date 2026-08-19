/* ============================================================
   EXPERIENCE SECTION / Midnight Precision Theme
   Vertical timeline with animated connector line
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "Saar Metall Gruppe",
    role: "Werkstudentin",
    period: "Ongoing | Present",
    location: "Saarbrücken, Germany",
    active: true,
    tech: ["React", "PHP", "MySQL", "SSMS"],
    bullets: [
      "Architected and shipped a full-stack QA platform from zero to production, transforming manual quality checks into an automated, traceable system across the entire manufacturing workflow.",
      "Engineered real-time dashboards and reporting tools that reduced QA cycle time by 40% and eliminated critical bottlenecks in order-to-shipment processes.",
      "Proactively identified and fixed performance issues across legacy systems, improving system reliability and user experience across multiple company products.",
    ],
  },
  {
    company: "Finiq Consulting India",
    role: "Software Engineer",
    period: "Mar 2023 to Aug 2025",
    location: "Pune, India",
    active: false,
    tech: ["Angular", ".NET", "React", "ASP.NET", "SQL", "Microservices"],
    bullets: [
      "Led full-stack development of FX cash and FX equities trading platforms serving top-tier banks across Singapore and Malaysia, handling billions in daily transactions.",
      "Built a bonds trading terminal for a major Spanish bank that empowered 200+ global traders and sales teams to execute quotes and orders with sub-second latency.",
      "Coordinated a 4-5 person engineering team across multiple time zones, shipping 15+ features on schedule with 99.9% uptime and zero critical incidents.",
    ],
  },
  {
    company: "Finiq Consulting India",
    role: "Software Development Intern",
    period: "Jan 2023 to Jun 2023",
    location: "Pune, India",
    active: false,
    tech: ["Angular", "React", "Mobile"],
    bullets: [
      "Built a mobile FX booking app that reduced transaction processing time from 45 minutes to 8 minutes, directly improving customer satisfaction scores by 35%.",
      "Engineered a custom log parser and anomaly detector that reduced issue resolution time by 50% and prevented 20+ production incidents.",
      "Developed a real-time trade data visualization platform using Angular that accelerated trader decision-making and increased daily trading volume by 25%.",
    ],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "Jun 2022 to Jan 2023",
    location: "Pune, India",
    active: false,
    tech: ["React", "Spring Boot", "MongoDB", "AWS EC2"],
    bullets: [
      "Designed and shipped a full-featured e-commerce platform for Mahavir Electronics that drove 40% revenue growth in 3 months and 30% user engagement increase.",
      "Built a high-performance React frontend and Spring Boot microservices backend, deployed on AWS EC2 with auto-scaling and 99.95% uptime.",
    ],
  },
  {
    company: "Mahindra & Mahindra",
    role: "Data Science Intern",
    period: "Jul 2021 to Dec 2021",
    location: "Pune, India",
    active: false,
    tech: ["Python", "LSTM", "MongoDB", "ML"],
    bullets: [
      "Developed LSTM autoencoder models for real-time anomaly detection that boosted manufacturing efficiency by 30% and reduced unplanned machine downtime by 45%.",
      "Optimized CNC machine data pipelines and MongoDB queries, reducing data latency from 2 hours to 15 minutes and enabling true real-time predictive maintenance.",
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ background: "#0a0e1a" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.05)" }} />

      <div className="container">
        {/* Section header */}
        <div className="reveal mb-16" style={{ transitionDelay: "0ms" }}>
          <p className="text-xs font-semibold mb-3 tracking-widest" style={{ color: "#00d4aa", fontFamily: "var(--font-mono)" }}>
            // WORK EXPERIENCE
          </p>
          <h2 className="section-heading text-3xl md:text-4xl font-bold" style={{ color: "#f0f4f8" }}>
            Where I've Built Things
          </h2>
          <p className="text-xs mt-4" style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}>
            {experiences.length} roles · {new Date().getFullYear() - 2021}+ years · 3 countries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Animated vertical line */}
          <div className="absolute left-0 top-0 bottom-0" style={{ width: "2px" }}>
            <div className="timeline-line" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.05)" }} />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="reveal relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 md:-left-12 top-5 w-3 h-3 rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: exp.active ? "#00d4aa" : "rgba(0,212,170,0.4)",
                    background: exp.active ? "#00d4aa" : "#0a0e1a",
                    boxShadow: exp.active ? "0 0 12px rgba(0,212,170,0.6)" : "none",
                    transform: "translateX(-5px)",
                  }}
                />

                {/* Card */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}
                        >
                          {exp.company}
                        </h3>
                        {exp.active && <span className="badge-active">Current</span>}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "#00d4aa", fontFamily: "var(--font-display)", fontWeight: 600 }}
                      >
                        {exp.role}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-xs mb-1"
                        style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                      >
                        {exp.period}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                      >
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#8892a4" }}>
                        <span style={{ color: "#00d4aa", marginTop: "2px", flexShrink: 0 }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
