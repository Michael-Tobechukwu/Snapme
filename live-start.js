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
// document.getElementById("currentDateTime2").innerHTML = currentDate;

api8 = `http://localhost:5000/api/v1`;

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function getJwt() {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  if (!jwtToken) {
    // redirect user to login page if jwtToken doesn't exist
    localStorage.setItem("returnUrl", window.location.href);
    window.location.href = "/login.html";
    return;
  }
  return jwtToken;
}

let currentProfile = localStorage.getItem("username");

window.addEventListener("load", function () {
  fetch(`${api8}/${currentProfile}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        return response.json().then((data) => {
          throw new Error(data.message || "Error: " + response.statusText);
        });
      } else if (response.status === 500) {
        return response.json().then((data) => {
          throw new Error(data.message || "Error: " + response.statusText);
        });
      }
    })
    .then((user) => {
      const displayContent = document.querySelector(".content");

      displayContent.innerHTML = `     
        <img
          src="Images/back arrow.svg"
          class="backArrow"
          width="25px"
          onclick="goBack()"
        />
        <div class="live">
          <div class="main-logo">
            <img
              onclick="window.location='index.html'"
              src="Images/Snapme logo main.png"
              alt=""
            />
          </div>
          <button>LIVE</button>
        </div>
        <!--<div class="live-content"></div>-->
        <p style="color: white; font-weight: 600;">Enter the streaming details below: </p>
        <div class="caption">
          <div class="caption-input">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Live video caption"
              required
            />

            <textarea
              type="text"
              name="description"
              id="description"
              cols=""
              rows="2"
              placeholder="Say something about this live video"
              required
            ></textarea>

            <button id="go-live" onclick="goLive('${user.user.picture}', '${
        user.user.username
      }')">
              Submit
              <img src="Images/send.svg" alt="" />
            </button>
          </div>

          <div class="user">
            <div class="userText">
            <img src="${
              user.user.picture ===
              "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
                ? `Images/user image.svg`
                : user.user.picture
            }" style="border-radius: 50%; border: 2px solid #ba00ba;" width="50px" alt="${
        user.user.username
      } Profile picture" />
              <p>${user.user.username} | <span id="currentDateTime"></span></p>
            </div>
            <div class="userIcon"></div>
          </div>
        </div>
      `;
      document.getElementById("currentDateTime").innerHTML = currentDate;
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.log(error);
    });
});

//Start livestream
function goLive(picture, username) {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  // console.log(username);
  // console.log(picture);

  if (!title || !description) {
    Swal.fire(
      "Warning!",
      `Stream Title or Description cannot be empty`,
      "error"
    );
    return;
  }

  window.location.href = `my-livestream.html?title=${title}&description=${description}&user=${username}&pic=${picture}`;
}

//Go back
function goBack() {
  window.history.back();
}
