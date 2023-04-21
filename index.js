window.addEventListener("load", function () {
  setTimeout(function () {
    navigator.splashscreen.hide();
  }, 2000);
});

//Preloader
window.onload = function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

// Social media share modal
//Share popup modal 1

// Get the modal
var modal = document.getElementsByClassName("shareModal")[0];

// Get the button that opens the modal
var btn = document.getElementsByClassName("myPopupBtn")[0];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 2
var modal = document.getElementsByClassName("shareModal")[1];

// Get the button that opens the modal
var btn = document.getElementsByClassName("myPopupBtn")[1];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 3

var modal = document.getElementsByClassName("shareModal")[2];

// Get the button that opens the modal
var btn = document.getElementsByClassName("myPopupBtn")[2];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 4

var modal = document.getElementsByClassName("shareModal")[3];

// Get the button that opens the modal
var btn = document.getElementsByClassName("myPopupBtn")[3];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 5

var modal = document.getElementsByClassName("shareModal")[4];

// Get the button that opens the modal
var btn = document.getElementsByClassName("myPopupBtn")[4];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[4];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 6
var modal = document.getElementsByClassName("shareModal")[5];
// Get the button that opens the modal
var btn = document.getElementsByClassName("myPopupBtn")[5];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 7
var modal = document.getElementsByClassName("shareModal")[6];
// Get the button that opens the modal
var btn = document.getElementsByClassName("myPopupBtn")[6];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[6];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 8
var modal = document.getElementsByClassName("shareModal")[7];
// Get the button that opens the modal
var btn = document.getElementsByClassName("myPopupBtn")[7];

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close")[7];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//Share popup modals end
/////

// JavaScript
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // Scrolling Up
    document.getElementById("navbar").classList.remove("hide");
    document.getElementById("navbar").classList.add("show");
  } else {
    // Scrolling Down
    document.getElementById("navbar").classList.remove("show");
    document.getElementById("navbar").classList.add("hide");
  }

  prevScrollpos = currentScrollPos;
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
      const signedInContent2 = document.getElementById("signedInContent2");
      signedInContent.style.display = "block";
      signedInContent2.style.display = "block";
    } catch (err) {
      // If there was an error decoding the token, assume the user is not signed in
      console.error("Error decoding JWT token:", err);

      // Don't display the content for signed-in users
      signedInContent.style.display = "none";
      signedInContent2.style.display = "none";
    }
  } else {
    // Don't display the content for signed-in users
    signedInContent.style.display = "none";
    signedInContent2.style.display = "none";
  }
});
////
//Add to home screen/install prompt
setTimeout(function () {
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    // Update UI to notify the user that they can add the app to the home screen
    showInstallButton();
  });

  function showInstallButton() {
    // Show the "Add to Home Screen" button
    const installButton = document.querySelector(".install-button");
    installButton.classList.add("show");
    installButton.addEventListener("click", installApp);
  }

  function installApp() {
    // Show the prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }

      // Reset the deferred prompt variable
      deferredPrompt = null;
    });
  }
}, 60000);
///Add to home screen/install prompt end
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

//Like button 4
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

//Like button 5
const likeButton5 = document.getElementsByClassName("like-button")[4];
let isLiked5 = false;

likeButton5.addEventListener("click", () => {
  if (isLiked5) {
    likeButton5.innerHTML = '<i class="far fa-heart"></i>';
    likeButton5.style.color = "#fff";
    isLiked5 = false;
  } else {
    likeButton5.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton5.style.color = "#fff";
    isLiked5 = true;
  }
});

//Like button 6
const likeButton6 = document.getElementsByClassName("like-button")[5];
let isLiked6 = false;

likeButton6.addEventListener("click", () => {
  if (isLiked6) {
    likeButton6.innerHTML = '<i class="far fa-heart"></i>';
    likeButton6.style.color = "#fff";
    isLiked6 = false;
  } else {
    likeButton6.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton6.style.color = "#fff";
    isLiked6 = true;
  }
});

