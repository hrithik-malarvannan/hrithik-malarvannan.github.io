document.addEventListener("DOMContentLoaded", () => {

  // ===== THEME TOGGLE WITH MEMORY =====
  const toggleBtn = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    toggleBtn.textContent = "🌞 Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggleBtn.textContent = isLight ? "🌙 Dark Mode" : "🌞 Light Mode";
  });

  // ===== COPY EMAIL =====
  const copyBtn = document.getElementById("copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("hrithik1413@gmail.com");
      copyBtn.textContent = "Copied!";
      setTimeout(() => copyBtn.textContent = "Copy", 1500);
    });
  }

});
