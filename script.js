document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const copyBtn = document.getElementById("copy-email");

  // Theme memory
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
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("hrithik1413@gmail.com");
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
  });
});
