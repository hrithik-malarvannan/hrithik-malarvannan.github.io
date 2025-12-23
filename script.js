document.addEventListener("DOMContentLoaded", () => {

  // AOS
  AOS.init({ once: false });

  // DARK MODE MEMORY
  const toggleBtn = document.getElementById("theme-toggle");
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

  // COPY EMAIL
  const copyBtn = document.getElementById("copy-email");
  const emailText = document.getElementById("email-text");

  if (copyBtn && emailText) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("hrithik1413@gmail.com").then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = "Copy";
        }, 1500);
      });
    });
  }

});
