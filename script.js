document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // DARK MODE MEMORY
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  // 🔥 AOS — ANIMATE EVERY TIME YOU SCROLL
  AOS.init({
    once: false,          // ← KEY CHANGE
    duration: 900,
    easing: "ease-in-out",
    offset: 120
  });
});
