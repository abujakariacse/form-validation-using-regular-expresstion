// Global Variable
const emailField = document.getElementById("email-input");
const emailValidation = document.getElementById("email-validation-msg");
const passwordField = document.getElementById("password-input");
const passwordValidation = document.getElementById("password-validation-msg");
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d@$#!%*?&]{8,32}$/;
// Email Validation
emailField.onkeyup = function () {
  if (emailRegEx.test(emailField.value)) {
    emailValidation.innerText = "Your email is valid";
    emailValidation.style.color = "lime";
    emailField.style.borderColor = "lime";
  } else if (emailField.value === "") {
    emailValidation.innerText = "Enter email address";
    emailValidation.style.color = "#f39c12";
    emailField.style.borderColor = "#f39c12";
  } else {
    emailValidation.innerText = "Your email isn't valid";
    emailValidation.style.color = "#dc3545";
    emailField.style.borderColor = "#dc3545";
  }
};
// Password Validation
passwordField.onkeyup = function () {
  const lowerCase = new RegExp("(?=.*[a-z])");
  const upperCase = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const specialChar = new RegExp("(?=.*[!@#$%^&*])");
  const eightChar = new RegExp("(?=.{8,32})");
  const passReq = document.getElementsByClassName("password-requirements");
  // For Check All requirements
  if (passRegEx.test(passwordField.value)) {
    passwordValidation.innerText = "Your password is valid";
    passwordValidation.style.color = "lime";
    passwordField.style.borderColor = "lime";
  } else if (passwordField.value === "") {
    passwordValidation.innerText = "Enter your password";
    passwordValidation.style.color = "#f39c12";
    passwordField.style.borderColor = "#f39c12";
  } else {
    passwordValidation.innerText = "Your password isn't valid";
    passwordValidation.style.color = "#dc3545";
    passwordField.style.borderColor = "#dc3545";
  }

  //   For Induvisual Check
  if (upperCase.test(passwordField.value)) {
    passReq[0].style.color = "lime";
  } else {
    passReq[0].style.color = "grey";
  }
  if (lowerCase.test(passwordField.value)) {
    passReq[1].style.color = "lime";
  } else {
    passReq[1].style.color = "grey";
  }
  if (specialChar.test(passwordField.value)) {
    passReq[2].style.color = "lime";
  } else {
    passReq[2].style.color = "grey";
  }
  if (number.test(passwordField.value)) {
    passReq[3].style.color = "lime";
  } else {
    passReq[3].style.color = "grey";
  }
  if (eightChar.test(passwordField.value)) {
    passReq[4].style.color = "lime";
  } else {
    passReq[4].style.color = "grey";
  }
  if (passwordField.value.length <= 32) {
    passReq[5].style.color = "lime";
  } else {
    passReq[5].style.color = "grey";
  }
};

document.getElementById("submit").addEventListener("click", function () {
  if (
    emailRegEx.test(emailField.value) &&
    passRegEx.test(passwordField.value)
  ) {
    document.getElementById("login-form").textContent = "";
    document.getElementById("success").style.display = "block";
  } else {
    alert("Please Enter Valid Email & Password");
  }
});
