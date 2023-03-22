let isFollowing = false;

function toggleFollow() {
  const followBtn = document.getElementById("followBtn");
  const followBtn2 = document.getElementById("followBtn2");

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

/*
//Follow/unfollow this User
const followButton = document.getElementById("followButton");
let isFollowing = false;

followButton.addEventListener("click", () => {
  if (isFollowing) {
    unfollowUser();
  } else {
    followUser();
  }
});

//Follow user
function followUser() {
  fetch("https://api.snapme-ng.com/api/v1/:username/follow", {
    method: "POST",
    body: JSON.stringify({ userId: "123" }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      followButton.innerHTML = "Unfollow";
      followButton.classList.add("Following");
      isFollowing = true;
    })
    .catch((error) => {
      console.error(error);
    });
}

//Unfollow user
function unfollowUser() {
  fetch("https://api.snapme-ng.com/api/v1/:username/unfollow", {
    method: "DELETE",
    body: JSON.stringify({ userId: "123" }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      followButton.innerHTML = "Follow";
      followButton.classList.remove("following");
      isFollowing = false;
    })
    .catch((error) => {
      console.error(error);
    });
}
*/
