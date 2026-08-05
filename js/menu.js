const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});