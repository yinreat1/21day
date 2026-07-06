(function () {
  "use strict";

  /* ===== Navbar scroll state ===== */
  const nav = document.getElementById("nav");
  const scrollProgress = document.getElementById("scrollProgress");

  const onScroll = () => {
    if (window.scrollY > 24) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
    if (scrollProgress) {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      scrollProgress.style.width = pct + "%";
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ===== Mobile menu ===== */
  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");

  const setOpen = (open) => {
    toggle.classList.toggle("is-open", open);
    mobile.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    mobile.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    setOpen(!toggle.classList.contains("is-open"));
  });

  mobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  /* ===== Smooth scroll with navbar offset ===== */
  const navHeight = 72;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ===== Reveal on scroll ===== */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            if (parent && (parent.classList.contains("products__grid") || parent.classList.contains("why__grid"))) {
              const siblings = Array.from(parent.children);
              const idx = siblings.indexOf(entry.target);
              entry.target.style.transitionDelay = `${Math.min(idx, 4) * 0.08}s`;
            }
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ===== Active nav link on scroll ===== */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");
  if ("IntersectionObserver" in window && sections.length) {
    const navIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              link.classList.toggle("is-active", href === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => navIo.observe(s));
  }
})();
