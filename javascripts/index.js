const menu = document.querySelector('.fa-bars');
const nav = document.querySelector(".nav");

const changeMenuToTimes = () => {
    if (menu.classList.value === 'fa fa-bars fa-2x') {
        menu.classList.replace('fa-bars', 'fa-times');
    } else if (menu.classList.value === 'fa fa-times fa-2x') {
        menu.classList.replace('fa-times', 'fa-bars');
    }
};

const openNav = (event) => {
    nav.classList.toggle('show');
    event.stopPropagation();
} 

menu.addEventListener('click', changeMenuToTimes);
menu.addEventListener('click', openNav);

document.addEventListener('click', function(event) {
    if (!nav.contains(event.target)) {
        nav.classList.remove('show');
    }
    menu.classList.replace('fa-times', 'fa-bars');
});