const form = document.querySelector(".form");
const email = document.querySelector("#email");
const error = document.querySelector(".error");

function preventSubmit(event) {
    event.preventDefault();
}

function validateEmail() {
    if (email.value === "") {
        const span = document.createElement("span");
        span.textContent = "Can't be empty";
        const image = document.createElement("img");
        image.setAttribute("src", "/starter-code/assets/contact/desktop/icon-error.svg");
        error.appendChild(span);
        error.appendChild(image);
    } 
    else {
       error.innerHTML = "";
    }
}

form.addEventListener("submit", preventSubmit);
email.addEventListener("input", validateEmail);