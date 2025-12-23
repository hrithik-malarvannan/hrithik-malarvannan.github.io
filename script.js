const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  toggle.textContent =
    body.classList.contains("light") ? "🌙 Dark Mode" : "☀️ Light Mode";
});

/* COPY EMAIL */
document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText("hrithik1413@gmail.com");
  alert("Email copied!");
});
