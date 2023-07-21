const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordMatch = false;
// Function
function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "Please fill out all the details in the form.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  //   Checking to see whether the passwords are same
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = "green";
    password1El.style.borderColor = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure Password Match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  //   If form is valid and passwords match
  if (isValid && passwordMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.color = "green";
  }
}

// FUnction
function processFormData(e) {
  e.preventDefault();
  //   Validating Form
  validateForm();
  //   Submit data if Valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

// Store Form Data
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.website.value,
  };
  //   Do something with User Data
}

// Event Listener
form.addEventListener("submit", processFormData);
