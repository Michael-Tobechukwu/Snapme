//End livestream
document.getElementById("endStreamBtn").addEventListener("click", endLive);

function endLive() {
  fetch("https://api.snapme-ng.com/api/v1/live/end", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      livestream_id: 1234,
      end_time: new Date().toISOString(),
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Livestream ended successfully");
      } else {
        console.error(
          "Error ending livestream:",
          response.status,
          response.statusText
        );
      }
    })
    .catch((error) => {
      console.error("Error ending livestream:", error);
    });
}
endLive();
//End livestream

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
