//Post date and time
var postDate = moment("20012023, 15:16", "DDMMYYYY, h:mm a");
var postDate = postDate.toLocaleString();
document.getElementById("postDate").innerHTML = postDate;

//Post date and time on mobile
var postDate = moment("20012023, 15:16", "DDMMYYYY, h:mm a");
var postDate = postDate.toLocaleString();
document.getElementById("postDateMobile").innerHTML = postDate;

//Pin details post like
const likeButton = document.querySelector("#like-button");
let isLiked = false;

likeButton.addEventListener("click", () => {
  if (isLiked) {
    likeButton.innerHTML = '<i class="far fa-heart"></i>';
    isLiked = false;
  } else {
    likeButton.innerHTML = '<i class="fas fa-heart"></i>';
    isLiked = true;
  }
});

////
//Pin details Share
// Get the modal
var pinModal = document.getElementById("sharePinModal");

// Get the button that opens the modal
var pinBtn = document.getElementById("sharePinBtn");

// Get the <span> element that closes the modals
var spanNew = document.getElementById("closeZ");

// When the user clicks the button, open the modals
pinBtn.onclick = function () {
  pinModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanNew.onclick = function () {
  pinModal.style.display = "none";
};

// Close the modal by clicking outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    pinModal.style.display = "none";
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
////

//Play video when scrolled into view
//Video 1
const video = document.getElementsByClassName("video")[0];
let isPlaying = false;

window.addEventListener("scroll", () => {
  const videoTop = video.getBoundingClientRect().top;
  const videoBottom = video.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight;

  if (videoTop < viewportHeight && videoBottom >= 0 && !isPlaying) {
    video.play();
    isPlaying = true;
  } else if (videoTop >= viewportHeight || videoBottom < 0) {
    video.pause();
    isPlaying = false;
  }
});

//Video 2
const video2 = document.getElementsByClassName("video")[1];
let isPlaying2 = false;

window.addEventListener("scroll", () => {
  const video2Top = video2.getBoundingClientRect().top;
  const video2Bottom = video2.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight;

  if (video2Top < viewportHeight && video2Bottom >= 0 && !isPlaying2) {
    video2.play();
    isPlaying2 = true;
  } else if (video2Top >= viewportHeight || video2Bottom < 0) {
    video2.pause();
    isPlaying2 = false;
  }
});
//Video played when scrolled into view
////
//Suggested catalogs post like
//Like for suggested 1
const likeButton1 = document.getElementsByClassName("like-button")[0];
let isLiked1 = false;

likeButton1.addEventListener("click", () => {
  if (isLiked1) {
    likeButton1.innerHTML = `<i class="far fa-heart"></i>`;
    likeButton1.style.color = "#fff";
    isLiked1 = false;
  } else {
    likeButton1.innerHTML = `<i class="fas fa-heart"></i>`;
    likeButton1.style.color = "#fff";
    isLiked1 = true;
  }
});

//Like for suggested 2
const likeButton2 = document.getElementsByClassName("like-button")[1];
let isLiked2 = false;

likeButton2.addEventListener("click", () => {
  if (isLiked2) {
    likeButton2.innerHTML = `<i class="far fa-heart"></i>`;
    likeButton2.style.color = "#fff";
    isLiked2 = false;
  } else {
    likeButton2.innerHTML = `<i class="fas fa-heart"></i>`;
    likeButton2.style.color = "#fff";
    isLiked2 = true;
  }
});

//Like for suggested 3
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

//Like for suggested 4
const likeButton4 = document.getElementsByClassName("like-button")[3];
let isLiked4 = false;

likeButton4.addEventListener("click", () => {
  if (isLiked4) {
    likeButton4.innerHTML = '<i class="far fa-heart"></i>';
    likeButton4.style.color = "#fff";
    isLiked4 = false;
  } else {
    likeButton4.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton4.style.color = "#fff";
    isLiked4 = true;
  }
});

//Like post
const likeBtn = document.getElementById("like-button");
//Add fetch API to button
likeBtn.addEventListener("click", likePost);

//Put request to like a post
function likePost() {
  fetch("https://api.snapme-ng.com/api/v1/pins/:id/like", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 456,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Post liked successfully");
    })
    .catch((error) => console.error(error));
}

