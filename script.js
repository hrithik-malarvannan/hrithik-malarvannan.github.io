AOS.init({ once: false });

const toggle = document.getElementById("theme-toggle");
const body = document.body;

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
  toggle.textContent = "🌙 Dark Mode";
} else {
  toggle.textContent = "☀️ Light Mode";
}

/* Toggle */
toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  toggle.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
});

/* Copy email */
document.getElementById("copy-email").onclick = () => {
  navigator.clipboard.writeText("hrithik1413@gmail.com");
};

/* Cursor glow */
const glow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
