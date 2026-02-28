/* THEME TOGGLE */

const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.remove("dark");
  body.classList.add("light");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

/* SCROLL REVEAL */

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

/* DYNAMIC CURSOR */

const cursor = document.querySelector(".cursor");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
