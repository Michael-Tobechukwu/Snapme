//Time posted
var timePinned = moment("20230129", "YYYYMMDD").fromNow();
timePinned = document.getElementById("timePosted").innerHTML = timePinned;

var timePinned = moment("20221229", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[0].innerHTML = timePinned;

var timePinned = moment("20230302", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[1].innerHTML = timePinned;
///

///
// Social media share modal
//Share post 1

// Get the modal
var userModal = document.getElementsByClassName("shareUserModal")[0];

// Get the button that opens the modal
var userBtn = document.getElementsByClassName("sharePopupBtn")[0];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("closeX")[0];

// When the user clicks the button, open the modals
userBtn.onclick = function () {
  userModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  userModal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    userModal.style.display = "none";
  }
};

//Share post 2

// Get the modal
var userModal = document.getElementsByClassName("shareUserModal")[1];

// Get the button that opens the modal
var userBtn = document.getElementsByClassName("sharePopupBtn")[1];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("closeX")[1];

// When the user clicks the button, open the modals
userBtn.onclick = function () {
  userModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  userModal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    userModal.style.display = "none";
  }
};

//Share post 3

// Get the modal
var userModal = document.getElementsByClassName("shareUserModal")[2];

// Get the button that opens the modal
var userBtn = document.getElementsByClassName("sharePopupBtn")[2];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("closeX")[2];

// When the user clicks the button, open the modals
userBtn.onclick = function () {
  userModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  userModal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    userModal.style.display = "none";
  }
};
////
//Signedin Users Content
//Check signed in status on page
window.addEventListener("load", () => {
  // Get the JWT token from local storage
  const token = localStorage.getItem("jwtToken");

  if (token) {
    try {
      // Attempt to decode the JWT token to get the user information
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const userId = decodedToken.userId; // Example: extract the user ID from the JWT payload

      // Display the content for signed-in users
      const signedInContent = document.getElementById("signedInContent");
      signedInContent.style.display = "block";
    } catch (err) {
      // If there was an error decoding the token, assume the user is not signed in
      console.error("Error decoding JWT token:", err);

      // Don't display the content for signed-in users
      signedInContent.style.display = "none";
    }
  } else {
    // Don't display the content for signed-in users
    signedInContent.style.display = "none";
  }
});
////
//Like button 1
const likeButton = document.getElementsByClassName("like-button")[0];
let isLiked = false;

likeButton.addEventListener("click", () => {
  if (isLiked) {
    likeButton.innerHTML = '<i class="far fa-heart"></i>';
    likeButton.style.color = "#fff";
    isLiked = false;
  } else {
    likeButton.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton.style.color = "#fff";
    isLiked = true;
  }
});

//Like button 2
const likeButton2 = document.getElementsByClassName("like-button")[1];
let isLiked2 = false;

likeButton2.addEventListener("click", () => {
  if (isLiked2) {
    likeButton2.innerHTML = '<i class="far fa-heart"></i>';
    likeButton2.style.color = "#fff";
    isLiked2 = false;
  } else {
    likeButton2.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton2.style.color = "#fff";
    isLiked2 = true;
  }
});

//Like button 3
const likeButton3 = document.getElementsByClassName("like-button")[2];
let isLiked3 = false;

likeButton3.addEventListener("click", () => {
  if (isLiked3) {
    likeButton3.innerHTML = '<i class="far fa-heart"></i>';
    likeButton3.style.color = "#fff";
    isLiked3 = false;
  } else {
    likeButton3.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton3.style.color = "#fff";
    isLiked3 = true;
  }
});
////
//Log out
var logoutBtn = document.getElementById("logout-button");
logoutBtn.addEventListener("click", logOut);

function logOut() {
  fetch("https://api.snapme-ng.com/api/v1/logout", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/login"; // redirect to login page
      } else {
        throw new Error("Failed to log out user.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Cataloged (my posts) in username
function myPosts() {
  fetch("https://api.snapme-ng.com/api/v1/my-pins")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        console.log(post.title);
        console.log(post.body);
      });
    })
    .catch((error) => console.error(error));
}
myPosts();

//Liked posts
function likedPosts() {
  fetch("https://api.snapme-ng.comapi/v1/pins/liked-pins")
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
likedPosts();

//Saved posts
function savedPosts() {
  fetch("https://api.snapme-ng.comapi/v1/pins/saved-pins")
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
savedPosts();

//Followed posts
function followedPosts() {
  fetch("https://api.snapme-ng.com/v1/users/following/pins")
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
followedPosts();
////
//Follow/unfollow user
function toggleFollow(username, buttonElement) {
  const action = buttonElement.getAttribute("data-action");
  const method = action === "follow" ? "POST" : "DELETE";

  fetch(`https://api.snapme-ng.com/api/v1/${username}/follow`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: action,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        if (action === "follow") {
          buttonElement.innerText = "Unfollow";
          buttonElement.setAttribute("data-action", "unfollow");
        } else {
          buttonElement.innerText = "Follow";
          buttonElement.setAttribute("data-action", "follow");
        }
      } else {
        console.error("Failed to toggle follow status");
      }
    })
    .catch((error) => {
      console.error("Error toggling follow status:", error);
    });
}

////

//Follow/unfollow user toggle button
//let isFollowing = false;

//Follow/unfollow user
let isFollowing = false;

function toggleFollowUser() {
  const followBtn = document.getElementById("followBtn");

  if (isFollowing) {
    // unfollow logic
    followBtn.textContent = "Follow +";
  } else {
    // follow logic
    followBtn.textContent = "Unfollow";
  }

  isFollowing = !isFollowing;
}

//followBtn.addEventListener("click", toggleFollow);

/*Follow user fetch API
var followUser = document.getElementById("follow-toggle");
followUser.addEventListener("click", toggleFollow);

function toggleFollow() {
  fetch("https://api.snapme-ng.com/api/v1/:username/follow", {
    method: "POST",
    body: JSON.stringify({ follow: true }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to follow/unfollow user.");
      }
    })
    .then((data) => {
      if (data.following) {
        document.getElementById("follow-toggle").textContent = "Unfollow";
      } else {
        document.getElementById("follow-toggle").textContent = "Follow";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
toggleFollow();
*/
//////

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
//Get user profile
function thisUser() {
  fetch("https://api.snapme-ng.com/api/v1/:username")
    .then((response) => response.json())
    .then((user) => {
      console.log(user.name);
      console.log(user.email);
      console.log(user.bio);
      console.log(user.avatarUrl);
    })
    .catch((error) => console.error(error));
}
thisUser();
////
//Swipe tabs on mobile
const swipeContainer = document.getElementById("swipe-container");

let touchStartX = 0;
let touchEndX = 0;

swipeContainer.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

swipeContainer.addEventListener("touchmove", (event) => {
  touchEndX = event.touches[0].clientX;
});

swipeContainer.addEventListener("touchend", () => {
  if (touchEndX < touchStartX) {
    swipeContainer.scrollBy({ left: 50, behavior: "smooth" });
  } else if (touchEndX > touchStartX) {
    swipeContainer.scrollBy({ left: -50, behavior: "smooth" });
  }
});
//
