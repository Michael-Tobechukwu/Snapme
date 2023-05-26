//Time posted
// var timePinned = moment("20230129", "YYYYMMDD").fromNow();
// timePinned = document.getElementById("timePosted").innerHTML = timePinned;

// var timePinned = moment("20221229", "YYYYMMDD").fromNow();
// document.getElementsByClassName("timePosted")[0].innerHTML = timePinned;

// var timePinned = moment("20230302", "YYYYMMDD").fromNow();
// document.getElementsByClassName("timePosted")[1].innerHTML = timePinned;
///

///
// Social media share modal
//Share post 1

// Get the modal
// var userModal = document.getElementsByClassName("shareUserModal")[0];

// // Get the button that opens the modal
// var userBtn = document.getElementsByClassName("sharePopupBtn")[0];

// // Get the <span> element that closes the modals
// var span = document.getElementsByClassName("closeX")[0];

// // When the user clicks the button, open the modals
// userBtn.onclick = function () {
//   userModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   userModal.style.display = "none";
// };

// // Close the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     userModal.style.display = "none";
//   }
// };

// //Share post 2

// // Get the modal
// var userModal = document.getElementsByClassName("shareUserModal")[1];

// // Get the button that opens the modal
// var userBtn = document.getElementsByClassName("sharePopupBtn")[1];

// // Get the <span> element that closes the modals
// var span = document.getElementsByClassName("closeX")[1];

// // When the user clicks the button, open the modals
// userBtn.onclick = function () {
//   userModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   userModal.style.display = "none";
// };

// // Close the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     userModal.style.display = "none";
//   }
// };

// //Share post 3

// // Get the modal
// var userModal = document.getElementsByClassName("shareUserModal")[2];

// // Get the button that opens the modal
// var userBtn = document.getElementsByClassName("sharePopupBtn")[2];

// // Get the <span> element that closes the modals
// var span = document.getElementsByClassName("closeX")[2];

// // When the user clicks the button, open the modals
// userBtn.onclick = function () {
//   userModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   userModal.style.display = "none";
// };

// // Close the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     userModal.style.display = "none";
//   }
// };
// ////
// //Comment Popup
// const commentBtn = document.getElementById("commentBtn");
// const commentBox = document.getElementById("commentBox");
// const closeComment = document.getElementById("closeComment");

// commentBtn.addEventListener("click", function () {
//   commentBox.style.display = "block";
// });

// closeComment.addEventListener("click", function () {
//   commentBox.style.display = "none";
// });
// //Comment box popup first pin end
// ////
// //Comment box popup for second pin
// var commentBtn2 = document.getElementsByClassName("commentBtn")[0];
// var commentBox2 = document.getElementsByClassName("commentBox")[0];
// var closeCommentBtn2 = document.getElementsByClassName("closeComment")[0];

// commentBtn2.addEventListener("click", function () {
//   commentBox2.style.display = "block";
// });

// closeCommentBtn2.addEventListener("click", function () {
//   commentBox2.style.display = "none";
// });
// //Comment box popup for second pin end
// ////
// ////
// //Comment box popup for third pin
// var commentBtn3 = document.getElementsByClassName("commentBtn")[1];
// var commentBox3 = document.getElementsByClassName("commentBox")[1];
// var closeCommentBtn3 = document.getElementsByClassName("closeComment")[1];

// commentBtn3.addEventListener("click", function () {
//   commentBox3.style.display = "block";
// });

// closeCommentBtn3.addEventListener("click", function () {
//   commentBox3.style.display = "none";
// });
// //Comment box popup for third pin end
// //Signedin Users Content
// //Check signed in status on page
// // Get the button element
// const accountSettingsBtn = document.getElementById("accountSettings");

// // Add an event listener to the button
// accountSettingsBtn.addEventListener("click", () => {
//   // Get the JWT token from local storage
//   const token = localStorage.getItem("jwtToken");

//   // Check if the user is logged in
//   if (token) {
//     try {
//       // Attempt to decode the JWT token to get the user information
//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       const userId = decodedToken.userId; // Example: extract the user ID from the JWT payload

//       // Redirect the user to the create pin page
//       window.location.href = "settings.html";
//     } catch (err) {
//       // If there was an error decoding the token, assume the user is not logged in
//       console.error("Error decoding JWT token:", err);

//       // Redirect the user to the login page
//       window.location.href = "login.html";
//     }
//   } else {
//     // Redirect the user to the login page
//     window.location.href = "login.html";
//   }
// });

