/* ============================================================
   SKILLS SECTION / Midnight Precision Theme
   Grouped skill categories with animated tags
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    color: "#00d4aa",  // primary teal / brand color
    skills: ["C++", "Java", "Python", "C#", "JavaScript", "TypeScript", "SQL", "HTML", "SCSS", "Shell"],
  },
  {
    category: "Frameworks",
    icon: "⚡",
    color: "#00b4d8",  // secondary / cool blue, functional
    skills: ["Angular", "React", "Spring Boot", "ASP.NET", ".NET Core", "FastAPI", "FlaskAPI", "Flutter"],
  },
  {
    category: "Tools & Infra",
    icon: "🔧",
    color: "#8892a4",  // muted / tertiary
    skills: ["Docker", "Git", "GitHub", "Jenkins", "JIRA", "Postman", "Agile/Scrum"],
  },
  {
    category: "Databases",
    icon: "🗄",
    color: "#00d4aa",  // teal variant
    skills: ["MySQL", "MongoDB", "MSSQL", "SSMS", "PostgreSQL"],
  },
  {
    category: "ML / Data Science",
    icon: "🧠",
    color: "#00d4aa",  // teal / key domain
    skills: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "CNNs", "LSTM", "YOLOv8"],
  },
  {
    category: "CS Fundamentals",
    icon: "📐",
    color: "#8892a4",  // muted / foundational
    skills: ["DSA", "OOP", "Distributed Systems", "Microservices", "OS", "Relational DBs"],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ background: "#0a0e1a" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.05)" }} />

      <div className="container">
        <div className="reveal mb-16" style={{ transitionDelay: "0ms" }}>
          <p className="text-xs font-semibold mb-3 tracking-widest" style={{ color: "#00d4aa", fontFamily: "var(--font-mono)" }}>
            // SKILLS & TECH STACK
          </p>
          <h2 className="section-heading text-3xl md:text-4xl font-bold" style={{ color: "#f0f4f8" }}>
            What I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="reveal glass-card rounded-2xl p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{
                    background: `${group.color}18`,
                    border: `1px solid ${group.color}30`,
                    color: group.color,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  className="text-sm font-bold"
                  style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md transition-all duration-200 cursor-default"
                    style={{
                      background: `${group.color}10`,
                      border: `1px solid ${group.color}25`,
                      color: group.color,
                      fontFamily: "var(--font-mono)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${group.color}22`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${group.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${group.color}10`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${group.color}25`;
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills row */}
        <div className="reveal mt-8" style={{ transitionDelay: "500ms" }}>
          <div
            className="glass-card rounded-2xl p-6"
          >
            <h3
              className="text-sm font-bold mb-4"
              style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}
            >
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Analytical Thinking", "Communication", "Ownership", "Team Leadership", "Critical Thinking", "Cross-functional Collaboration"].map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#8892a4",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
