(function () {
  "use strict";

  var THEME_KEY = "kh-theme";
  var skills = [
    { name: "Python", cat: "lang" },
    { name: "JavaScript", cat: "lang" },
    { name: "TypeScript", cat: "lang" },
    { name: "Java", cat: "lang" },
    { name: "C#", cat: "lang" },
    { name: "C++", cat: "lang" },
    { name: "SQL", cat: "lang" },
    { name: "HTML / CSS / SCSS", cat: "lang" },
    { name: "Angular", cat: "fe" },
    { name: "React", cat: "fe" },
    { name: "Redux", cat: "fe" },
    { name: "Flutter", cat: "fe" },
    { name: "React Native", cat: "fe" },
    { name: ".NET / ASP.NET Core", cat: "be" },
    { name: "Spring Boot", cat: "be" },
    { name: "Node.js", cat: "be" },
    { name: "Flask / FastAPI", cat: "be" },
    { name: "REST & microservices", cat: "be" },
    { name: "PyTorch / TensorFlow", cat: "data" },
    { name: "scikit-learn", cat: "data" },
    { name: "Pandas & NumPy", cat: "data" },
    { name: "LSTM & CNNs", cat: "data" },
    { name: "OpenCV", cat: "data" },
    { name: "AWS (EC2, S3, RDS)", cat: "ops" },
    { name: "Docker", cat: "ops" },
    { name: "Jenkins / CI/CD", cat: "ops" },
    { name: "Git & GitHub", cat: "ops" },
  ];

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* --- Theme --- */
  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(mode) {
    if (mode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored === "dark" || stored === "light") {
      applyTheme(stored);
      return;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    }
  }

  function toggleTheme() {
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    var next = isDark ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
  }

  /* --- Scroll progress --- */
  function initScrollProgress() {
    var el = document.querySelector(".scroll-progress");
    if (!el) return;
    function onScroll() {
      var sc = document.documentElement.scrollTop || document.body.scrollTop;
      var height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var p = height > 0 ? (sc / height) * 100 : 0;
      el.style.width = p + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* --- Reveal on scroll --- */
  function initReveal() {
    if (prefersReducedMotion()) {
      document.querySelectorAll("[data-reveal]").forEach(function (node) {
        node.classList.add("is-visible");
      });
      return;
    }
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      obs.observe(el);
    });
  }

  /* --- Skill cloud --- */
  function initSkillCloud() {
    var root = document.getElementById("skill-cloud");
    if (!root) return;
    var current = "all";

    function render() {
      root.innerHTML = "";
      skills.forEach(function (s) {
        var tag = document.createElement("button");
        tag.type = "button";
        tag.className = "skill-tag";
        tag.textContent = s.name;
        tag.setAttribute("data-cat", s.cat);
        if (current !== "all" && s.cat !== current) {
          tag.classList.add("is-dim");
        }
        tag.addEventListener("mouseenter", function () {
          document.querySelectorAll(".skill-tag").forEach(function (t) {
            t.classList.remove("is-highlight");
          });
          tag.classList.add("is-highlight");
          document.querySelectorAll('.skill-tag[data-cat="' + s.cat + '"]').forEach(function (t) {
            t.classList.add("is-highlight");
          });
        });
        tag.addEventListener("mouseleave", function () {
          document.querySelectorAll(".skill-tag").forEach(function (t) {
            t.classList.remove("is-highlight");
          });
        });
        root.appendChild(tag);
      });
    }

    document.querySelectorAll(".skill-filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        current = btn.getAttribute("data-filter") || "all";
        document.querySelectorAll(".skill-filter").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        render();
      });
    });

    render();
  }

  /* --- Copy toast --- */
  function showToast(msg) {
    var toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toast.hidden = true;
    }, 2200);
  }

  function initCopy() {
    document.querySelectorAll("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = btn.getAttribute("data-copy") || "";
        if (!text) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            function () {
              showToast("Copied to clipboard");
            },
            function () {
              showToast("Could not copy");
            }
          );
        }
      });
    });
  }

  /* --- Scroll hint --- */
  function initScrollHint() {
    document.querySelectorAll("[data-scroll-to]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sel = btn.getAttribute("data-scroll-to");
        var target = sel ? document.querySelector(sel) : null;
        if (target) target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      });
    });
  }

  /* --- Footer year --- */
  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* --- Theme button --- */
  function initThemeToggle() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", toggleTheme);
  }

  /* --- Mycelium canvas (organic network) --- */
  function initMycelium() {
    var canvas = document.getElementById("mycelium");
    if (!canvas || prefersReducedMotion()) return;

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0;
    var h = 0;
    var nodes = [];
    var mx = 0;
    var my = 0;
    var hasMouse = false;
    var GRID = 55;
    var JITTER = 22;

    function cssColorMuted(alpha) {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      if (dark) {
        return "rgba(168, 159, 145," + alpha + ")";
      }
      return "rgba(92, 83, 71," + alpha + ")";
    }

    function cssAccent(alpha) {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      if (dark) {
        return "rgba(143, 188, 148," + alpha + ")";
      }
      return "rgba(107, 143, 113," + alpha + ")";
    }

    function buildNodes() {
      nodes = [];
      var cols = Math.ceil(w / GRID) + 2;
      var rows = Math.ceil(h / GRID) + 2;
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          var nx = i * GRID + (Math.random() - 0.5) * JITTER;
          var ny = j * GRID + (Math.random() - 0.5) * JITTER;
          nodes.push({
            bx: nx,
            by: ny,
            x: nx,
            y: ny,
            vx: 0,
            vy: 0,
          });
        }
      }
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);

      var linkDist = GRID * 1.45;
      var mousePull = hasMouse ? 0.08 : 0;

      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var na = nodes[a];
          var nb = nodes[b];
          var dx = nb.x - na.x;
          var dy = nb.y - na.y;
          var dist = Math.hypot(dx, dy);
          if (dist < linkDist && dist > 0) {
            var t = 1 - dist / linkDist;
            ctx.beginPath();
            ctx.strokeStyle = cssColorMuted(0.12 + t * 0.2);
            ctx.lineWidth = 0.6 + t * 0.5;
            ctx.moveTo(na.x, na.y);
            ctx.lineTo(nb.x, nb.y);
            ctx.stroke();
          }
        }
      }

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.vx += (n.bx - n.x) * 0.02;
        n.vy += (n.by - n.y) * 0.02;
        if (hasMouse) {
          var mdx = n.x - mx;
          var mdy = n.y - my;
          var md = Math.hypot(mdx, mdy) + 0.01;
          if (md < 220) {
            var f = (1 - md / 220) * mousePull;
            n.vx -= (mdx / md) * f * 3;
            n.vy -= (mdy / md) * f * 3;
          }
        }
        n.vx *= 0.88;
        n.vy *= 0.88;
        n.x += n.vx;
        n.y += n.vy;

        ctx.beginPath();
        ctx.fillStyle = cssAccent(0.35);
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(tick);
    }

    window.addEventListener(
      "mousemove",
      function (e) {
        hasMouse = true;
        mx = e.clientX;
        my = e.clientY;
      },
      { passive: true }
    );
    window.addEventListener(
      "mouseleave",
      function () {
        hasMouse = false;
      },
      { passive: true }
    );
    window.addEventListener("resize", resize);

    var themeObserver = new MutationObserver(function () {
      /* colors read each frame from data-theme */
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    resize();
    requestAnimationFrame(tick);
  }

  initTheme();
  initThemeToggle();
  initScrollProgress();
  initReveal();
  initSkillCloud();
  initCopy();
  initScrollHint();
  initYear();
  initMycelium();
})();
