/* ============================================================
   PROJECTS SECTION / Midnight Precision Theme
   Cards with glowing teal borders on hover
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Super-Resolution for Object Detection on COCO",
    period: "June 2026 to July 2026",
    category: "ML Research",
    description:
      "Designed a reproducible SR → detection pipeline on COCO val2017 (~5k images), comparing ESPCN, FSRCNN, and AnyUp as preprocessing for YOLOv8n and Faster R-CNN. Showed that higher PSNR/SSIM does not imply higher detection mAP.",
    tech: ["PyTorch", "YOLOv8", "Faster R-CNN", "COCO", "Python"],
    highlight: "~10pp mAP drop from degradation, only ~1-2pp recovery from pretrained SR",
  },
  {
    title: "Full-Stack QA Platform / Saar Metall",
    period: "Ongoing",
    category: "Full-Stack",
    description:
      "End-to-end digitalization of quality assurance across the manufacturing lifecycle. Architected from scratch: system design, data modeling, UI/UX, and implementation.",
    tech: ["React", "PHP", "MySQL", "SSMS"],
    highlight: "Eliminated manual bottlenecks across full production lifecycle",
  },
  {
    title: "QR-Based Android E-Ticketing App",
    period: "Jun 2021 to Jan 2022",
    category: "Mobile · ML",
    description:
      "Full-stack QR-based e-ticketing Android app for Smart India Hackathon. Applied regression algorithms for predictive visitor-count forecasting and integrated AR for immersive monument experiences.",
    tech: ["Android Studio", "Java", "AR", "Regression", "Wikipedia API"],
    highlight: "National competition finalist / Smart India Hackathon",
  },
  {
    title: "Mahavir Electronics E-Commerce Platform",
    period: "Jun 2022 to Jan 2023",
    category: "Full-Stack",
    description:
      "Full-featured e-commerce platform with ReactJS frontend and Spring Boot + MongoDB backend. Deployed on AWS EC2 for scalability and uptime.",
    tech: ["React", "Spring Boot", "MongoDB", "AWS EC2"],
    highlight: "+40% online sales in first 3 months / +30% user engagement",
  },
];

const categoryColors: Record<string, string> = {
  "ML Research": "rgba(0, 180, 216, 0.12)",
  "Full-Stack": "rgba(0, 212, 170, 0.1)",
  "Mobile · ML": "rgba(245, 158, 11, 0.12)",
};
const categoryTextColors: Record<string, string> = {
  "ML Research": "#00b4d8",
  "Full-Stack": "#00d4aa",
  "Mobile · ML": "#f59e0b",
};

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ background: "#0d1120" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.05)" }} />

      <div className="container">
        <div className="reveal mb-16" style={{ transitionDelay: "0ms" }}>
          <p className="text-xs font-semibold mb-3 tracking-widest" style={{ color: "#00d4aa", fontFamily: "var(--font-mono)" }}>
            // PROJECTS
          </p>
          <h2 className="section-heading text-3xl md:text-4xl font-bold" style={{ color: "#f0f4f8" }}>
            Things I've Built & Researched
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal glass-card rounded-2xl p-6 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded"
                      style={{
                        background: categoryColors[project.category] || "rgba(0,212,170,0.1)",
                        color: categoryTextColors[project.category] || "#00d4aa",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                    >
                      {project.period}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold leading-snug"
                    style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#8892a4" }}>
                {project.description}
              </p>

              {/* Highlight */}
              <div
                className="text-xs font-medium mb-4 px-3 py-2 rounded-lg"
                style={{
                  background: "rgba(0,212,170,0.06)",
                  border: "1px solid rgba(0,212,170,0.15)",
                  color: "#00d4aa",
                  fontFamily: "var(--font-mono)",
                }}
              >
                ✦ {project.highlight}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