// //Check signed in status of user on create button clicked - mobile

// ////
// //Like button 1
// const likeButton = document.getElementsByClassName("like-button")[0];
// let isLiked = false;

// likeButton.addEventListener("click", () => {
//   if (isLiked) {
//     likeButton.innerHTML = '<i class="far fa-heart"></i>';
//     likeButton.style.color = "#fff";
//     isLiked = false;
//   } else {
//     likeButton.innerHTML = '<i class="fas fa-heart"></i>';
//     likeButton.style.color = "#fff";
//     isLiked = true;
//   }
// });

// //Like button 2
// const likeButton2 = document.getElementsByClassName("like-button")[1];
// let isLiked2 = false;

// likeButton2.addEventListener("click", () => {
//   if (isLiked2) {
//     likeButton2.innerHTML = '<i class="far fa-heart"></i>';
//     likeButton2.style.color = "#fff";
//     isLiked2 = false;
//   } else {
//     likeButton2.innerHTML = '<i class="fas fa-heart"></i>';
//     likeButton2.style.color = "#fff";
//     isLiked2 = true;
//   }
// });

// //Like button 3
// const likeButton3 = document.getElementsByClassName("like-button")[2];
// let isLiked3 = false;

// likeButton3.addEventListener("click", () => {
//   if (isLiked3) {
//     likeButton3.innerHTML = '<i class="far fa-heart"></i>';
//     likeButton3.style.color = "#fff";
//     isLiked3 = false;
//   } else {
//     likeButton3.innerHTML = '<i class="fas fa-heart"></i>';
//     likeButton3.style.color = "#fff";
//     isLiked3 = true;
//   }
// });

const api6 = `http://localhost:5000/api/v1`;

function getJwt() {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  if (!jwtToken) {
    // redirect user to login page if jwtToken doesn't exist
    localStorage.setItem("returnUrl", window.location.href);
    return undefined;
  }
  return jwtToken;
}

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const username = getQueryParam("username");

const token = getJwt();

