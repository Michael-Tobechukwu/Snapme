//Google sign in
function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "821458730737-usn923od1v0rvv5mo790ebupq67u7ne1.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("googleBtn"),
    { theme: "outline", size: "large" } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};

////
//Snapme Login
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://api.snapme-ng.com/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      //   document.cookie = `jwt=${token}; HttpOnly; Secure`;
      document.cookie = `jwt=${token}`;
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while logging in. Please try again.");
  }
});

// Check for token in query parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const token = urlParams.get("token");
// Remove token from query parameter
if (window.location.search.includes("token")) {
  document.cookie = `jwt=${token}; HttpOnly; Secure`;
  window.history.replaceState({}, document.title, "/");
}

// Function to get JWT token from cookies
function getJwtToken() {
  const jwtCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("jwt="));
  if (!jwtCookie) {
    return null;
  }
  const jwtToken = jwtCookie.split("=")[1];
  return jwtToken;
}

// Function to make authenticated API requests
async function makeApiRequest(url, method = "GET", data = null) {
  const jwtToken = getJwtToken();
  if (!jwtToken) {
    throw new Error("User is not authenticated.");
  }

  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: data ? JSON.stringify(data) : null,
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error(
        `Request failed with status ${response.status}: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

////
//Google sign in
function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "821458730737-usn923od1v0rvv5mo790ebupq67u7ne1.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("googleBtn"),
    { theme: "outline", size: "large" } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};
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
window.fbAsyncInit = function () {
  FB.init({
    appId: "3430331423885973",
    cookie: true,
    xfbml: true,
    version: "v1.0",
  });

  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

const facebookBtn = document.getElementById("fb-login-button");

//Check facebook login status
FB.getLoginStatus(function (response) {
  statusChangeCallback(response);
});

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}
//Facebook login
/////
//Go back to previous page
function goBack() {
  window.history.back();
}
