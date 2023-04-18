//Follow/unfollow user
let isFollowing = false;

function toggleFollow() {
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

function toggleFollow2() {
  const followBtn2 = document.getElementById("followBtn2");

  if (isFollowing) {
    // unfollow logic
    followBtn2.textContent = "Follow +";
  } else {
    // follow logic
    followBtn2.textContent = "Unfollow";
  }

  isFollowing = !isFollowing;
}
//Follow fetch
////
// Current date and time of livestream
var monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const date = new Date();
let dayName = dayNames[date.getDay()];
let day = date.getDate();
let month = monthNames[date.getMonth()];
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;

let currentDate =
  dayName +
  ", " +
  " " +
  day +
  " " +
  month +
  " " +
  year +
  " " +
  hour +
  ":" +
  minutes;
document.getElementById("currentDateTime").innerHTML = currentDate;

document.getElementById("currentDateTime2").innerHTML = currentDate;

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

//Comment on livestream
function postLivestreamComment(commentText, authToken) {
  const endpointUrl = "https://api.example.com/livestreams/comments";

  // Retrieve the livestream ID from the server
  fetch("https://api.example.com/livestreams/generateId", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((livestream) => {
      // Use the retrieved livestream ID to create a new comment
      const commentData = {
        text: commentText,
        livestreamId: livestream.id,
        authToken: authToken,
      };

      // Make the POST request to create a new comment
      return fetch(endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + commentData.authToken,
        },
        body: JSON.stringify({
          text: commentData.text,
          livestream_id: commentData.livestreamId,
        }),
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((comment) => {
      // Add the new comment to the UI
      const commentList = document.querySelector("#comment-list");
      const commentItem = document.createElement("li");
      commentItem.textContent = comment.text;
      commentList.appendChild(commentItem);
    })
    .catch((error) => {
      console.error("Error creating comment:", error);
    });
}
const postCommentButton = document.querySelector(".post-comment-btn");
postCommentButton.addEventListener("click", function () {
  const commentInput = document.querySelector("#comment-input");
  const commentText = commentInput.value;
  const authToken = "my-auth-token";
  postLivestreamComment(commentText, authToken);
});
