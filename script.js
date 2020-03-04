let primaryContainer = document.getElementById("primary-container");
let formContainer = document.getElementById("form-container");
let signupContainer = document.getElementById("signup-container");
let signinContainer = document.getElementById("signin-container");
let signinNote = document.getElementById("signin-note");
let signupNote = document.getElementById("signup-note");

function changePosition() {
    primaryContainer.classList.toggle("primary-container-toggle");
    formContainer.classList.toggle("form-container-toggle");
    signupContainer.classList.toggle("signup-container-toggle");
    signinContainer.classList.toggle("signin-container-toggle");
    signinNote.classList.toggle("signin-note-toggle");
    signupNote.classList.toggle("signup-note-toggle");
}