//Follow catalog popup on mobile
// Music
var followModal = document.getElementById("mobileFollowModal");
var mobileFollowBtn = document.getElementById("followPopup");
var close = document.getElementsByClassName("mobileclose")[0];

mobileFollowBtn.onclick = function () {
  followModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
close.onclick = function () {
  followModal.style.display = "none";
};
////
//Time posted
var timePinned = moment("20230129", "YYYYMMDD").fromNow();
document.getElementById("timePosted").innerHTML = timePinned;

var timePinned = moment("20220210", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[0].innerHTML = timePinned;

var timePinned = moment("20221229", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[1].innerHTML = timePinned;

var timePinned = moment("20230228", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[2].innerHTML = timePinned;

// Shows and concerts
var followMeBtn = document.getElementsByClassName("followPopup")[0];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[0];
var closeMe = document.getElementsByClassName("closeme")[0];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Dance
var followMeBtn = document.getElementsByClassName("followPopup")[1];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[1];
var closeMe = document.getElementsByClassName("closeme")[1];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Afrobeats
var followMeBtn = document.getElementsByClassName("followPopup")[2];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[2];
var closeMe = document.getElementsByClassName("closeme")[2];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Comedy
var followMeBtn = document.getElementsByClassName("followPopup")[3];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[3];
var closeMe = document.getElementsByClassName("closeme")[3];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Tag Stories
var followMeBtn = document.getElementsByClassName("followPopup")[4];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[4];
var closeMe = document.getElementsByClassName("closeme")[4];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Photography
var followMeBtn = document.getElementsByClassName("followPopup")[5];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[5];
var closeMe = document.getElementsByClassName("closeme")[5];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Art
var followMeBtn = document.getElementsByClassName("followPopup")[6];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[6];
var closeMe = document.getElementsByClassName("closeme")[6];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Museums
var followMeBtn = document.getElementsByClassName("followPopup")[7];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[7];
var closeMe = document.getElementsByClassName("closeme")[7];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Tourism
var followMeBtn = document.getElementsByClassName("followPopup")[8];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[8];
var closeMe = document.getElementsByClassName("closeme")[8];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Fashion
var followMeBtn = document.getElementsByClassName("followPopup")[9];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[9];
var closeMe = document.getElementsByClassName("closeme")[9];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Beauty & Kits
var followMeBtn = document.getElementsByClassName("followPopup")[10];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[10];
var closeMe = document.getElementsByClassName("closeme")[10];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Food
var followMeBtn = document.getElementsByClassName("followPopup")[11];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[11];
var closeMe = document.getElementsByClassName("closeme")[11];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Fitness
var followMeBtn = document.getElementsByClassName("followPopup")[12];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[12];
var closeMe = document.getElementsByClassName("closeme")[12];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Football
var followMeBtn = document.getElementsByClassName("followPopup")[13];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[13];
var closeMe = document.getElementsByClassName("closeme")[13];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Basketball
var followMeBtn = document.getElementsByClassName("followPopup")[14];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[14];
var closeMe = document.getElementsByClassName("closeme")[14];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Sports
var followMeBtn = document.getElementsByClassName("followPopup")[15];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[15];
var closeMe = document.getElementsByClassName("closeme")[15];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//News
var followMeBtn = document.getElementsByClassName("followPopup")[16];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[16];
var closeMe = document.getElementsByClassName("closeme")[16];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Fashion TV
var followMeBtn = document.getElementsByClassName("followPopup")[17];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[17];
var closeMe = document.getElementsByClassName("closeme")[17];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Cars
var followMeBtn = document.getElementsByClassName("followPopup")[18];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[18];
var closeMe = document.getElementsByClassName("closeme")[18];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//House Decoration
var followMeBtn = document.getElementsByClassName("followPopup")[19];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[19];
var closeMe = document.getElementsByClassName("closeme")[19];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Nature
var followMeBtn = document.getElementsByClassName("followPopup")[20];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[20];
var closeMe = document.getElementsByClassName("closeme")[20];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Quotes
var followMeBtn = document.getElementsByClassName("followPopup")[21];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[21];
var closeMe = document.getElementsByClassName("closeme")[21];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Pets
var followMeBtn = document.getElementsByClassName("followPopup")[22];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[22];
var closeMe = document.getElementsByClassName("closeme")[22];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};

//Others
var followMeBtn = document.getElementsByClassName("followPopup")[23];
var followMeModal = document.getElementsByClassName("mobileFollowModal")[23];
var closeMe = document.getElementsByClassName("closeme")[23];

followMeBtn.onclick = function () {
  followMeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeMe.onclick = function () {
  followMeModal.style.display = "none";
};
//Follow catalog popup on mobile

// Live popup
var liveModal = document.getElementById("liveModal");
var liveBtn = document.getElementById("liveButton");
var closeLive = document.getElementById("closeLive");

liveBtn.onclick = function () {
  liveModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeLive.onclick = function () {
  liveModal.style.display = "none";
};

// Live popup on mobile
var liveModalMobile = document.getElementById("liveModalMobile");
var mobileLiveBtn = document.getElementById("mobileLiveBtn");
var closeLiveMobile = document.getElementById("closeLiveMobile");

mobileLiveBtn.onclick = function () {
  liveModalMobile.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closeLiveMobile.onclick = function () {
  liveModalMobile.style.display = "none";
};
//Live popup ends
////
// Search catalogs index
const searchToggleBtn = document.getElementById("search-toggle-btn");
const searchContainer = document.getElementById("search-container");
const searchContainerMobile = document.getElementById("search-containerMobile");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");

// Function to fetch search results from server
const fetchSearchResults = async (searchQuery) => {
  const response = await fetch(
    `https://api.snapme-ng.com/api/v1/search?q=${searchQuery}`
  );
  const data = await response.json();
  return data;
};

// Function to display search results
const displaySearchResults = (results) => {
  searchResults.innerHTML = "";

  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result.title;
    searchResults.appendChild(li);
  });
};

// Event listener for search toggle button
searchToggleBtn.addEventListener("click", () => {
  searchContainer.style.display = "block";
  searchToggleBtn.style.display = "none";
  searchInput.focus();
});

// Event listener for search button
searchBtn.addEventListener("click", async () => {
  const searchQuery = searchInput.value;
  const searchResultsData = await fetchSearchResults(searchQuery);
  displaySearchResults(searchResultsData);
});

// Event listener for search input field
searchInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    const searchQuery = searchInput.value;
    const searchResultsData = await fetchSearchResults(searchQuery);
    displaySearchResults(searchResultsData);
  }
});
//Search catalogs index ends
////
// Search catalogs index on mobile
// Search catalogs index
const mobileSearchToggleBtn = document.getElementById("mobileSearchToggleBtn");
const mobileSearchContainer = document.getElementById(
  "mobile-search-container"
);
const mobileSearchInput = document.getElementById("mobile-search-input");
const mobileSearchBtn = document.getElementById("mobile-search-btn");
const mobileSearchResults = document.getElementById("mobile-search-results");

// Function to fetch search results from server
const fetchSearchResultsMobile = async (searchQuery) => {
  const response = await fetch(
    `https://api.snapme-ng.com/api/v1/search?q=${searchQuery}`
  );
  const data = await response.json();
  return data;
};

// Function to display search results
const displaySearchResultsMobile = (mobileresults) => {
  mobileSearchResults.innerHTML = "";

  mobileresults.forEach((mobileresult) => {
    const li = document.createElement("li");
    li.textContent = mobileresult.title;
    mobileSearchResults.appendChild(li);
  });
};

// Event listener for search toggle button
mobileSearchToggleBtn.addEventListener("click", () => {
  mobileSearchContainer.style.display = "block";
  mobileSearchToggleBtn.style.display = "none";
  mobileSearchInput.focus();
});

// Event listener for search button
mobileSearchBtn.addEventListener("click", async () => {
  const mobilesearchQuery = mobileSearchInput.value;
  const searchResultsDataMobile = await fetchSearchResultsMobile(
    mobilesearchQuery
  );
  displaySearchResultsMobile(searchResultsDataMobile);
});

// Event listener for search input field
mobileSearchInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    const mobilesearchQuery = mobileSearchInput.value;
    const searchResultsDataMobile = await fetchSearchResultsMobile(
      mobilesearchQuery
    );
    displaySearchResultsMobile(searchResultsDataMobile);
  }
});
/// Search catalogs index on mobile ends

