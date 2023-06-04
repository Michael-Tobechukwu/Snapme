//Check password match
var yourPassword = document.getElementById("password");
var confPassword = document.getElementById("confirm-password");
var submitBtn = document.getElementById("submitBtn");

let api = "https://api.snapme-ng.com/api/v1";

function checkPassword() {
  if (yourPassword.value === confPassword.value) {
    alert("\nPasswords match. Click OK to continue.");
  } else {
    alert("\nPasswords do not match. Check and try again.");
  }
}
submitBtn.addEventListener("click", checkPassword);

let returnUrl = localStorage.getItem("returnUrl");

//Signup API
function signup() {
  const username = document.getElementById("username").value;
  const fullname = document.getElementById("fullname").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const dob = document.getElementById("dob").value;
  const occupation = document.getElementById("occupation").value;
  const country = document.getElementById("countryList").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const payload = {
    username,
    fullname,
    gender,
    dob,
    occupation,
    country,
    email,
    password,
    confirmPassword,
  };
  fetch(`${api}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw new Error(
          `There are some errors in your signup form, check it and try again: ${response.statusText}`
        );
      } else if (response.status === 401) {
        throw new Error(`${response.statusText}`);
      }
    })
    .then((data) => {
      document.cookie = `jwtToken=${data.token}; max-age=${data.expires}; path=/;`;
      localStorage.setItem("username", data.username);
      if (returnUrl) {
        localStorage.removeItem("returnUrl");
        window.location.href = returnUrl;
      } else {
        // Redirect the user to the default page after login
        window.location.href = "/timeline.html";
      }
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.error(error);
    });
}

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    signup();
  });

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
