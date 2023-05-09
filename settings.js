var pwdInput = document.getElementById("passwordInput");
var showPassword = document.getElementById("eyeIcon");

function showPwd() {
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
  } else {
    pwdInput.type = "password";
  }
}

//Go to the previous page
function goBack() {
    window.history.back();
  }