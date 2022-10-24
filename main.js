const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__navbar");
const navLink = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}