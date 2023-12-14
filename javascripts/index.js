const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const nav = document.querySelector(".nav");


function changeMenuToTimes() {
    if(menu.getAttribute("src") === "../assets/shared/mobile/icon-hamburger.svg") {
       menu.setAttribute("src", "../assets/shared/mobile/icon-close.svg");
    } else {
        menu.setAttribute("src", "../assets/shared/mobile/icon-hamburger.svg")
    }
}

function openNav(event) {
    nav.classList.toggle("show");
    event.stopPropagation();
} 

menu.addEventListener("click", openNav);

document.addEventListener("click", function(event) {
    if (!nav.contains(event.target)) {
      nav.classList.remove("show");
      menu.setAttribute("src", "../assets/shared/mobile/icon-hamburger.svg");
    }
});