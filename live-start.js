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

//Start livestream
function goLive() {
  fetch("https://api.snapme-ng.com/api/v1/live/start", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "your-stream-title",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Redirect to "my-livestream.html" after API call is successful
      window.location.href = "my-livestream.html";
    })
    .catch((error) => {
      console.error("There was an error:", error);
    });
}

goLive();

//Go back 
function goBack() {
  window.history.back();
}
