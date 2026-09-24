// Menu untuk tampilan mobile
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});


// Tombol Lihat Project
const projectButton = document.getElementById("projectButton");

projectButton.addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView();
});