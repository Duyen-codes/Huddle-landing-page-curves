const emailInput = document.querySelector('input[type="email"');
const subscribeButton = document.querySelector(".subscribe-btn");

const newsletterForm = document.querySelector("form");
const emailErrorMessage = document.querySelector(".email-error-msg");

const validateEmail = (event) => {
  event.preventDefault();
  if (emailInput.value.length == 0) {
    emailInput.classList.add("error");
    emailErrorMessage.classList.add("show");
  }
  return false;
};

subscribeButton.addEventListener("click", validateEmail);
