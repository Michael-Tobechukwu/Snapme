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

function getJwt() {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  if (!jwtToken) {
    // redirect user to login page if jwtToken doesn't exist
    localStorage.setItem("returnUrl", window.location.href);
    window.location.href = "/login.html";
    return;
  }
  return jwtToken;
}

function updateP(username) {
  window.location.href = `updateProfile.html?username=${username}`;
}

function deleteAccount() {
  if (!getJwt()) {
    localStorage.setItem("returnUrl", window.location.href);
    window.location = "/login.html";
  } else {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#bd74bd",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://api.snapme-ng.com/api/v1/account/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getJwt()}`,
          },
        })
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else if (response.status === 401) {
              return response.json().then((data) => {
                throw new Error(
                  data.message ||
                    "Error: " +
                      " " +
                      "Failed to delete account due to an unexpected error, try again later!"
                );
              });
            }
          })
          .then((data) => {
            localStorage.clear();
            document.cookie =
              "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            Swal.fire("Success!", `${data.message}!`, "success").then(() => {
              window.location = "/index.html";
            });
          })
          .catch((error) => {
            Swal.fire("Ooops!", `${error}`, "error");
            console.error("Error following catalog:", error);
          });
      }
    });
  }
}

//Go to the previous page
function goBack() {
  window.history.back();
}
