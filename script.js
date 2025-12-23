document.addEventListener("DOMContentLoaded", () => {

  // AOS
  AOS.init({ once: false });

  // Cursor glow (disable on touch)
  const glow = document.getElementById("cursor-glow");
  if (!("ontouchstart" in window)) {
    document.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  } else {
    glow.style.display = "none";
  }

  // Copy email
  const copyBtn = document.getElementById("copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("hrithik1413@gmail.com");
      copyBtn.textContent = "Copied!";
      setTimeout(() => copyBtn.textContent = "Copy", 1500);
    });
  }
});
