//Show password on button click
var passwordInput = document.getElementById("password");
var eyeIcon = document.getElementsByClassName("eyeIcon")[0];

function showPwd() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
////
//Go back to previous page

const backBtn = document.querySelector(".backArrow");

backBtn.addEventListener("click", goBack);

function goBack() {
  window.history.back();
}

////
//Snapme login
const url = "https://api.snapme-ng.com/api/v1/login";

function loginSubmit() {
  const identifier = document.getElementById("identifier").value;
  const password = document.getElementById("password").value;
  const returnUrl = localStorage.getItem("returnUrl");

  if (identifier === "" || password === "") {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = "Username and password cannot be empty";
    return;
  }

  const requestBody = {
    identifier,
    password,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw new Error(
          `There are some errors in your login form, check it and try again: ${response.statusText}`
        );
      } else if (response.status === 401) {
        throw new Error(
          `Your password is incorrect, please check it and try again!`
        );
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

const loginForm = document.getElementById("loginForm");

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  loginSubmit();
});