////
//Get user profile
window.addEventListener("load", function () {
  if (!username) {
    Swal.fire("Ooops!", `Search Query does not contain username!`, "error");
    window.location.href = "index.html";
    return;
  }
  console.log(username);
  // Make an HTTP request to the timeline API endpoint
  fetch(`${api6}/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getJwt() ? `Bearer ${getJwt()}` : undefined,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error(`${response.message}`);
      } else if (response.status === 500) {
        throw new Error(
          `An error occurred from our side, please try again later!`
        );
      }
    })
    .then((user) => {
      console.log(user);

      const userElement = document.getElementById("mainContent");

      userElement.innerHTML = `
      <div id="profile-card">
      <div class="top">
        <div class="backArrow" onclick="goBack()">
          <i class="fa-solid fa-arrow-left-long"></i>
        </div>

        <div class="logout">
          <button onclick="logOut()" id="logOut">
            <i class="fa-solid fa-power-off"></i>
          </button>
        </div>
      </div>
      <div class="banner">
        <img src="Images/cover photo.jpg" alt="" />
      </div>
      <div class="mainUserDetails">
        <div class="userInfo">
          <img src="${user.user.picture}" class="profilePic" />
          <div class="userInfoInner">
            <div class="userNameBadge">
              <h3 id="userID">${user.user.username}</h3>
              ${
                user.user.role === "subscribed"
                  ? ' <img id="subscribed-badge" src="Images/verified.svg" alt="verified badge"/>'
                  : ""
              }
            </div>
            <p>${user.user.name}</p>
          </div>
        </div>

         <div class="userButtons">
         ${
           user.user.username !== user?.currentUser
             ? `<button
              id="followUserBtn"
              class="follow"
              onclick="followThisUser(${user.user.username})"
            >
              Follow +
            </button>`
             : ""
         }
  
            <button id="accountSettings" class="editButton" style="${
              user.user.username === user.currentUser
                ? `display: block`
                : `display: none`
            }">
              Account Settings
            </button>
          </div>
          
      </div>

      <ul class="user-List">
        <li>${user.user?.occupation}</li>
        <li>${user.user?.country}</li>
        <li>Followers: ${user.user.followers.length}</li>
        <li>Following: ${user.user.following.length}</li>
      </ul>

      <div class="userTabs" id="">
        <button id="CataloguedBtn" onclick="myPosts()">Cataloged</button>
        <button onclick="likedPosts()">Liked</button>
        <button onclick="savedPosts()">Saved</button>
        <button onclick="followedPosts()">Followed</button>
      </div>

      <div id="mobileUserTabs">
        <div id="swipe-container">
          <div class="swipe-item">
            <button onclick="myPosts()" id="CataloguedBtn">
              Cataloged
            </button>
          </div>

          <div class="swipe-item">
            <button onclick="likedPosts()" class="">Liked</button>
          </div>

          <div class="swipe-item">
            <button onclick="savedPosts()" class="">Saved</button>
          </div>

          <div class="swipe-item">
            <button onclick="followedPosts()" class="">Followed</button>
          </div>
        </div>
      </div>
    </div>
      `;
      console.log(userElement);
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.log(error);
    });
});

////
//Log out
// var logoutBtn = document.getElementById("logout-button");
// logoutBtn.addEventListener("click", logOut);

function logOut() {
  document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "login.html";
}
////
// Cataloged (my posts) in username
function myPosts() {
  fetch("http://localhost:5000/api/v1/my-pins")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        console.log(post.title);
        console.log(post.body);
      });
    })
    .catch((error) => console.error(error));
}

//Liked posts
function likedPosts() {
  fetch("http://localhost:5000api/v1/pins/liked-pins")
    .then((response) => response.json())
    .then((data) => {
      // Loop through the liked posts and add them to the page
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerText = post.title;
        document.body.appendChild(postElement);
      });
    })
    .catch((error) => console.error(error));
}

//Saved posts
function savedPosts() {
  fetch("http://localhost:5000api/v1/pins/saved-pins")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Loop through the saved posts and add them to the page
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerText = post.title;
        document.body.appendChild(postElement);
      });
    })
    .catch((error) => console.error(error));
}

//Followed posts
function followedPosts() {
  fetch("http://localhost:5000/v1/users/following/pins")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Loop through the followed posts and add them to the page
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerText = post.title;
        document.body.appendChild(postElement);
      });
    })
    .catch((error) => console.error(error));
}

////
//Follow/unfollow user request to server
// const username = document.getElementById("userID");
// const buttonElement = document.getElementById("followUserBtn");

// function followThisUser(username, buttonElement) {
//   const currentFollowStatus = buttonElement.innerText;

//   fetch(`http://localhost:5000/api/v1/${username}/follow`, {
//     method: currentFollowStatus === "Follow +" ? "POST" : "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.success) {
//         if (currentFollowStatus === "Follow +") {
//           buttonElement.innerText = "Following";
//         } else {
//           buttonElement.innerText = "Follow +";
//         }
//       } else {
//         console.error("Failed to toggle follow status");
//       }
//     })
//     .catch((error) => {
//       console.error("Error toggling follow status:", error);
//     });
// }

// buttonElement.addEventListener("click", () => {
//   followThisUser(username, buttonElement);
// });
//////----------

//More icons button
function moreIcons() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-icons");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons.style.display = "inline";
  }
}

//More icons II button
function moreIconsII() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsII");
  var btnText = document.getElementById("myBtnII");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons.style.display = "inline";
  }
}

//More icons III button
function moreIconsIII() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsIII");
  var btnText = document.getElementById("myBtnIII");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons.style.display = "inline";
  }
}
//More icons IV button
function moreIconsIV() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsIV");
  var btnText = document.getElementById("myBtnIV");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons.style.display = "inline";
  }
}

//More icons V button
function moreIconsV() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsV");
  var btnText = document.getElementById("myBtnV");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons.style.display = "inline";
  }
}

//More icons VI button
function moreIconsVI() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsVI");
  var btnText = document.getElementById("myBtnVI");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons.style.display = "inline";
  }
}

////
//Swipe tabs on mobile
// const swipeContainer = document.getElementById("swipe-container");

// let touchStartX = 0;
// let touchEndX = 0;

// swipeContainer.addEventListener("touchstart", (event) => {
//   touchStartX = event.touches[0].clientX;
// });

// swipeContainer.addEventListener("touchmove", (event) => {
//   touchEndX = event.touches[0].clientX;
// });

// swipeContainer.addEventListener("touchend", () => {
//   if (touchEndX < touchStartX) {
//     swipeContainer.scrollBy({ left: 50, behavior: "smooth" });
//   } else if (touchEndX > touchStartX) {
//     swipeContainer.scrollBy({ left: -50, behavior: "smooth" });
//   }
// });
//
/////

//Go back to previous page
function goBack() {
  window.history.back();
}
