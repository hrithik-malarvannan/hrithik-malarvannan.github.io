document.addEventListener("DOMContentLoaded", () => {

  // AOS
  if (window.AOS) {
    AOS.init({ once: false });
  }

  // Dark mode memory
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");

  if (saved === "light") {
    document.body.classList.add("light");
    toggle.textContent = "🌙 Dark Mode";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggle.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
  });

  // Copy email
  const copyBtn = document.getElementById("copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("hrithik1413@gmail.com");
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    });
  }

  // Cursor gradient glow
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

});