////
//Show more button
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more-text");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}

//More icons button
function moreIcons() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-icons");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "&#9776;";
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
  var moreIcons2 = document.getElementById("more-iconsII");
  var btnText = document.getElementById("myBtnII");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "&#9776;";
    moreIcons2.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons2.style.display = "inline";
  }
}

//More icons III button
function moreIconsIII() {
  var dots = document.getElementById("dots");
  var moreIcons3 = document.getElementById("more-iconsIII");
  var btnText = document.getElementById("myBtnIII");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "&#9776;";
    moreIcons3.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons3.style.display = "inline";
  }
}

//More icons IV button
function moreIconsIV() {
  var dots = document.getElementById("dots");
  var moreIcons4 = document.getElementById("more-iconsIV");
  var btnText = document.getElementById("myBtnIV");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "&#9776;";
    moreIcons4.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons4.style.display = "inline";
  }
}
////
//Show/Hide footer menu on scroll
var oldScrollpos = window.pageYOffset;
window.onscroll = function () {
  var newScrollPos = window.pageYOffset;
  if (oldScrollpos < newScrollPos) {
    document.querySelector("#mobileFooter").classList.remove("hide");
  } else {
    document.querySelector("#mobileFooter").classList.add("hide");
  }
  oldScrollpos = newScrollPos;
};

