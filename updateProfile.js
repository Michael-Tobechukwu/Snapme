let api8 = `https://api.snapme-ng.com/api/v1`;

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

function getLocalItem(key) {
  const item = localStorage.getItem(key);
  if (!item) {
    return null; // Item not found in local storage
  }

  const parsedItem = JSON.parse(item);
  const now = new Date().getTime();

  if (now > parsedItem.expiry) {
    localStorage.removeItem(key);
    return null; // Item has expired
  }

  return parsedItem.value;
}

let currentProfile = getLocalItem("username");

// window.addEventListener("load", function () {
if (currentProfile === null) {
  localStorage.setItem("returnUrl", window.location.href);
  window.location.href = "/login.html";
}
//   fetch(`${api8}/${currentProfile}`)
// });

//Upload profile picture
function handleProfilePicUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const imgElement = document.querySelector(".placeholderPic");
    imgElement.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

//Upload banner image
function handleBannerPicUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const imgElement = document.querySelector(".bannerPlaceholderPic");
    imgElement.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

//Edit username in update profile
// const paragraph = document.getElementById("editParagraph");
// const edit_button = document.getElementById("editButton");
// const done_button = document.getElementById("doneButton");

// edit_button.addEventListener("click", function () {
//   paragraph.contentEditable = true;
//   paragraph.style.backgroundColor = "#dddbdb";
//   paragraph.style.color = "#000";
// });

// done_button.addEventListener("click", function () {
//   paragraph.contentEditable = false;
//   paragraph.style.backgroundColor = "#021129";
//   paragraph.style.color = "#fff";
// });

// Get the profile form element
const profileForm = document.getElementById("profileForm");
const submitUpdate = document.getElementById("submitUpdate");

// Add an event listener to the profile form submission
profileForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(profileForm);

  try {
    const response = await fetch(`${api8}/update-profile/${currentProfile}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${getJwt()}`,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      Swal.fire("Success!", `${data.message}`, "success").then(() => {
        window.location.href = `user.html?username=${currentProfile}`;
      });
    } else {
      const errorData = await response.json();
      console.log(errorData.message);
      Swal.fire("Oops!", `${errorData.message}`, "error");
      return;
    }
  } catch (error) {
    // Handle any network or request error
    console.log(error);
    Swal.fire(
      "Uh-oh",
      `An unknown error has occurred please try again later!`,
      "error"
    );
  }
});

//Update profile ends

//Go back to previous page
function goBack() {
  window.history.back();
}
