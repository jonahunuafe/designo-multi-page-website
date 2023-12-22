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
        error.appendChild(span);
    } 
    else {
       error.innerHTML = "";
    }
}

form.addEventListener("submit", preventSubmit);
email.addEventListener("input", validateEmail);