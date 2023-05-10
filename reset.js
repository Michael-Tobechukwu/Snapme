const backBtn = document.querySelector('.backArrow');
backBtn.addEventListener('click', goBack 
)
function goBack() {
  window.history.back();
}

//Show new password
var pwdInput = document.getElementById("new-password");
var showPasswordIcon = document.getElementsByClassName("eyeIcon")[0];

function showPwd() {
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
  } else {
    pwdInput.type = "password";
  }
}

//Show confirm password
var conPwdInput = document.getElementById("confirm-password");
var showConPasswordIcon = document.getElementsByClassName("eyeIconConf")[0];

function showConPwd() {
  if (conPwdInput.type === "password") {
    conPwdInput.type = "text";
  } else {
    conPwdInput.type = "password";
  }
}

//Check Password Match
var newPassword = document.getElementById("new-password");
var confirmPassword = document.getElementById("confirm-password");
var submitBtn = document.getElementById("submitPassword");

function checkPassword() {
  if (newPassword.value === confirmPassword.value) {
    alert("\nPasswords match. Click OK to continue.");
  } else {
    alert("\nPasswords do not match. Please try again.");
  }
}

//submitBtn.addEventListener("click", checkPassword);