//Like button 7
const likeButton7 = document.getElementsByClassName("like-button")[6];
let isLiked7 = false;

likeButton7.addEventListener("click", () => {
  if (isLiked7) {
    likeButton7.innerHTML = '<i class="far fa-heart"></i>';
    likeButton7.style.color = "#fff";
    isLiked7 = false;
  } else {
    likeButton7.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton7.style.color = "#fff";
    isLiked7 = true;
  }
});

//Like button 8
const likeButton8 = document.getElementsByClassName("like-button")[7];
let isLiked8 = false;

likeButton8.addEventListener("click", () => {
  if (isLiked8) {
    likeButton8.innerHTML = '<i class="far fa-heart"></i>';
    likeButton8.style.color = "#fff";
    isLiked8 = false;
  } else {
    likeButton8.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton8.style.color = "#fff";
    isLiked8 = true;
  }
});
//Like buttons end
////
//Suggested Popup on mobile
var suggestedButton = document.getElementById("SuggestedBtn");
var suggestedModal = document.getElementById("suggestedBackground");
var closeSuggestedBtn = document.getElementById("closeThis");

function suggestedPopupModal() {
  suggestedModal.style.display = "block";
}

function closeSuggestedPopup() {
  suggestedModal.style.display = "none";
}

suggestedButton.addEventListener("click", suggestedPopupModal);
closeSuggestedBtn.addEventListener("click", closeSuggestedPopup);

//Follow popup on mobile
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
//Follow popup on mobile
/////

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
  var moreIcons2 = document.getElementById("more-iconsII");
  var btnText = document.getElementById("myBtnII");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
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
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
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
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons4.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons4.style.display = "inline";
  }
}

//More icons V button
function moreIconsV() {
  var dots = document.getElementById("dots");
  var moreIcons5 = document.getElementById("more-iconsV");
  var btnText = document.getElementById("myBtnV");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons5.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons5.style.display = "inline";
  }
}

//More icons VI button
function moreIconsVI() {
  var dots = document.getElementById("dots");
  var moreIcons6 = document.getElementById("more-iconsVI");
  var btnText = document.getElementById("myBtnVI");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons6.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons6.style.display = "inline";
  }
}

//More icons VII button
function moreIconsVII() {
  var dots = document.getElementById("dots");
  var moreIcons7 = document.getElementById("more-iconsVII");
  var btnText = document.getElementById("myBtnVII");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons7.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons7.style.display = "inline";
  }
}

//More icons VIII button
function moreIconsVIII() {
  var dots = document.getElementById("dots");
  var moreIcons8 = document.getElementById("more-iconsVIII");
  var btnText = document.getElementById("myBtnVIII");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" width="20px" />`;
    moreIcons8.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons8.style.display = "inline";
  }
}
//////
///
//Time posted
var timePinned = moment("20230129", "YYYYMMDD").fromNow();
document.getElementById("timePosted").innerHTML = timePinned;

