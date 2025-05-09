const menuIcon = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('.mobileNav');

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("revealNav");
});
