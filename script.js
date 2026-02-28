const body = document.body;
const toggle = document.getElementById("themeToggle");

/* Theme toggle */
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.replace("dark","light");
  } else {
    body.classList.replace("light","dark");
  }
  updateSignatureGlow();
});

/* Menu */
const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {
  menuOverlay.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

/* Cursor */
const cursor = document.querySelector(".cursor");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* Partial signature glow */
const signatureText = document.getElementById("signatureText");

function updateSignatureGlow() {

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  const glowColor = body.classList.contains("dark")
    ? "#d9ff00"
    : "#2563eb";

  signatureText.style.backgroundImage = `
    linear-gradient(to right,
      ${glowColor} 0%,
      ${glowColor} ${percent}%,
      ${glowColor}40 ${percent}%,
      ${glowColor}40 100%
    )
  `;
}

window.addEventListener("scroll", updateSignatureGlow);
window.addEventListener("load", updateSignatureGlow);