////
//Commenter profile
function commenterProfile() {
  fetch("https://api.snapme-ng.com//api/v1/:username")
    .then((response) => response.json())
    .then((data) => {
      // Display the user profile data on the page
      const profileContainer = document.querySelector("#profile-container");
      profileContainer.innerHTML = `
      <h2>${data.name}</h2>
      <p>Email: ${data.email}</p>
      <p>Age: ${data.age}</p>
      <p>Location: ${data.location}</p>
    `;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error fetching user profile:", error);
    });
}
commenterProfile();

//Like comment
function likeComment() {
  fetch("https://api.snapme-ng.com/api/v1/pins/:id/like/:commentId", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: "abc123",
      timestamp: new Date().toISOString(),
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Successfully liked the comment!");
      } else {
        console.log("Failed to like the comment.");
      }
    })
    .catch((error) => console.error("Error:", error));
}

//Reply Comment
function replyComment() {
  fetch("https://api.snapme-ng.com/api/v1/pins/:postId/comment/:id/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer <token>",
    },
    body: JSON.stringify({
      userId: 123,
      postId: 456,
      comment: "This is a great post!",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
replyComment();

//Remove/delete reply
function deleteReply() {
  fetch(
    "https://api.snapme-ng.com//api/v1/pins/:postId/:commentId/delete/:replyId",
    {
      method: "DELETE",
      headers: {
        Authorization: "Bearer <token>",
      },
    }
  )
    .then((response) => console.log("Data deleted successfully"))
    .catch((error) => console.error(error));
}
deleteReply();

//Delete Comment
function deleteComment() {
  fetch("https://api.snapme-ng.com/api/v1/pins/:id/delete/:commentId", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer <token>",
    },
  })
    .then((response) => console.log("Data deleted successfully"))
    .catch((error) => console.error(error));
}
deleteComment();
//Delete comment end
/////
