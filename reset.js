const backBtn = document.querySelector(".backArrow");
backBtn.addEventListener("click", goBack);
function goBack() {
  window.history.back();
}

//Show new password
var pwdInput = document.getElementById("new-password");
var showPasswordIcon = document.getElementsByClassName("eyeIcon")[0];
const otpBtn = document.getElementById("otp");
const resetForm = document.getElementById("resetForm");

let api = "https://api.snapme-ng.com/api/v1";

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

let countdown = 0; // Countdown variable to track remaining time
let intervalId; // Interval ID to track the countdown interval

function getOtp() {
  const email = document.getElementById("username").value;

  if (!email) {
    Swal.fire(
      "Warning!",
      `Please enter an existing email address or username!`,
      "error"
    );
    return;
  }

  // Disable the button before sending OTP
  otpBtn.disabled = true;

  fetch(`${api}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => {
      if (response.status === 200) {
        countdown = 90; // Set countdown to 90 seconds (1 min 30 sec)
        startCountdown(); // Start the countdown
        return response.json();
      } else if (response.status === 404) {
        throw new Error(
          `Account with that email or username does not exist, please check it and try again!: ${response.status} ${response.statusText}`
        );
      } else if (response.status === 500) {
        throw new Error(
          `Uh-oh, something happened on our servers, it's not your fault! Please bear with us and try again.`
        );
      }
    })
    .then((data) => {
      console.log(data.message);
      Swal.fire("Success!", `${data.message} at ${data.email}!`, "success");
    })
    .catch((error) => {
      Swal.fire("Error!", `${error}`, "error");
      console.error(error);
    });
}

function startCountdown() {
  // Update the countdown display
  otpBtn.setAttribute("data-countdown", countdown);
  intervalId = setInterval(() => {
    countdown--;
    otpBtn.setAttribute("data-countdown", countdown);
    if (countdown === 0) {
      clearInterval(intervalId);
      otpBtn.disabled = false; // Enable the button after countdown reaches zero
    }
  }, 1000);
}

otpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getOtp();
});

function resetPassword() {
  const token = document.getElementById("code").value;
  const password = document.getElementById("new-password").value;

  if (!token) {
    Swal.fire(
      "Warning!",
      `Please insert the 6-digit OTP that was sent to you mail!`,
      "error"
    );
    return;
  }

  if (!password) {
    Swal.fire(
      "Warning!",
      `Please input your new password, it must not be less than 8 characters!`,
      "error"
    );
    return;
  }

  fetch(`${api}/reset-password/${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  })
    .then((response) => {
      if (response.status === 200) {
        document.cookie =
          "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        return response.json();
      } else if (response.status === 404) {
        throw new Error(
          `Invalid or expired token! Please tap on 'Get OTP' to get a new one!: ${response.status} ${response.statusText}`
        );
      } else if (response.status === 500) {
        throw new Error(
          `Uh-oh, something happened on our servers, it's not your fault! Please bear with us and try again.`
        );
      }
    })
    .then((data) => {
      Swal.fire(
        "Success!",
        `${data.message}! You can login with your new password!`,
        "success"
      );
      window.location.href = "/login.html";
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.error(error);
    });
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  resetPassword();
});

//submitBtn.addEventListener("click", checkPassword);
