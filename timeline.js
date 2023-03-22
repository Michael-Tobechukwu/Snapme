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
//Share popup modals end
/////

//Add to home screen prompt
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
///Add to home screen prompt

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

//More icons V button
function moreIconsV() {
  var dots = document.getElementById("dots");
  var moreIcons5 = document.getElementById("more-iconsV");
  var btnText = document.getElementById("myBtnV");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "&#9776;";
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
    btnText.innerHTML = "&#9776;";
    moreIcons6.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons6.style.display = "inline";
  }
}

// Search catalogs all pins
const searchInput = document.getElementById("searchBar");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  // Clear previous results
  resultsList.innerHTML = "";

  // Fetch data from your website
  fetch("https://api.snapme-ng.com/api/v1/search")
    .then((response) => response.json())
    .then((data) => {
      // Filter the data based on the search term
      const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      });

      // Display the filtered results
      filteredData.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        resultsList.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
});

// Search catalogs all pins on mobile
const mobileSearchInput = document.getElementById("mobileSearchBar");
const mobileResultsList = document.getElementById("results");

mobileSearchInput.addEventListener("input", function () {
  const searchTerm = mobileSearchInput.value.toLowerCase();

  // Clear previous results
  mobileResultsList.innerHTML = "";

  // Fetch data from your website
  fetch("https://api.snapme-ng.com/api/v1/search")
    .then((response) => response.json())
    .then((data) => {
      // Filter the data based on the search term
      const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      });

      // Display the filtered results
      filteredData.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        mobileResultsList.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
});

// Search catalogs all pins
/*const search = document.querySelector("#searchBar");
  const allCatalogs = document.querySelector(".container");
  const catalogs = document.querySelectorAll(".card");
  
  // search input event
  search.addEventListener("input", searchCatalog);
  
  // Filter list
  function searchCatalog(x) {
    // convert input to lower case
    const userQuery = x.target.value.toLowerCase();
  
    //Get items in Array
    const myCatalogs = allCatalogs.querySelectorAll(".card");
    //Convert items to an iterable array
    Array.from(myCatalogs).forEach(function (myCatalog) {
      const catalogList = myCatalog.children[0].textContent;
  
      if (catalogList.toLowerCase().indexOf(userQuery) != -1) {
        myCatalog.style.display = "block";
      } else {
        myCatalog.style.display = "none";
      }
    });
  }*/

/* Mobile Search
  const mobileSearch = document.querySelector("#mobileSearchBar");
  const allMobileCatalogs = document.querySelector(".mobileContainer");
  const mobileCatalogs = document.querySelectorAll(".mobileCard");
  
  // Search input event
  mobileSearch.addEventListener("input", mobileSearchCatalog);
  
  // Filter list
  function mobileSearchCatalog(y) {
    // Convert input to lower case
    const mobileQuery = y.target.value.toLowerCase();
  
    //Get items in Array
    const myMobilecatalogs = allMobileCatalogs.querySelectorAll(".mobileCard");
    //Convert items to an iterbale array
    Array.from(myMobilecatalogs).forEach(function (myMobilecatalog) {
      const mobileCatalogList = myMobilecatalogs.children[0].textContent;
  
      if (mobileCatalogList.toLowerCase().indexOf(mobileQuery) != -1) {
        myMobilecatalog.style.display = "block";
      } else {
        myMobilecatalog.style.display = "none";
      }
    });
  }*/

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
//Actual time posted ends

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

//Subscriber's badge
document.addEventListener("DOMContentLoaded", function () {
  // Send an AJAX request to get the subscription status
  fetch("/api/subscribed")
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
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

/*  var dots = document.getElementById("dots");
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
  
  // Current date and time
  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
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
  document.getElementById("currentDateTime3").innerHTML = currentDate;
  document.getElementById("currentDateTime4").innerHTML = currentDate;
  document.getElementById("currentDateTime5").innerHTML = currentDate;
  document.getElementById("currentDateTime6").innerHTML = currentDate;
  document.getElementsByClassName("currentDateTime")[0].innerHTML = currentDate;
  document.getElementsByClassName("currentDateTime")[1].innerHTML = currentDate;
  document.getElementsByClassName("currentDateTime")[2].innerHTML = currentDate;
  //Current date end
  
  //Preloader
  window.onload = function () {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  };
  */
