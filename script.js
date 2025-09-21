// Toggle Mobile Nav
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Parallax scroll effect for hero background
window.addEventListener("scroll", function () {
  const hero = document.getElementById("hero");
  let offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});
