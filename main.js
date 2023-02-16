//Like/dislike button
function myLike(x) {
  x.classList.toggle("fa-thumbs-down");
}

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
  var moreIcons = document.getElementById("more-iconsII");
  var btnText = document.getElementById("myBtnII");

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

//More icons III button
function moreIconsIII() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsIII");
  var btnText = document.getElementById("myBtnIII");

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
//More icons IV button
function moreIconsIV() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsIV");
  var btnText = document.getElementById("myBtnIV");

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

//More icons V button
function moreIconsV() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsV");
  var btnText = document.getElementById("myBtnV");

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

//More icons VI button
function moreIconsVI() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsVI");
  var btnText = document.getElementById("myBtnVI");

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

// Search catalogs all pins
const search = document.querySelector("#searchBar");
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
}

// Mobile Search
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
}

// Current date and time
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

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const date = new Date();
let dayName = dayNames[date.getDay()];
let day = date.getDate();
let month = monthNames[date.getMonth()];
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();

if (minutes < 10) {
  console.log("0" + minutes);
} else {
  console.log(minutes);
}

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

/*Display actual publish date
var elements = document.querySelectorAll("time[data-time]"),
  updateDates = function () {
    Array.prototype.forEach.call(elements, function (entry) {
      var out = "";
      // ...
      entry.textContent = out;
    });
    setTimeout(updateDates, 1000 * 60);
  };
setTimeout(updateDates, 1000 * 60);
*/

// Subscriber's badge
const subscribersList = ["azizymakim", "bryantcave", "nkemimen"];const userName = document.querySelectorAll(".username").textContent;
const badge = document.querySelectorAll(".verifiied-badge");

if (userName == subscribersList) {
  badge.style.display = "block";
} else {
  badge.style.display = "none";
}
