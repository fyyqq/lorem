

const menuIcon = document.getElementsByClassName("menu")[0];
const closeIcon = document.getElementsByClassName("close")[0];
const navbar = document.getElementsByClassName("navbar-container")[0];

menuIcon.addEventListener("click", () => {
    navbar.style.top = 85 + "px";
    navbar.style.transition = "top .3s";
    menuIcon.style.display = 'none';

    if (menuIcon.style.display === "none") {
        closeIcon.style.display = "block";
    }
});

closeIcon.addEventListener("click", () => {
    navbar.style.top = "";
    closeIcon.style.display = "none";
    if (closeIcon.style.display = "none") {
        menuIcon.style.display = "block";
    }
});