/* ============================================================
   FOOTER / Midnight Precision Theme
   ============================================================ */
export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        background: "#070a14",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
          style={{
            background: "rgba(0,212,170,0.1)",
            border: "1.5px solid rgba(0,212,170,0.3)",
            color: "#00d4aa",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.05em",
          }}
        >
          KH
        </div>
      </div>
      <p
        className="text-xs"
        style={{ color: "#8892a4", fontFamily: "var(--font-mono)" }}
      >
        Designed & built by{" "}
        <span style={{ color: "#00d4aa" }}>Ketaki Hadnurkar</span>
        {" / "}
        <span>Saarbrücken, Germany · {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
        <span>Saarbrücken, Germany / {new Date().getFullYear()}</span>
