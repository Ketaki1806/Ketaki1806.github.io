/* ============================================================
   HERO SECTION / Midnight Precision Theme
   Full-viewport dark hero with particle canvas, typewriter effect
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin, Mail, Github, ExternalLink } from "lucide-react";

const ROLES = [
  "Full-Stack Engineer",
  "Fintech Developer",
  "ML Researcher",
  "Problem Solver",
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const COUNT = 70;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 170, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      // Draw dots
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 170, 0.5)";
        ctx.fill();
        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1400);
      return () => clearTimeout(t);
    }
    const current = ROLES[roleIndex];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        setPause(true);
        setDeleting(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, pause, roleIndex]);

  return (
    <span style={{ color: "#00d4aa", fontFamily: "var(--font-display)" }}>
      {displayed}
      <span className="cursor-blink" style={{ color: "#00d4aa" }}>|</span>
    </span>
  );
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden dot-grid"
      style={{ background: "#0a0e1a" }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/manus-storage/hero-bg_9673791e.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />

      {/* Particle canvas */}
      <div className="absolute inset-0">
        <ParticleCanvas />
      </div>

      {/* Radial glow */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          {/* Location badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(0,212,170,0.08)",
              border: "1px solid rgba(0,212,170,0.2)",
              color: "#00d4aa",
              fontFamily: "var(--font-mono)",
            }}
          >
            <MapPin size={12} />
            Saarbrücken, Germany / Open to opportunities
          </div>

          {/* Name */}
          <h1
            className="font-bold leading-none mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#f0f4f8",
              letterSpacing: "-0.02em",
            }}
          >
            Ketaki
            <br />
            <span style={{ color: "#00d4aa" }}>Hadnurkar</span>
          </h1>

          {/* Role typewriter */}
          <div
            className="text-xl md:text-2xl font-medium mb-6"
            style={{ fontFamily: "var(--font-display)", color: "#8892a4" }}
          >
            <Typewriter />
          </div>

          {/* Tagline */}
          <p
            className="text-base md:text-lg mb-8 max-w-2xl leading-relaxed"
            style={{ color: "#8892a4", fontFamily: "var(--font-body)" }}
          >
            MSc Computer Science student at Universität des Saarlandes. 3+ years building
            production-grade fintech platforms, distributed systems, and ML pipelines across
            India, Singapore, Malaysia, and Germany.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              className="btn-teal"
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </button>
            <a
              href="mailto:ketakihadnurkar.adm@gmail.com"
              className="flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f0f4f8",
                fontFamily: "var(--font-display)",
              }}
            >
              <Mail size={15} />
              Get In Touch
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "3+", label: "Years in Tech" },
              { value: "9.83", label: "B.Tech GPA / 10" },
              { value: "5+", label: "Countries Deployed" },
              { value: "2", label: "Research Papers" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "#00d4aa" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right column — Precision Dashboard Panel */}
        <div className="hidden lg:flex flex-col gap-4">
          {/* Status panel */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(0,212,170,0.04)",
              border: "1px solid rgba(0,212,170,0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold tracking-widest" style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}>
                ENGINEER.STATUS
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#00d4aa", fontFamily: "var(--font-mono)" }}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                AVAILABLE
              </span>
            </div>
            <div className="space-y-3">
              {[
                { key: "current_role", val: "Werkstudentin @ Saar Metall" },
                { key: "degree", val: "MSc CS · Saarland University" },
                { key: "stack", val: "React · .NET · Python · Angular" },
                { key: "focus", val: "Fintech · ML · Distributed Systems" },
              ].map((row) => (
                <div key={row.key} className="flex gap-3 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                  <span style={{ color: "rgba(0,212,170,0.5)", minWidth: "110px" }}>{row.key}</span>
                  <span style={{ color: "#f0f4f8" }}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech metrics */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}>
              EXPERIENCE.METRICS
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Full-Stack", pct: 90 },
                { label: "Backend / APIs", pct: 88 },
                { label: "ML / Data", pct: 75 },
                { label: "System Design", pct: 80 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs" style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}>{m.label}</span>
                    <span className="text-xs" style={{ color: "#00d4aa", fontFamily: "var(--font-mono)" }}>{m.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <div
                      className="h-1 rounded-full"
                      style={{
                        width: `${m.pct}%`,
                        background: "linear-gradient(to right, #00d4aa, rgba(0,212,170,0.5))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}>
              LANGUAGES.SPOKEN
            </div>
            <div className="flex gap-4">
              {[{ lang: "English", level: "C1" }, { lang: "German", level: "A2" }].map((l) => (
                <div key={l.lang} className="flex items-center gap-2">
                  <span
                    className="text-sm font-bold px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(0,212,170,0.1)",
                      border: "1px solid rgba(0,212,170,0.25)",
                      color: "#00d4aa",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {l.level}
                  </span>
                  <span className="text-sm" style={{ color: "#f0f4f8", fontFamily: "var(--font-display)" }}>{l.lang}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
        style={{ color: "#8892a4" }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>
          SCROLL
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
        {/* Right column / Precision Dashboard Panel */}
