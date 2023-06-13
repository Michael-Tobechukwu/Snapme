const { listDevices, initLiveStream, getStream } = cloudinaryJsStreaming;

const CLOUD_NAME = "ddbtxfsfk";
const UPLOAD_PRESET = "streaming";

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

let title = getQueryParam("title");
let description = getQueryParam("description");
let username = getQueryParam("user");
let picture = getQueryParam("pic");

window.addEventListener("load", function () {
  if (!title && !description && !username && !picture) {
    Swal.fire(
      "Warning!",
      "Stream title and description are required!",
      "error"
    ).then(() => {
      window.location.href = "live-start.html";
    });
  }

  if (!getJwt) {
    Swal.fire("Warning!", "You need to login first!", "error").then(() => {
      window.location.href = "login.html";
    });
  }

  const liveContent = document.querySelector(".wrapper");

  liveContent.innerHTML = `
    <div id="liveBox">
      <img src="Images/back arrow.svg" width="25px" class="backArrow" />
      <div class="liveButton">
        <img
          src="Images/white logo.png"
          alt="Snapme logo"
          onclick="window.location='index.html'"
        />
        <div style="display: inline-flex; gap: 10px;">
          <button>LIVE</button>
          <div class="camera-switch">
            <button id="switchCameraBtn" onclick="switchCamera()">
              <i class="fa-solid fa-camera-rotate"></i>
            </button>
          </div>
        </div>
      </div>
      <video class="video" id="video" ></video>
      <div class="liveInfo">
        <p id="liveTitle" style="font-size: 25px; text-transform: capitalize;">${title}</p>
        <p id="liveDescription">${description}</p>
        <div class="liveDetails">
          <div class="liveDetailsInner">
            <img
              src="${
                picture ===
                "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
                  ? `Images/user image.svg`
                  : picture
              }"
              style="border-radius: 50%; border: 2px solid #ba00ba;"
              width="50px"
              onclick="window.location='user.html?username=${username}'"
              alt="${username} Profile picture"
            />
            <div class="liveText">
              <p>
                <a onclick="window.location='user.html?username=${username}'">${username}</a> |
                <span id="currentDateTime"></span>
              </p>
              <div class="icons">
                <button>
                  <i class="fa-solid fa-eye"></i>
                  <p id="viewCount" class="text-white">2.1k</p>
                </button>
                <button>
                  <i class="fa-solid fa-comment"></i>
                  <p class="text-white">113</p>
                </button>
              </div>
            </div>

            <div id="devices"></div>

            <button class="endButton" id="startStreamBtn" onclick="startLive()">
              Start livestream
            </button>
            <button class="endButton" id="endStreamBtn" onclick="endLive()">
              End livestream
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  let cldStream; // Cloudinary WebRTC stream object

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then(function (stream) {
      const videoElement = document.getElementById("video");

      cldStream = initLiveStream({
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
        stream: stream,
        debug: "all",
        hlsTarget: true,
        fileTarget: true,
        onStart: function () {
          console.log("Stream started");
          console.log("Stream URL:", cldStream.streamUrls.hls);
        },
        onStop: function () {
          console.log("Stream stopped");
        },
        onError: function (error) {
          console.error("Stream error:", error);
        },
      });

      function switchCamera() {
        // Switching camera is not supported in cloudinaryJsStreaming library
        console.warn("Switching camera is not supported.");
      }
    })
    .catch(function (error) {
      console.error("Error accessing camera and microphone:", error);
    });

  const backBtn = document.querySelector(".backArrow");
  backBtn.addEventListener("click", goBack);
  function goBack() {
    window.history.back();
  }

  const startStreamBtn = document.getElementById("startStreamBtn");
  const endStreamBtn = document.getElementById("endStreamBtn");

  function startLive() {
    cldStream.start();
  }

  function endLive() {
    cldStream.stop();
  }

  startStreamBtn.addEventListener("click", startLive);
  endStreamBtn.addEventListener("click", endLive);

  // Current date and time of livestream
  const monthNames = [
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

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  const date = new Date();
  const dayName = dayNames[date.getDay()];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const currentDate =
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
});

// let liveStream, publicId, url;

// function setText(id, text) {
//   document.getElementById(id).innerHTML = text;
// }

// function startLive() {
//   liveStream.start(publicId);
//   document.getElementById("startStreamBtn").disabled = true;
//   document.getElementById("endStreamBtn").disabled = false;

//   // Send the stream URL and other details to the backend API
//   const streamTitle = document.getElementById("liveTitle").textContent;
//   const streamContent = document.getElementById("liveDescription").textContent;

//   console.log(streamTitle, streamContent);
//   // const apiUrl = "https://api.snapme-ng.com/api/v1/live/start";
//   // const formData = new FormData();
//   // formData.append("streamTitle", streamTitle);
//   // formData.append("streamContent", streamContent);
//   // formData.append("streamUrl", url);

//   // fetch(apiUrl, {
//   //   method: "POST",
//   //   body: formData,
//   // })
//   //   .then((response) => {
//   //     // Handle the response from the backend API
//   //   })
//   //   .catch((error) => {
//   //     console.error("Error sending stream data to the backend:", error);
//   //   });
// }

// function endLive() {
//   liveStream.stop();
//   document.getElementById("startStreamBtn").disabled = false;
//   document.getElementById("endStreamBtn").disabled = true;
// }

// function switchCamera() {
//   const videoElement = document.getElementById("video");
//   const device = { deviceId: getSelectedCamera() };

//   cloudinaryJsStreaming
//     .detachCamera(videoElement)
//     .then(() => {
//       cloudinaryJsStreaming
//         .attachCamera(videoElement, device)
//         .then(() => {
//           console.log("Camera switched");
//         })
//         .catch((error) => {
//           console.error("Error attaching camera:", error);
//         });
//     })
//     .catch((error) => {
//       console.error("Error detaching camera:", error);
//     });
// }

// function initialize() {
//   const videoElement = document.getElementById("video");

//   cloudinaryJsStreaming
//     .initLiveStream({
//       cloudName: CLOUD_NAME,
//       uploadPreset: UPLOAD_PRESET,
//       stream: videoElement,
//       debug: "all",
//       hlsTarget: true,
//       fileTarget: true,
//       events: {
//         start: function (args) {
//           console.log("Started streaming");
//         },
//         stop: function (args) {
//           console.log("Stopped streaming");
//         },
//         error: function (error) {
//           console.error("Error:", error);
//         },
//         local_stream: function (stream) {
//           console.log("Local stream received");
//         },
//       },
//     })
//     .then((result) => {
//       liveStream = result;
//       publicId = result.response.public_id;
//       url = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}`;

//       console.log("Initialized live stream");
//       console.log("Public ID:", publicId);
//       console.log("Stream URL:", url);

//       document.getElementById("endStreamBtn").disabled = true;
//     })
//     .catch((error) => {
//       console.error("Error initializing live stream:", error);
//     });
// }

// function getSelectedCamera() {
//   return document.getElementById("devices").value;
// }

// function getUserMediaPermission() {
//   return navigator.mediaDevices.getUserMedia({ video: true, audio: true });
// }

// function addCameraOption(device) {
//   if (device.kind.includes("video")) {
//     const devicesDropDown = document.getElementById("devices");
//     const opt = document.createElement("option");
//     opt.value = device.deviceId;
//     opt.innerHTML = device.label || "unknown";
//     devicesDropDown.appendChild(opt);
//   }
// }

// function fillCameraDropdown() {
//   getUserMediaPermission()
//     .then(() => {
//       cloudinaryJsStreaming
//         .listDevices()
//         .then((devices) => {
//           devices.forEach(addCameraOption);
//           initialize();
//         })
//         .catch((error) => {
//           console.error("Error listing devices:", error);
//         });
//     })
//     .catch((error) => {
//       console.error("Error getting user media permission:", error);
//     });
// }

// document.addEventListener("DOMContentLoaded", fillCameraDropdown);

// document.getElementById("currentDateTime2").innerHTML = currentDate;

//Get user profile
// function thisUser() {
//   fetch("https://api.snapme-ng.com/api/v1/:username")
//     .then((response) => response.json())
//     .then((user) => {
//       console.log(user.name);
//       console.log(user.email);
//       console.log(user.bio);
//       console.log(user.avatarUrl);
//     })
//     .catch((error) => console.error(error));
// }
