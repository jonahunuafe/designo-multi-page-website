const form = document.querySelector(".form");
const email = document.querySelector("#email");
const error = document.querySelector(".error")

function preventSubmit(event) {
    event.preventDefault();
}

function validateEmail() {
    if (email.value === "") {
        const span = document.createElement("span");
        span.textContent = "Can't be empty";
        const img = document.createElement("img");
        img.src = "../assets/contact/desktop/icon-error.svg";
        //let imageSrc = e.target.src.replace(window.location.href, '/starter-code/assets/shared/mobile/icon-hamburger.svg');
        error.appendChild(span);
        error.appendChild(img);
    } 
    else {
       error.innerHTML = "";
    }
}

form.addEventListener("submit", preventSubmit);
email.addEventListener("input", validateEmail);