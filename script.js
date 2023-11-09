const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_container = document.querySelector(".nav-container");


const toggleNavbar = () => {
    nav_container.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => toggleNavbar());