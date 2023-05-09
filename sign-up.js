//Check password match
var yourPassword = document.getElementById("password");
var confPassword = document.getElementById("confirm-password");
var submitBtn = document.getElementById("submitBtn");

function checkPassword() {
  if (yourPassword.value === confPassword.value) {
    alert("\nPasswords match. Click OK to continue.");
  } else {
    alert("\nPasswords do not match. Check and try again.");
  }
}
submitBtn.addEventListener("click", checkPassword);

//Signup API
function signup() {
  fetch("https://api.snapme-ng.com/api/v1/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Problem");
        return;
      }

      return response.json();
    })

    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

//Show password on eye button click
var passwordInput = document.getElementById("password");
var confPasswordInput = document.getElementById("confirm-password");
var eyeIcon = document.getElementsByClassName("eyeIcon")[0];
var eyeIcon = document.getElementsByClassName("eyeIcon")[1];

function showPwd() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

//Show confirm password on eye button click
function showConfPwd() {
  if (confPasswordInput.type === "password") {
    confPasswordInput.type = "text";
  } else {
    confPasswordInput.type = "password";
  }
}

//Convert username input to lowercase
var userNameInput = document.getElementById("username");
userNameInput = userNameInput.value.toLowerCase();

//Go back to previous page
function goBack() {
  window.history.back();
}
