// CURSOR GLOW
const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// DARK / LIGHT MODE
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light")
      ? "🌙 Dark Mode"
      : "☀️ Light Mode";
});

// COPY EMAIL
document.getElementById("copy-email").onclick = () => {
  navigator.clipboard.writeText("hrithik1413@gmail.com");
};
