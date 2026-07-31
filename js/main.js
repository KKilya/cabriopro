/* ==========================================================================
   CABRIO PRO — main.js
   Interacción general del sitio.
   Módulos: navegación · menú móvil · revelado al scroll · parallax ·
            contadores · mecanismo de capota (SVG) · galería + lightbox ·
            banner de cookies · formulario · año automático.
   Sin dependencias externas. Todo se degrada con elegancia si falta el nodo.
   ========================================================================== */

(function () {
  "use strict";

  const $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  const $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ======================================================================
     1. NAVEGACIÓN: fondo sólido al bajar + menú móvil
     ====================================================================== */
  function initNav() {
    const nav = $(".nav");
    const burger = $(".burger");
    const panel = $(".mobile");

    if (nav) {
      const onScroll = function () {
        nav.classList.toggle("is-solid", window.scrollY > 40);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (!burger || !panel) return;

    const setOpen = function (open) {
      burger.classList.toggle("is-open", open);
      panel.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("is-locked", open);
    };

    burger.addEventListener("click", function () {
      setOpen(!panel.classList.contains("is-open"));
    });

    // Cerrar al elegir destino o al pulsar Escape
    $$("a", panel).forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("is-open")) setOpen(false);
    });
  }

  /* ======================================================================
     2. REVELADO AL SCROLL (IntersectionObserver)
     ====================================================================== */
  function initReveal() {
    const items = $$(".reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    items.forEach(function (el, i) {
      // Escalonado suave dentro de cada grupo
      if (!el.style.getPropertyValue("--delay")) {
        el.style.setProperty("--delay", (i % 4) * 90 + "ms");
      }
      io.observe(el);
    });
  }

  /* ======================================================================
     3. PARALLAX SUTIL
     ====================================================================== */
  function initParallax() {
    const layers = $$(".parallax");
    if (!layers.length || reduceMotion) return;

    let ticking = false;
    const update = function () {
      const vh = window.innerHeight;
      layers.forEach(function (el) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const speed = parseFloat(el.getAttribute("data-speed")) || 0.08;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.setProperty("--shift", (-progress * speed * 100).toFixed(2) + "px");
      });
      ticking = false;
    };

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  /* ======================================================================
     4. CONTADORES ANIMADOS
     ====================================================================== */
  function initCounters() {
    const nodes = $$("[data-count]");
    if (!nodes.length) return;

    const run = function (el) {
      const target = parseFloat(el.getAttribute("data-count")) || 0;
      const dur = 1400;
      if (reduceMotion) { el.firstChild.nodeValue = String(target); return; }
      const start = performance.now();
      const step = function (now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.firstChild.nodeValue = String(Math.round(target * eased));
        if (p < 1) window.requestAnimationFrame(step);
      };
      el.firstChild.nodeValue = "0";
      window.requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) { nodes.forEach(run); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    nodes.forEach(function (el) { io.observe(el); });
  }

  /* ======================================================================
     5. MECANISMO DE CAPOTA (elemento firma del hero)
     --------------------------------------------------------------------
     Cadena de tres brazos articulados sobre el pivote del alojamiento.
     t = 0  -> capota subida     t = 1 -> capota plegada
     Los ángulos se interpolan de forma continua, de modo que el conjunto
     se pliega en tijera igual que un varillaje real.
     ====================================================================== */
  function initMechanism() {
    const stage = $("#mech-stage");
    if (!stage) return;

    const armEl    = $("#mech-arms", stage);
    const fabricEl = $("#mech-fabric", stage);
    const seamEl   = $("#mech-seam", stage);
    const barrelEl = $("#mech-barrel", stage);
    const rodEl    = $("#mech-rod", stage);
    const pins     = [$("#pin0", stage), $("#pin1", stage), $("#pin2", stage), $("#pin3", stage)];
    const range    = $("#mech-range");
    const readout  = $("#mech-readout");
    if (!armEl || !fabricEl) return;

    // --- Geometría fija (coordenadas del viewBox 0 0 560 300) ---
    const PIVOT = { x: 410, y: 188 };   // pivote principal en el alojamiento
    const ANCHOR = { x: 470, y: 200 };  // anclaje del cilindro hidráulico
    const L = [78, 72, 66];             // longitudes de los tres brazos
    const UP   = { a1: -100, r2: -50,  r3: -55  };  // capota subida (grados)
    const DOWN = { a1: -195, r2: -175, r3: -175 };  // capota plegada

    const rad = function (deg) { return deg * Math.PI / 180; };
    const lerp = function (a, b, p) { return a + (b - a) * p; };
    const easeInOut = function (p) {
      return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    };

    function solve(t) {
      const e  = easeInOut(t);
      const a1 = lerp(UP.a1, DOWN.a1, e);
      const a2 = a1 + lerp(UP.r2, DOWN.r2, e);
      const a3 = a2 + lerp(UP.r3, DOWN.r3, e);
      const pts = [PIVOT];
      [a1, a2, a3].forEach(function (ang, i) {
        const prev = pts[i];
        pts.push({
          x: prev.x + L[i] * Math.cos(rad(ang)),
          y: prev.y + L[i] * Math.sin(rad(ang))
        });
      });
      return pts; // [P0 pivote, P1, P2, P3 arco delantero]
    }

    // Curva suave (Catmull-Rom -> Bézier) que hace de lona sobre los arcos
    function smoothPath(pts) {
      let d = "M " + pts[0].x.toFixed(1) + " " + pts[0].y.toFixed(1);
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i - 1] || pts[i];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2] || p2;
        const c1x = p1.x + (p2.x - p0.x) / 6;
        const c1y = p1.y + (p2.y - p0.y) / 6;
        const c2x = p2.x - (p3.x - p1.x) / 6;
        const c2y = p2.y - (p3.y - p1.y) / 6;
        d += " C " + c1x.toFixed(1) + " " + c1y.toFixed(1) + ", " +
                     c2x.toFixed(1) + " " + c2y.toFixed(1) + ", " +
                     p2.x.toFixed(1) + " " + p2.y.toFixed(1);
      }
      return d;
    }

    function render(t) {
      const p = solve(t);

      // Brazos rígidos
      armEl.setAttribute("points", p.map(function (q) {
        return q.x.toFixed(1) + "," + q.y.toFixed(1);
      }).join(" "));

      // Lona: misma curva, trazo grueso; la costura repite el recorrido
      const d = smoothPath(p);
      fabricEl.setAttribute("d", d);
      if (seamEl) seamEl.setAttribute("d", d);

      // Pasadores
      pins.forEach(function (pin, i) {
        if (!pin) return;
        pin.setAttribute("cx", p[i].x.toFixed(1));
        pin.setAttribute("cy", p[i].y.toFixed(1));
      });

      // Cilindro hidráulico: camisa fija + vástago que se extiende
      const C = { x: PIVOT.x + (p[1].x - PIVOT.x) * 0.4, y: PIVOT.y + (p[1].y - PIVOT.y) * 0.4 };
      const dx = C.x - ANCHOR.x, dy = C.y - ANCHOR.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const bx = ANCHOR.x + dx / len * 40, by = ANCHOR.y + dy / len * 40;
      if (barrelEl) {
        barrelEl.setAttribute("x1", ANCHOR.x); barrelEl.setAttribute("y1", ANCHOR.y);
        barrelEl.setAttribute("x2", bx.toFixed(1)); barrelEl.setAttribute("y2", by.toFixed(1));
      }
      if (rodEl) {
        rodEl.setAttribute("x1", bx.toFixed(1)); rodEl.setAttribute("y1", by.toFixed(1));
        rodEl.setAttribute("x2", C.x.toFixed(1)); rodEl.setAttribute("y2", C.y.toFixed(1));
      }

      // Lectura de estado
      if (readout) {
        const key = t > 0.85 ? "mech.stowed" : (t < 0.15 ? "mech.open" : null);
        const label = key && window.CabrioI18N ? window.CabrioI18N.t(key) : Math.round(t * 100) + " %";
        readout.textContent = label;
      }
    }

    // --- Estado y control ---
    let t = 0;
    const setT = function (value) {
      t = Math.min(1, Math.max(0, value));
      if (range) range.value = String(Math.round(t * 100));
      render(t);
    };

    if (range) {
      range.addEventListener("input", function () {
        setT(parseFloat(range.value) / 100);
      });
    }
    document.addEventListener("cabrio:langchange", function () { render(t); });

    // --- Demostración automática al cargar: abre, pliega y vuelve a abrir ---
    setT(0);
    if (reduceMotion) { setT(0.12); return; }

    let raf = null;
    const demo = function (from, to, dur, next) {
      const start = performance.now();
      const tick = function (now) {
        const p = Math.min((now - start) / dur, 1);
        setT(lerp(from, to, p));
        if (p < 1) { raf = window.requestAnimationFrame(tick); }
        else if (next) { next(); }
      };
      raf = window.requestAnimationFrame(tick);
    };

    const stop = function () {
      if (raf) window.cancelAnimationFrame(raf);
      raf = null;
      ["pointerdown", "keydown"].forEach(function (ev) {
        if (range) range.removeEventListener(ev, stop);
      });
    };
    if (range) {
      range.addEventListener("pointerdown", stop);
      range.addEventListener("keydown", stop);
    }

    window.setTimeout(function () {
      demo(0, 1, 2600, function () {
        window.setTimeout(function () { demo(1, 0, 2200); }, 900);
      });
    }, 1400);
  }

  /* ======================================================================
     6. GALERÍA: filtros + lightbox
     ====================================================================== */
  function initGallery() {
    const grid = $("#gallery");
    if (!grid) return;

    const shots = $$(".shot", grid);

    // --- Filtros por categoría ---
    $$(".filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const cat = btn.getAttribute("data-filter");
        $$(".filter").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        shots.forEach(function (shot) {
          const match = cat === "all" || shot.getAttribute("data-cat") === cat;
          shot.classList.toggle("is-hidden", !match);
        });
      });
    });

    // --- Lightbox ---
    const box = $("#lightbox");
    if (!box) return;
    const boxImg = $("#lightbox-img", box);
    const boxCap = $("#lightbox-cap", box);
    let index = 0;
    let lastFocus = null;

    const visible = function () {
      return shots.filter(function (s) { return !s.classList.contains("is-hidden"); });
    };

    const show = function (i) {
      const list = visible();
      if (!list.length) return;
      index = (i + list.length) % list.length;
      const shot = list[index];
      const img = $("img", shot);
      boxImg.src = img.getAttribute("src");
      boxImg.alt = img.getAttribute("alt") || "";
      boxCap.textContent = $(".shot__cap span", shot) ? $(".shot__cap span", shot).textContent : "";
    };

    const open = function (i) {
      lastFocus = document.activeElement;
      show(i);
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
      const close = $(".lightbox__close", box);
      if (close) close.focus();
    };

    const close = function () {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      if (lastFocus) lastFocus.focus();
    };

    shots.forEach(function (shot) {
      shot.addEventListener("click", function () {
        open(visible().indexOf(shot));
      });
    });

    $(".lightbox__close", box).addEventListener("click", close);
    $(".lightbox__nav--prev", box).addEventListener("click", function () { show(index - 1); });
    $(".lightbox__nav--next", box).addEventListener("click", function () { show(index + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });

    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
  }

  /* ======================================================================
     7. BANNER DE COOKIES
     ====================================================================== */
  function initCookies() {
    const bar = $("#cookies");
    if (!bar) return;
    const KEY = "cabriopro.cookies";

    let choice = null;
    try { choice = localStorage.getItem(KEY); } catch (e) { /* modo privado */ }
    if (!choice) {
      window.setTimeout(function () { bar.classList.add("is-open"); }, 1200);
    }

    const decide = function (value) {
      try { localStorage.setItem(KEY, value); } catch (e) { /* ignorar */ }
      bar.classList.remove("is-open");
      // Aquí es donde se activarían scripts de terceros si algún día se añaden.
    };

    const ok = $("#cookies-accept", bar);
    const no = $("#cookies-reject", bar);
    if (ok) ok.addEventListener("click", function () { decide("all"); });
    if (no) no.addEventListener("click", function () { decide("essential"); });
  }

  /* ======================================================================
     8. FORMULARIO DE CONTACTO
     Sin backend: compone un correo con los datos y lo abre en el cliente
     de correo del visitante. Sustituible por un endpoint cuando lo haya.
     ====================================================================== */
  function initForm() {
    const form = $("#contact-form");
    if (!form) return;
    const status = $("#form-status", form);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const get = function (k) { return (data.get(k) || "").toString().trim(); };

      const subject = "Cabrio — " + get("topic") + " — " + get("car");
      const body = [
        get("name"),
        get("phone"),
        get("email"),
        "",
        get("car"),
        get("topic"),
        "",
        get("message")
      ].join("\n");

      window.location.href = "mailto:cochesbenejuzar@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      if (status && window.CabrioI18N) {
        status.textContent = window.CabrioI18N.t("ct.f.ok");
      }
    });
  }

  /* ======================================================================
     9. AÑO AUTOMÁTICO EN EL FOOTER
     ====================================================================== */
  function initYear() {
    $$("#current-year").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
    // Por si hubiera más de un nodo con la misma intención en la página
    $$(".current-year").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ======================================================================
     10. ARRANQUE
     ====================================================================== */
  function boot() {
    initNav();
    initReveal();
    initParallax();
    initCounters();
    initMechanism();
    initGallery();
    initCookies();
    initForm();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
