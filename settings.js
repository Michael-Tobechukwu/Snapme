var pwdInput = document.getElementById("passwordInput");
var showPassword = document.getElementById("eyeIcon");

function showPwd() {
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
  } else {
    pwdInput.type = "password";
  }
}

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const username = getQueryParam("username");

function updateP(username) {
  window.location.href = `updateProfile.html?username=${username}`;
}

//Go to the previous page
function goBack() {
  window.history.back();
}
