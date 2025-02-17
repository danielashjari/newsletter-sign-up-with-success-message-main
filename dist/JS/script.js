const form = document.getElementById('form');
const email = document.getElementById('email');
const signUpHolder = document.querySelector('.sign-up');
const messageHolder = document.querySelector('.message');
const errorMessage = document.getElementById('error-message');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
});

function formValidation() {
    const emailValue = email.value.trim();
    if (emailValue === 0 || !isValidEmail(emailValue)) {
        email.style.backgroundColor = "rgba(255, 98, 87, 0.17)";
        errorMessage.innerText = "Email address is required";
        //
    } else {
        errorMessage.innerHTML = ' ';

        //gotta add lines to change the display attribute but before that gotta fix style n html
        messageHolder.classList.toggle('hidden');
        messageHolder.classList.toggle('flex');
        signUpHolder.classList.toggle('flex');
        signUpHolder.classList.toggle('hidden');
    }
}

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
