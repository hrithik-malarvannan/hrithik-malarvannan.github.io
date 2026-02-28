/* Theme Toggle */

const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.replace("dark","light");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.replace("dark","light");
    localStorage.setItem("theme","light");
  } else {
    body.classList.replace("light","dark");
    localStorage.setItem("theme","dark");
  }
});

/* Scroll Reveal */

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

/* Menu Toggle */

const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {
  menuOverlay.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

document.querySelectorAll(".menu-overlay a").forEach(link => {
  link.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    menuBtn.classList.remove("active");
  });
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
