const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");
const test = false;

function changeMenuToTimes() {
  if (menu.getAttribute('src') === "../assets/shared/mobile/icon-hamburger.svg") {
        menu.setAttribute('src', "../assets/shared/mobile/icon-close.svg");
    }
    else {
        setAttribute('src', "../assets/shared/mobile/icon-hamburger.svg");
    }  
}

function openNav(event) {
    nav.classList.toggle("show");
    menu.setAttribute('src', "../assets/shared/mobile/icon-close.svg");
    event.stopPropagation();
} 

menu.addEventListener("click", changeMenuToTimes)
menu.addEventListener("click", openNav);
//close.addEventListener("click", changeTimesToMenu);

document.addEventListener("click", function(event) {
    if (!nav.contains(event.target)) {
      nav.classList.remove("show");
      menu.setAttribute("src", "../assets/shared/mobile/icon-hamburger.svg");
    }
});



// if (menu.getAttribute('src') === "/starter-code/assets/shared/mobile/icon-hamburger.svg") {
//     menu.setAttribute('src', "/starter-code/assets/shared/mobile/icon-close.svg");
// }
//   else {
//     menu.setAttribute('src', "/starter-code/assets/shared/mobile/icon-hamburger.svg");
// }