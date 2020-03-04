var primaryContainer = document.getElementById("primary-container");
var formContainer = document.getElementById("form-container");
var signupContainer = document.getElementById("signup-container");
var signinContainer = document.getElementById("signin-container");
var signinNote = document.getElementById("signin-note");
var signupNote = document.getElementById("signup-note");

function changePosition() {
    primaryContainer.classList.toggle("primary-container-toggle");
    formContainer.classList.toggle("form-container-toggle");
    signupContainer.classList.toggle("signup-container-toggle");
    signinContainer.classList.toggle("signin-container-toggle");
    signinNote.classList.toggle("signin-note-toggle");
    signupNote.classList.toggle("signup-note-toggle");
}