document.addEventListener("DOMContentLoaded", function () {
  const printBtn = document.getElementById("printBtn");
  if (printBtn) printBtn.addEventListener("click", () => window.print());

  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email || "";
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          const ta = document.createElement("textarea");
          ta.value = email;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        const prev = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = prev), 1500);
      } catch (e) {
        console.error("Copy failed", e);
      }
    });
  }
  // Sequential reveal animation
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    "main h1, main h2, main h3, main p, main li, main a, .hero-image"
  );
  let i = 0;
  targets.forEach((el) => {
    if (prefersReduced) {
      el.classList.remove("fade-in-up");
      el.style.opacity = 1;
      el.style.transform = "none";
    } else {
      el.style.animationDelay = Math.min(i * 60, 1000) + "ms";
      el.classList.add("fade-in-up");
      i++;
    }
  });
});

// visit www.codehype.in
