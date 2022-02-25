const emailInput = document.querySelector('input[type="email"');

const subscribeButton = document.querySelector(".subscribe-btn");

const newsletterForm = document.querySelector("form");
const emailErrorMessage = document.querySelector(".email-error-msg");
console.log(emailErrorMessage, subscribeButton, emailInput);

const checkEmail = (event) => {
  console.log(event.target);
  event.preventDefault();
  if ((emailInput.value = "")) {
    emailInput.classList.add("error");
    emailErrorMessage.classList.add("show");
  }
};

subscribeButton.addEventListener("click", checkEmail);