var timePinned = moment("20220210", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[0].innerHTML = timePinned;

var timePinned = moment("20221229", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[1].innerHTML = timePinned;

var timePinned = moment("20230302", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[2].innerHTML = timePinned;

var timePinned = moment("20211202", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[3].innerHTML = timePinned;

var timePinned = moment("20220602", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[4].innerHTML = timePinned;

var timePinned = moment("20210102", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[5].innerHTML = timePinned;

var timePinned = moment("20211102", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[6].innerHTML = timePinned;
//Actual time posted ends
///
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

//Show more suggested accounts button on mobile
var showMoreBtn = document.getElementById("showMore");
//var MoreAccounts = document.getElementById("suggestedMore")

function showMoreAccounts() {
  var click = document.getElementById("suggestedMore");
  if (click.style.display === "none") {
    click.style.display = "block";
    showMoreBtn.innerHTML = "Show less";
  } else {
    click.style.display = "none";
    showMoreBtn.innerHTML = "Show more";
  }
}
//More suggested accounts end
////
//Subscriber's badge
document.addEventListener("DOMContentLoaded", function () {
  // Send an AJAX request to get the subscription status
  fetch("https://api.snapme-ng.com/api/v1/user/status")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error getting subscription status");
      }
    })
    .then((data) => {
      // Check if the user is subscribed
      const isSubscribed = data.isSubscribed;

      // Show the badge if the user is subscribed
      if (isSubscribed) {
        const badgeElement = document.getElementById("subscribed-badge");
        badgeElement.style.display = "inline-block";
      } else {
        badgeElement.style.display = "none";
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
//Subscriber's badge ends

//Promote popup after 10 minutes
function openPromotePopup() {
  document.getElementById("promotePopup").style.display = "block";
}

function closePromote() {
  document.getElementById("promotePopup").style.display = "none";
}

// Delay the opening of the popup by 10 minutes
setTimeout(openPromotePopup, 600000); // 10 minutes = 10 * 60 * 1000 milliseconds

document.getElementById("closePromote").addEventListener("click", closePromote);
//Notification popup

//Pin details
//
document.getElementById("pinDetails").addEventListener("click", pinDetails);
document.getElementById("pinDetails2").addEventListener("click", pinDetails);
document.getElementById("pinDetails3").addEventListener("click", pinDetails);
document.getElementById("pinDetails4").addEventListener("click", pinDetails);
document.getElementById("pinDetails5").addEventListener("click", pinDetails);
document.getElementById("pinDetails6").addEventListener("click", pinDetails);
document.getElementById("pinDetails7").addEventListener("click", pinDetails);
document.getElementById("pinDetails8").addEventListener("click", pinDetails);

function pinDetails() {
  fetch("https://api.snapme-ng.com/api/v1/pin-details/:id")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error("There was a problem with the fetch operation:", error);
    });
}
pinDetails();

//Pin details ends
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
  const viewportHeight2 = window.innerHeight;

  if (video2Top < viewportHeight2 && video2Bottom >= 0 && !isPlaying2) {
    video2.play();
    isPlaying2 = true;
  } else if (video2Top >= viewportHeight2 || video2Bottom < 0) {
    video2.pause();
    isPlaying2 = false;
  }
});

//Video controls
//const video = document.getElementById("video");
const playPauseBtn = document.getElementById("play-pause-btn");
const volumeRange = document.getElementById("volume-range");
const muteBtn = document.getElementById("mute-btn");
const speedSelect = document.getElementById("speed-select");
const skipBackBtn = document.getElementById("skip-back-btn");
const skipAheadBtn = document.getElementById("skip-ahead-btn");

// Play/pause button
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = `<img src="Images/pause-button.svg" alt="Pause" />`;
  } else {
    video.pause();
    playPauseBtn.innerHTML = `<img src="Images/play-button.svg" alt="Play" />`;
  }
});

// Volume range
volumeRange.addEventListener("input", () => {
  video.volume = volumeRange.value;
});

// Mute/unmute button
muteBtn.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    muteBtn.innerHTML = `<img src="Images/mute button.svg" alt="Mute" />`;
    volumeRange.value = video.volume;
  } else {
    video.muted = true;
    muteBtn.innerHTML = `<img src="Images/unmute button.svg" alt="Unmute" />`;
    volumeRange.value = 0;
  }
});

// Skip back button
skipBackBtn.addEventListener("click", () => {
  video.currentTime -= 10;
});

// Skip ahead button
skipAheadBtn.addEventListener("click", () => {
  video.currentTime += 10;
});

// Playback speed select
speedSelect.addEventListener("change", () => {
  video.playbackRate = speedSelect.value;
});
//Video controls 1
////

