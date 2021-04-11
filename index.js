const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-Links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}
const navLists = document.querySelectorAll(".nav-lists");

navLists.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}
