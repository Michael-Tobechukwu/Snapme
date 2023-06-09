//For testing on vercel and local server
//Google sign in
// function handleCredentialResponse(response) {
//   console.log("Encoded JWT ID token: " + response.credential);
// }
// window.onload = function () {
//   google.accounts.id.initialize({
//     client_id:
//       "406252614079-4f1go3bfek412mh0935cd0lujr96jnes.apps.googleusercontent.com",
//     callback: handleCredentialResponse,
//   });
//   google.accounts.id.renderButton(
//     document.getElementById("googleBtn"),
//     { theme: "outline", size: "large" } // customization attributes
//   );
//   google.accounts.id.prompt(); // also display the One Tap dialog
// };

////
//Snapme Login
// const form = document.querySelector("form");

// const loadingIndicator = document.createElement("div");
// loadingIndicator.classList.add("loading-indicator");

// const message = document.createElement("div");
// message.classList.add("message");

// async function snapmeLogin(event) {
//   event.preventDefault();
//   loadingIndicator.style.display = "block";

//   const email = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Validate email address
//   if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
//     alert("Invalid email address");
//     return;
//   }

//   // Validate password
//   if (password.length < 8) {
//     alert("Password must be at least 8 characters long");
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:5000/api/v1/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       const token = data.token;
//       document.cookie = `jwt=${token}; HttpOnly; Secure`;
//       window.location.href = "index.html";
//       message.textContent = "Login successful";
//     } else {
//       alert("Invalid email or password");
//       message.textContent = "Login failed";
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("An error occurred while logging in. Please try again.");
//   } finally {
//     loadingIndicator.style.display = "none";
//   }
// }

// form.addEventListener("submit", snapmeLogin);

////

/*/Facebook sign in
window.fbAsyncInit = function () {
  FB.init({
    appId: "{your-app-id}",
    cookie: true,
    xfbml: true,
    version: "{api-version}",
  });

  FB.AppEvents.logPageView();
};

(function (d, s, id) {
    fjs = d.getElementsByTagName(s)[0];
  var js,
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
*/ ////

///Facebook signin for testing
// window.fbAsyncInit = function () {
//   FB.init({
//     appId: "3430331423885973",
//     cookie: true,
//     xfbml: true,
//     version: "v1.0",
//   });

//   FB.AppEvents.logPageView();
// };

// (function (d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");

// const facebookBtn = document.getElementById("fb-login-button");

// //Check facebook login status
// FB.getLoginStatus(function (response) {
//   statusChangeCallback(response);
// });

// function checkLoginState() {
//   FB.getLoginStatus(function (response) {
//     statusChangeCallback(response);
//   });
// }
//Facebook login
/////
//Go back to previous page
function goBack() {
  window.history.back();
}
