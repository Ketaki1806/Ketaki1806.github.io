/* ============================================================
   PUBLICATIONS SECTION / Midnight Precision Theme
   Minimal list with teal accent decorations
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen } from "lucide-react";

const publications = [
  {
    title: "Plant Leaf Disease Detection using Image Processing and Deep Learning",
    journal: "IJARSCT",
    type: "Research Paper",
    description:
      "Developed an Android app to detect diseases in 12 Indian plants by analyzing leaf spots. Applied OpenCV Grabcut algorithm for precise foreground extraction; benchmarked CNN, AlexNet, and ResNet architectures.",
    tech: ["Android", "OpenCV", "CNN", "AlexNet", "ResNet", "Python"],
  },
  {
    title: "Feedback ECG and PPG Monitoring Health Wrist Band",
    journal: "Biomedical Signal Processing",
    type: "Research and Copyright",
    description:
      "Designed and simulated a wearable ECG/PPG + BLE wristband with a cloud-based signal processing pipeline in Python. Implemented Twilio-powered emergency alerts for critical health events. Secured copyright for research contributions.",
    tech: ["Python", "NumPy", "Pandas", "HeartPy", "BLE", "Twilio", "Google APIs"],
  },
];

export default function Publications() {
  const ref = useScrollReveal();

  return (
    <section
      id="publications"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ background: "#0d1120" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.05)" }} />

      <div className="container">
        <div className="reveal mb-16" style={{ transitionDelay: "0ms" }}>
          <p className="text-xs font-semibold mb-3 tracking-widest" style={{ color: "#00d4aa", fontFamily: "var(--font-mono)" }}>
            // PUBLICATIONS & RESEARCH
          </p>
          <h2 className="section-heading text-3xl md:text-4xl font-bold" style={{ color: "#f0f4f8" }}>
            Published Work
          </h2>
          <p className="text-xs mt-4" style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}>
            2 publications · 1 copyright · peer-reviewed
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <div
              key={pub.title}
              className="reveal glass-card rounded-2xl p-6 md:p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1"
                  style={{
                    background: "rgba(0,212,170,0.1)",
                    border: "1px solid rgba(0,212,170,0.2)",
                  }}
                >
                  <BookOpen size={18} style={{ color: "#00d4aa" }} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(0,212,170,0.1)",
                        border: "1px solid rgba(0,212,170,0.2)",
                        color: "#00d4aa",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {pub.type}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                    >
                      {pub.journal}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-3 leading-snug"
                    style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}
                  >
                    {pub.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#8892a4" }}>
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tech.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
