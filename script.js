/* Navbar Scroll Effect */

window.addEventListener("scroll", function(){

    let navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

/* Mobile Menu */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.innerHTML =
    navLinks.classList.contains("active")
    ? "✕"
    : "☰";

});