//Video controls 2
const playPauseBtn2 = document.getElementById("play-pause-btn2");
const volumeRange2 = document.getElementById("volume-range2");
const muteBtn2 = document.getElementById("mute-btn2");
const speedSelect2 = document.getElementById("speed-select2");
const skipBackBtn2 = document.getElementById("skip-back-btn2");
const skipAheadBtn2 = document.getElementById("skip-ahead-btn2");

// Play/pause button
playPauseBtn2.addEventListener("click", () => {
  if (video2.paused) {
    video2.play();
    playPauseBtn2.innerHTML = `<img src="Images/pause-button.svg" alt="Pause" />`;
  } else {
    video2.pause();
    playPauseBtn2.innerHTML = `<img src="Images/play-button.svg" alt="Play" />`;
  }
});

// Volume range
volumeRange2.addEventListener("input", () => {
  video2.volume = volumeRange2.value;
});

// Mute/unmute button
muteBtn2.addEventListener("click", () => {
  if (video2.muted) {
    video2.muted = false;
    muteBtn2.innerHTML = `<img src="Images/mute button.svg" alt="Mute" />`;
    volumeRange2.value = video2.volume;
  } else {
    video2.muted = true;
    muteBtn2.innerHTML = `<img src="Images/unmute button.svg" alt="Mute" />`;
    volumeRange2.value = 0;
  }
});

// Skip back button
skipBackBtn2.addEventListener("click", () => {
  video2.currentTime -= 10;
});

// Skip ahead button
skipAheadBtn2.addEventListener("click", () => {
  video2.currentTime += 10;
});

// Playback speed select
speedSelect2.addEventListener("change", () => {
  video2.playbackRate = speedSelect2.value;
});
//Video controls 2 end
////
//Mobile catalog tabs swipe control
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
    swipeContainer.scrollBy({ left: 150, behavior: "smooth" });
  } else if (touchEndX > touchStartX) {
    swipeContainer.scrollBy({ left: -150, behavior: "smooth" });
  }
});
////

var previousButton;

var buttons = document.querySelectorAll(".swipe-item button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    changeButtonColor(this);
  });
}

function changeButtonColor(clickedButton) {
  if (previousButton) {
    previousButton.style.backgroundColor = "#021129";
  }
  clickedButton.style.backgroundColor = "#bd74bd";

  previousButton = clickedButton;
}

/*const musicBtn = document.getElementById("followPopup");

const followButton1 = document.getElementsByClassName("followPopup")[0];
const followButton2 = document.getElementsByClassName("followPopup")[1];
const followButton3 = document.getElementsByClassName("followPopup")[2];
const followButton4 = document.getElementsByClassName("followPopup")[3];
const followButton5 = document.getElementsByClassName("followPopup")[4];
const followButton6 = document.getElementsByClassName("followPopup")[5];
const followButton7 = document.getElementsByClassName("followPopup")[6];

musicBtn.addEventListener("click", () =>
  (musicBtn.style.backgroundColor = "#bd74bd")(
    (musicBtn.style.border = "#bd74bd")
  )
);

followButton1.addEventListener("click", () =>
  (followButton1.style.backgroundColor = "#bd74bd")(
    (followButton1.style.border = "#bd74bd")
  )
);*/

////
//Show/hide top menu on scroll
var pastScrollpos = window.pageYOffset;
window.onscroll = function () {
  var presentScrollPos = window.pageYOffset;
  if (pastScrollpos < presentScrollPos) {
    document.querySelector(".navmenu").classList.remove("hide");
  } else {
    document.querySelector(".navmenu").classList.add("hide");
  }
  pastScrollpos = presentScrollPos;
};

//Show/Hide footer menu on scroll
var oldScrollpos = window.pageYOffset;
window.onscroll = function () {
  var newScrollPos = window.pageYOffset;
  if (oldScrollpos < newScrollPos) {
    document.querySelector(".mobileView").classList.remove("hide");
  } else {
    document.querySelector(".mobileView").classList.add("hide");
  }
  oldScrollpos = newScrollPos;
};
