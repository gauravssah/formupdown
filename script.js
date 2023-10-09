const email = document.querySelector("#email");
const password = document.querySelector("#password");
const Emailtext = document.querySelector(".Emailtext");
const passwordtext = document.querySelector(".passwordtext");
const container = document.querySelector(".container");

email.addEventListener("click", (e) => {
    Emailtext.classList.add("up");
});

password.addEventListener("click", () => {
    passwordtext.classList.add("uppass");
});



