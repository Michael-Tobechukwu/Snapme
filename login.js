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

/*
async function login() {
  fetch("https://api.snapme-ng.com/api/v1/login", {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (result.ok) {
    const { data } = await result.json();
    localStorage.setItem("token", data);
  } else {
    console.log("There was an error!", error); // Show an error
  }
}*/
////
//Social login
//Instagram login
function loginInstagram() {
  // Redirect the user to the Instagram authorization page
  const clientId = "1237048957228430";
  const redirectUri = "https://snapme-ng.com/redirect";
  const authorizationUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  window.location.href = authorizationUrl;
}

async function handleRedirect() {
  // Extract the authorization code from the URL
  const code = new URLSearchParams(window.location.search).get("code");

  // Exchange the code for an access token
  const clientId = "1237048957228430";
  const clientSecret = "78d1833580b8440c37874072e2e5d8a5";
  const redirectUri = "https://snapme-ng.com/redirect";
  const tokenUrl = "https://api.instagram.com/oauth/access_token";
  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
    code: code,
  });
  const response = await fetch(tokenUrl, {
    method: "POST",
    body: params,
  });
  const data = await response.json();
  const accessToken = data.access_token;

  // Store the access token securely on the server

  // Use the access token to make requests to the Instagram API
  const profileUrl = `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`;
  const profileResponse = await fetch(profileUrl);
  const profileData = await profileResponse.json();
  const username = profileData.username;
  console.log(`Welcome, ${username}!`);
}

// Call the handleRedirect function when the page is loaded
window.addEventListener("load", handleRedirect);
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
    version: "v16.0",
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

/*{
  status: 'connected',
  authResponse: {
      accessToken: '...',
      expiresIn:'...',
      signedRequest:'...',
      userID:'...'
  }
}*/

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

//Facebook login
/////
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
