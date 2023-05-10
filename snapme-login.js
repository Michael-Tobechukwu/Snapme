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

const backBtn = document.querySelector('.backArrow');

backBtn.addEventListener('click', goBack 
)

function goBack() {
  window.history.back();
}

////
//Snapme login
const url = "https://api.snapme-ng.com/api/v1/login";
const usernameInput = document.getElementById("username");
const thisPasswordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = thisPasswordInput.value;
  
  if (username === "" || password === "") {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = "Username and password cannot be empty";
    return;
  }

  const requestBody = {
    username: username,
    password: password
  };
  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
});
