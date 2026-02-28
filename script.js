/* THEME PERSISTENCE */

const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.replace("dark", "light");
  toggle.textContent = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  const isLight = body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  toggle.textContent = isLight ? "☀️ Light Mode" : "🌙 Dark Mode";
});

/* COPY EMAIL */

const copyBtn = document.getElementById("copyBtn");
const emailText = document.getElementById("email");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(emailText.textContent);

  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1500);
});

/* SCROLL REVEAL */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});

/* ACTIVE NAV */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* TYPING EFFECT */

const heroSubtitle = document.querySelector(".hero h2");
const text = "ECE Student at VIT Vellore | Aspiring Electronics Engineer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    heroSubtitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

heroSubtitle.textContent = "";
typeEffect();
