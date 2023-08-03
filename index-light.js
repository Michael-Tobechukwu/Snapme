const api4 = `https://api.snapme-ng.com/api/v1`;

// window.addEventListener("load", function () {
//   setTimeout(function () {
//     navigator.splashscreen.hide();
//   }, 2000);
// });

//Preloader
window.onload = function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

let currentProfile = localStorage.getItem("username");

function checkJwt(location) {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  console.log(jwtToken);
  if (jwtToken && location === "profile") {
    window.location.href = `/user.html?username=${currentProfile}`;
    return;
  } else if (!jwtToken && location === "profile") {
    // redirect to the login page if jwtToken doesn't exist
    // alert("You need to login first!");
    window.location.href = "/login.html";
    return;
  } else if (!jwtToken && location === "post") {
    // redirect to the login page
    // alert("You need to login first!");
    window.location.href = "/login.html";
    return;
  } else if (jwtToken && location === "post") {
    window.location.href = "/create-pin.html";
    return;
  }
}

function getJwt() {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  if (!jwtToken) {
    // redirect user to login page if jwtToken doesn't exist
    localStorage.setItem("returnUrl", window.location.href);
    // window.location.href = "/login.html";
    return;
  }
  return jwtToken;
}

document.addEventListener("DOMContentLoaded", function () {
  const currentPic = localStorage.getItem("picture");
  const profile = document.getElementById("profilePicture");

  // Create an image element
  const image = document.createElement("img");
  image.src =
    currentPic ===
    "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
      ? `Images/user image.svg`
      : currentPic || "Images/user image.svg";
  image.alt = "user Image";
  image.className = "user-image";
  image.style = "border-radius: 50%; border: 2px solid #ba00ba;";

  // Set the image as the innerHTML of the button
  profile.innerHTML = "";
  profile.appendChild(image);

  fetch(`${api4}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getJwt() ? `Bearer ${getJwt()}` : undefined,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network Response Error");
      }
    })
    .then((posts) => {
      const allPinElement = document.querySelector(".row");

      posts.forEach((post) => {
        const postId = post._id;

        const postElement = document.createElement("div");
        postElement.classList.add("col");

        postElement.innerHTML = `
          <div class="col">
          <div class="card mobileCard" id="card1">
            <div class="post-img">
            ${
              post.media
                ? post.media[0]?.endsWith(".mp4")
                  ? `<video class="card-img-top video" controls muted loop onclick="window.location = 'pin-details.html?id=${postId}'">
                <source src="${post?.media[0]}" type="video/mp4">
                Your browser does not support the video tag.
              </video><div id="my-video-controls" class="my-video-controls" style="display:none">
              <button class="playPauseButton" data-playing="false">
                <img src="Images/pause-white.svg" alt="Pause/play" />
                
              </button>
              <input
                type="range"
                class="volume-range"
                min="0"
                max="1"
                step="0.1"
                value="1"
              />
              <button class="mute-btn" data-muted="false">
                <img src="Images/unmute-white.svg" alt="Unmute/Mute" />
                
              </button>
              <select class="speed-select" class="desktopOnly">
                <option value="1">1x</option>
                <option value="0.5">0.5x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
              </select>
              <button class="skip-back-btn">
                <img src="Images/skip-backward-white.svg" alt="<<" />
              </button>
              <button class="skip-ahead-btn">
                <img src="Images/skip-forward-white.svg" alt=">>" />
              </button>
            </div>` 
                  : `<img src="${post.media[0]}" class="card-img-top" onclick="window.location = 'pin-details.html?id=${postId}'" />`
                : `<p>${post.message}</p>`
            }

            <a class="username text-white" href="user.html?username=${
              post.user.username
            }">
                <img src="${
                  post.user.picture
                }" width="35px" style="border-radius: 50%; border: 2px solid #ba00ba;" />
                ${post.user.username}
                ${
                  post.user.role === "subscribed"
                    ? '<span id="subscribed-badge" class="verified-badge"><img src="Images/verified.svg" alt="Profile pic" /></span>'
                    : ""
                }
                <span id="timePosted">${moment(post.date).fromNow()}</span>
              </a>
              <button id="followBtn">Follow +</button>

              <h4 id="postTitle">${post.caption}</h4>
              <div id="commentBox">
                <form class="commentBoxForm">
                  <span id="closeComment"> &times;</span>
                  <textarea
                    name="comment"
                    id="commentInput"
                    placeholder="Enter your comment here..."
                  ></textarea>

                  <div id="submitComment">
                    <input
                      type="button"
                      value="Comment"
                      style="background: none; border: none; color: #fff"
                    /><img src="Images/send.svg" alt="Comment" width="20px" />
                  </div>
                </form>
              </div>
            </div>
            <div class="card-body">
              <ul class="card-title icons-list">
                <li>
                  <button>
                    <i class="fa-solid fa-eye"></i>
                    <p class="text-white">${post?.views}</p>
                  </button>
                </li>

                <li class="likeListItem">
                  <button
                    class="like-button"
                    id="likeBtn"
                  >
                    <i class="far fa-heart" style="color: #fff"></i>
                  </button>
                  <p class="text-white">${post?.likes?.length}</p>
                </li>

                <li>
                  <button id="commentBtn" class="commentRedirectBtn">
                    <i class="fa-solid fa-comment"></i>
                    <p class="text-white">${post?.comment?.length}</p>
                  </button>
                </li>

                <li>
                  <button class="myPopupBtn">
                    <i class="fa-solid fa-share"></i>
                    <p class="text-white">${post?.shares}</p>
                  </button>
                </li>

                <!-- The Modal -->
                <div class="shareModal" class="modal">
                  <!-- Modal content -->
                  <div class="modalContent mobileModalContent">
                    <span class="close">&times;</span>
                    <p>Share this post</p>
                    <div class="share_popup">
                      <a
                        class="facebookShare"
                        href="https://www.facebook.com/sharer/sharer.php?u=https://snapme-ng.com/"
                        target="_blank"
                        ><img src="Images/facebook new.svg"
                      /></a>
                      <a
                        class=""
                        href="https://twitter.com/share?text=I found this awesome post on Snapme! Check it out!&url=https://snapme-ng.com/&hashtags=fashion,music,sports,Snapme"
                        data-size="large"
                        target="_blank"
                      >
                        <img src="Images/twitter new.svg" alt="Twitter"
                      /></a>

                      <a
                        class="whatsappShare"
                        href="https://api.whatsapp.com/send/?text=I+found+this+awesome+post+on+Snapme.+Check+it+out!+https://snapme-ng.com/"
                        target="_blank"
                      >
                        <img src="Images/whatsapp new.svg" alt="WhatsApp" />
                      </a>

                      <a
                        class="telegramShare"
                        href="https://t.me/share/url?url=https://snapme-ng.com/all-pins&text=I found this awesome post on Snapme! Check it out!"
                        target="_blank"
                      >
                        <img
                          src="Images/telegram new.svg"
                          alt="Telegram share"
                        />
                      </a>

                      <a
                        class="linkedinShare"
                        href="https://linkedin.com/shareArticle?mini=true&url=https://snapme-ng.com/"
                        target="_blank"
                      >
                        <img src="Images/linkedin.svg" alt="Linkedin" />
                      </a>

                      <a
                        class="redditShare"
                        href="http://www.reddit.com/submit?url=https://snapme-ng.com/&text=I found this awesome post on Snapme! Check it out!"
                        target="_blank"
                      >
                        <img src="Images/reddit.svg" alt="Reddit" />
                      </a>
                    </div>
                  </div>
                </div>
              </ul>
              <div class="other-icons">
                  <div>
                    <span id="dots"></span>
                    <div id="more-icons" class="more-icons">
                      <ul>
                        <li onclick="savePost()">
                          <i class="fa-solid fa-bookmark"></i>
                          <p>0</p>
                        </li>
                        <li onclick="downloadPost()">
                          <i class="fa-solid fa-download"></i>
                          <p>0</p>
                        </li>
                        <li onclick="deletePost()">
                          <i class="fa-solid fa-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button onclick="moreIcons()" id="myBtn">
                    <img src="Images/more-icon.svg" width="20px">
                  </button>
                </div>
            </div>
            <!--card end-->
          </div>
        </div>`;
        allPinElement.appendChild(postElement);
      });
    })
    .catch((error) => {
      Swal.fire("Ooops!", `Error fetching all pins: ${error}`, "error");
      console.error("Error fetching all pins:", error);
    });

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

  //Show more suggested accounts button on mobile
  var showMoreBtn = document.getElementById("showMore");
  //var MoreAccounts = document.getElementById("suggestedMore")

  function showMoreAccounts() {
    var suggestedMore = document.getElementById("suggestedMore");
    if (showMoreBtn.innerHTML === "Show more") {
      suggestedMore.style.display = "block";
      showMoreBtn.innerHTML = "Show less";
    } else {
      suggestedMore.style.display = "none";
      showMoreBtn.innerHTML = "Show more";
    }
  }
  //More suggested accounts end

  //Make dropdown stack on top
  if (window.innerWidth <= 768) {
    const screenWidth = window.innerWidth;
    const mobileDropdown = document.querySelector(".dropdown-menu");
  
    if (mobileDropdown) {
      if (screenWidth <= 375 || screenWidth <= 568) {
        mobileDropdown.style.zIndex = "10000";
      } else {
        // For screens less than or equal to 768px
        mobileDropdown.style.zIndex = "10000";
      }
    } else {
      console.error("Element with class 'dropdown-menu' not found in the DOM.");
    }
  }
  

  // Nav bar sticky on mobile
  function isMobileDevice() {
    return window.matchMedia("(max-width: 568px)").matches;
  }

  function handleScroll() {
    var navButtons = document.querySelector('.navbuttonsMobile');
  
    if (isMobileDevice()) {
      var sticky = navButtons.offsetTop;
  
      if (window.scrollY > sticky) {
        navButtons.classList.add('sticky');
        navButtons.style.zIndex = '10000'; // Set the z-index to 10000 when becoming sticky
      } else {
        navButtons.classList.remove('sticky');
        // Do not remove the z-index when scrolling up
      }
    } else {
      navButtons.classList.remove('sticky');
      navButtons.style.zIndex = ''; // Remove the z-index for non-mobile devices
    }
  }
  
  // Add a scroll event listener to the window to trigger handleScroll() function on scroll
  window.addEventListener('scroll', handleScroll);  
  window.addEventListener('resize', handleScroll);
  
  ////
  //Catalog buttons fixed position on scroll
  const catalogsContainer = document.querySelector("#swipe-container");
  const catalogsContainerOffsetTop = catalogsContainer.offsetTop;
  
  function updateNavbarPosition() {
    const scrollPosition = window.scrollY;
    const viewportWidth = window.innerWidth;
  
    if (scrollPosition >= catalogsContainerOffsetTop) {
      if (viewportWidth <= 424) {
        catalogsContainer.classList.add("fixed");
        catalogsContainer.style.top = "70px";
        catalogsContainer.style.zIndex = "9999";
      } else if (viewportWidth <= 768) {
        catalogsContainer.classList.add("fixed");
        catalogsContainer.style.top = "90px";
        catalogsContainer.style.zIndex = "9999";
      } else {
        catalogsContainer.classList.add("fixed");
        catalogsContainer.style.top = "0"; /* Fallback for larger screens */
      }
    } else {
      catalogsContainer.classList.remove("fixed");
      catalogsContainer.style.top = ""; /* reset the top position to its original state */
      catalogsContainer.style.zIndex = "";
    }
  }
  
  window.addEventListener("scroll", updateNavbarPosition);
  window.addEventListener("resize", updateNavbarPosition);
  
  //Catalogs buttons fixed position on scroll
  ////
  //Timecapsule fixed position on scroll
  const timelineContainer = document.querySelector("#timelineSuggested");
  const timelineContainerOffsetTop = timelineContainer.offsetTop;
  
  function updateTimelinePosition() {
    const scrollPosition = window.scrollY;
    const viewportWidth = window.innerWidth;
  
    if (scrollPosition >= timelineContainerOffsetTop) {
      if (viewportWidth <= 424) {
        timelineContainer.classList.add("fixed");
        timelineContainer.style.top = "120px";
        timelineContainer.style.left = "0";
        timelineContainer.style.zIndex = "1"
      } else if (viewportWidth <= 768) {
        timelineContainer.classList.add("fixed");
        timelineContainer.style.top = "140px";
        timelineContainer.style.left = "0";
        timelineContainer.style.zIndex = "1"
      } else {
        timelineContainer.classList.add("fixed");
        timelineContainer.style.top = "0"; /* Fallback for larger screens */
        timelineContainer.style.left = "0"; /* Fallback for larger screens */
      }
    } else {
      timelineContainer.classList.remove("fixed");
      timelineContainer.style.top = ""; /* reset the top position to its original state */
      timelineContainer.style.left = ""; /* reset the left position to its original state */
    }
  }
  
  window.addEventListener("scroll", updateTimelinePosition);
  window.addEventListener("resize", updateTimelinePosition);
  
  ////------------------------------

  // Get the search toggle button, search container, search input, search button, and search results list
  var searchToggleBtn = document.getElementById("search-toggle-btn");
  var searchContainer = document.getElementById("search-container");
  searchContainer.style.display = "none";
  var searchInput = document.getElementById("search-input");
  var searchBtn = document.getElementById("search-btn");
  var searchResults = document.getElementById("search-results");

  // Add an event listener to the search toggle button
  searchToggleBtn.addEventListener("click", function () {
    // Toggle the visibility of the search container
    if (searchContainer.style.display === "none") {
      searchContainer.style.display = "block";
      searchToggleBtn.innerHTML = "&times;";

      searchToggleBtn.style.zIndex = "1";
      searchToggleBtn.style.top = "0";
      searchToggleBtn.style.left = "0";
    } else {
      searchContainer.style.display = "none";
      searchToggleBtn.innerHTML = `<img src="Images/search-black.svg" alt="" />`;
      searchInput.value = "";
      searchResults.innerHTML = "";
    }
  });
});

// Social media share modal
document.addEventListener("DOMContentLoaded", function () {
  let parentContainer = document.querySelector(".myrow");
  parentContainer.addEventListener("click", function (event) {
    let target = event.target;

    // Check if the clicked element has the desired class name
    if (target.classList.contains("myPopupBtn")) {
      // Code to execute when a button with the class 'myPopupBtn' is clicked

      // Create the modal element dynamically
      let modal = document.createElement("div");
      modal.classList.add("modal");

      // Set the modal content
      modal.innerHTML = `
      <!-- The Modal -->
                <div class="shareModal" class="modal">
                  <!-- Modal content -->
                  <div class="modalContent mobileModalContent">
                    <span class="close">&times;</span>
                    <p>Share this post</p>
                    <div class="share_popup">
                      <a
                        class="facebookShare"
                        href="https://www.facebook.com/sharer/sharer.php?u=https://snapme-ng.com/"
                        target="_blank"
                        ><img src="Images/facebook new.svg"
                      /></a>
                      <a
                        class=""
                        href="https://twitter.com/share?text=I found this awesome post on Snapme! Check it out!&url=https://snapme-ng.com/&hashtags=fashion,music,sports,Snapme"
                        data-size="large"
                        target="_blank"
                      >
                        <img src="Images/twitter new.svg" alt="Twitter"
                      /></a>

                      <a
                        class="whatsappShare"
                        href="https://api.whatsapp.com/send/?text=I+found+this+awesome+post+on+Snapme.+Check+it+out!+https://snapme-ng.com/"
                        target="_blank"
                      >
                        <img src="Images/whatsapp new.svg" alt="WhatsApp" />
                      </a>

                      <a
                        class="telegramShare"
                        href="https://t.me/share/url?url=https://snapme-ng.com/all-pins&text=I found this awesome post on Snapme! Check it out!"
                        target="_blank"
                      >
                        <img
                          src="Images/telegram new.svg"
                          alt="Telegram share"
                        />
                      </a>

                      <a
                        class="linkedinShare"
                        href="https://linkedin.com/shareArticle?mini=true&url=https://snapme-ng.com/"
                        target="_blank"
                      >
                        <img src="Images/linkedin.svg" alt="Linkedin" />
                      </a>

                      <a
                        class="redditShare"
                        href="http://www.reddit.com/submit?url=https://snapme-ng.com/&text=I found this awesome post on Snapme! Check it out!"
                        target="_blank"
                      >
                        <img src="Images/reddit.svg" alt="Reddit" />
                      </a>
                    </div>
                  </div>
                </div>
    `;

      // Append the modal element to the DOM
      document.body.appendChild(modal);

      // Show the modal
      modal.style.display = "block";

      // Close the modal when the close button is clicked
      let closeButton = modal.querySelector(".close");
      closeButton.addEventListener("click", function () {
        modal.style.display = "none";
      });
    }
  });
});

// //Share popup modal 1

// // Get the modal
// var modal = document.getElementsByClassName("shareModal")[0];

// // Get the button that opens the modal
// var btn = document.getElementsByClassName("myPopupBtn")[0];

// // Get the <span> element that closes the modals
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modals
// //btn.onclick = function () {
// //modal.style.display = "block";
// //};

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // Close the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

//Share popup modals end

//Check login status when create button is clicked, & redirect to create pin page
const createBtn = document.getElementById("createBtn");
const mobileCreateBtn = document.getElementById("createBtnMobile");

function checkLoginStatus() {
  // Get the JWT token from local storage
  const token = localStorage.getItem("jwtToken");

  // Check if the user is logged in
  if (token) {
    try {
      // Attempt to decode the JWT token to get the user information
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const userId = decodedToken.userId; // Example: extract the user ID from the JWT payload

      // Redirect the user to the create pin page
      window.location.href = "create-pin.html";
    } catch (err) {
      // If there was an error decoding the token, assume the user is not logged in
      console.error("Error decoding JWT token:", err);

      // Redirect the user to the login page
      window.location.href = "login.html";
    }
  } else {
    // Redirect the user to the login page
    window.location.href = "login.html";
  }
}

//Comment box close
// Use DOMContentLoaded event to add the event listener
document.addEventListener('DOMContentLoaded', function () {
  // Get the reference to the closeComment element after it is loaded in the DOM
  var closeComment = document.getElementById("closeComment");
  
  // Check if the element exists before adding the event listener
  if (closeComment) {
    closeComment.addEventListener("click", function () {
      var commentBox = document.getElementById("commentBox");
      commentBox.style.display = "none";
    });
  }
});


/*const commentBox = document.getElementById("commentBox");
//const closeComment = document.getElementById("closeComment");

//closeComment.addEventListener("click", function () {
  commentBox.style.display = "none";
});
*/
//Add to home screen/install prompt
// Wait for 1 minute (60,000 milliseconds) after the first visit
setTimeout(function () {
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
  });

  window.addEventListener("appinstalled", (evt) => {
    deferredPrompt.prompt().then((choice) => {
      if (choice === "accepted") {
        console.log("User accepted the install prompt.");
        document.querySelector(".install-prompt").remove();
      } else {
        console.log("User dismissed the install prompt.");
      }
    });
  });

  function showInstallButton() {
    const installButton = document.querySelector(".install-yes");
    const closeButton = document.querySelector(".install-no");
    const installPrompt = document.querySelector(".install-prompt");
    installButton.classList.add("show");
    closeButton.classList.add("show");
    installPrompt.style.display = "block";
    installButton.addEventListener("click", () => {
      deferredPrompt.prompt().then((choice) => {
        if (choice === "accepted") {
          console.log("User accepted the install prompt.");
        } else {
          console.log("User dismissed the install prompt.");
        }
      });
    });
    closeButton.addEventListener("click", closePrompt);
  }

  function closePrompt() {
    deferredPrompt = null;
    const installButton = document.querySelector(".install-yes");
    const closeButton = document.querySelector(".install-no");
    const installPrompt = document.querySelector(".install-prompt");
    installButton.classList.remove("show");
    closeButton.classList.remove("show");
    installPrompt.style.display = "none";
  }

  // Trigger the "beforeinstallprompt" event after 1 minute
  setTimeout(() => {
    const event = new Event("beforeinstallprompt");
    window.dispatchEvent(event);
  }, 60000);

  // Prevent Chrome from automatically prompting the user to install a PWA

}, 0);

// Remove the install prompt after the user has installed the app
window.addEventListener("appinstalled", function (evt) {
  document.querySelector(".install-prompt").remove();
});
///Add to home screen/install prompt end
////

//Like button 
function setupLikeButtons() {
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((likeButton) => {
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
  });
}

// Call the setupLikeButtons function inside the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  setupLikeButtons();
});
//Like buttons end


//Follow popup on mobile
// Music
function setupMobileFollowModal() {
  let followModal = document.getElementById("mobileFollowModal");
  let mobileFollowBtn = document.getElementById("followPopup");
  let close = document.getElementsByClassName("mobileclose")[0];

  mobileFollowBtn.addEventListener("click", function () {
    followModal.style.display = "block";
    console.log("Clicked");
  });

  close.onclick = function () {
    followModal.style.display = "none";
  };
}

// Call the setupMobileFollowModal function inside the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  setupMobileFollowModal();
});

// Others
function setupFollowMeModals() {
  var followMeBtns = document.querySelectorAll(".followPopup");
  var followMeModals = document.querySelectorAll(".mobileFollowModal");
  var closeMes = document.querySelectorAll(".closeme");

  // Attach event listeners for each followMeBtn element
  followMeBtns.forEach(function (followMeBtn, index) {
    followMeBtn.onclick = function () {
      followMeModals[index].style.display = "block";
    };
  });

  // Attach event listeners for each closeMe element
  closeMes.forEach(function (closeMe, index) {
    closeMe.onclick = function () {
      followMeModals[index].style.display = "none";
    };
  });
}

// Call the setupFollowMeModals function inside the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  setupFollowMeModals();
});


// Live popup
// Function to show the live modal
function showLiveModal() {
  var liveModal = document.getElementById("liveModal");
  liveModal.style.display = "block";
  liveModal.style.zIndex = "9999";
}

// Function to close the live modal
function closeLiveModal() {
  var liveModal = document.getElementById("liveModal");
  liveModal.style.display = "none";
}

// Event delegation for dynamically added elements
document.addEventListener("click", function (event) {
  // Check if the clicked element is the "liveButton"
  if (event.target && event.target.id === "liveButton") {
    showLiveModal();
  }

  // Check if the clicked element is the "closeLive"
  if (event.target && event.target.id === "closeLive") {
    closeLiveModal();
  }
});

// Live popup on mobile
// Function to show the live modal
function showLiveModalMobile() {
  var liveModalMobile = document.getElementById("liveModalMobile");
  liveModalMobile.style.display = "block";
}

// Function to close the live modal
function closeLiveModalMobile() {
  var liveModalMobile = document.getElementById("liveModalMobile");
  liveModalMobile.style.display = "none";
}

// Event delegation for dynamically added elements
document.addEventListener("click", function (event) {
  var targetElement = event.target;

  // Check if the clicked element or its parent is the "mobileLiveBtn"
  if (
    targetElement.id === "mobileLiveBtn" ||
    targetElement.parentElement.id === "mobileLiveBtn"
  ) {
    showLiveModalMobile();
  }

  // Check if the clicked element or its parent is the "closeLiveMobile"
  if (
    targetElement.id === "closeLiveMobile" ||
    targetElement.parentElement.id === "closeLiveMobile"
  ) {
    closeLiveModalMobile();
  }
});

//Live popup ends

//More icons button

function moreIcons() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-icons");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<img src="Images/more-icon.svg" />`;
    moreIcons.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreIcons.style.display = "inline";
  }
}

// Call the moreIcons() function inside the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  moreIcons();
});

//////
//Time posted
document.addEventListener("DOMContentLoaded", function () {
  // Function to update the time dynamically
  function updateTimePosted() {
    var timePinned = moment("20230129", "YYYYMMDD").fromNow();
    var timePostedElement = document.getElementById("timePosted");

    if (timePostedElement) {
      timePostedElement.innerHTML = timePinned;
    } else {
      console.error("Element with ID 'timePosted' not found.");
    }
  }

  // Call the function once when the page loads to update the time for the initially loaded content
  updateTimePosted();
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to update the time dynamically
  function updateTimePosted() {
    var timePinned = moment("20220210", "YYYYMMDD").fromNow();

    // Get the element with the class "timePosted"
    var timePostedElement = document.querySelector("#timePosted");

    // Check if the element exists before setting its innerHTML
    if (timePostedElement) {
      timePostedElement.innerHTML = timePinned;
    } else {
      console.error("Element with class 'timePosted' not found.");
    }
  }

  // Call the function once when the page loads to update the time for the initially loaded content
  updateTimePosted();
});

//Actual time posted ends

// Add an event listener to the search button
document.addEventListener('DOMContentLoaded', function() {
  // Code inside this function will run after the DOM is fully loaded

  var searchButton = document.getElementById("search-btn");
  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");

  searchButton.addEventListener("click", function () {
    // Get the search query from the search input
    var query = searchInput.value;

    // Make an API call to the search endpoint with the search query
    fetch(
      "https://api.snapme-ng.com/api/v1/search?q=" + encodeURIComponent(query)
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Clear the search results list
        searchResults.innerHTML = "";

        // Loop through the search results and add them to the list
        data.results.forEach(function (result) {
          var li = document.createElement("li");
          li.textContent = result.title;
          searchResults.appendChild(li);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  });
});


//Search on mobile
// Get the search toggle button, search container, search input, search button, and search results list
document.addEventListener('DOMContentLoaded', function () {
  // Your code here...
  var mobileSearchToggleBtn = document.getElementById("mobileSearchToggleBtn");
  var mobileSearchContainer = document.getElementById("mobile-search-container");
  mobileSearchContainer.style.display = "none";
  var mobileSearchInput = document.getElementById("mobile-search-input");
  var mobileSearchBtn = document.getElementById("mobile-search-btn");
  var mobileSearchResults = document.getElementById("mobile-search-results");

  // Add an event listener to the search toggle button
  mobileSearchToggleBtn.addEventListener("click", function () {
    // Toggle the visibility of the search container
    if (mobileSearchContainer.style.display === "none") {
      mobileSearchContainer.style.display = "block";
      mobileSearchToggleBtn.innerHTML = "&times;";
      mobileSearchToggleBtn.style.position = "absolute";
      mobileSearchToggleBtn.style.top = "40px";
      mobileSearchToggleBtn.style.left = "5px";
      mobileSearchToggleBtn.style.fontSize = "15px";
      mobileSearchBtn.style.position = "absolute";
      mobileSearchBtn.style.top = "-5px";
      mobileSearchBtn.style.right = "8px";
    } else {
      mobileSearchContainer.style.display = "none";
      mobileSearchToggleBtn.innerHTML =
        '<img src="Images/search-black.svg" alt="" />';
      mobileSearchInput.value = "";
      mobileSearchResults.innerHTML = "";
      mobileSearchToggleBtn.style.position = "";
      mobileSearchToggleBtn.style.top = "";
      mobileSearchToggleBtn.style.left = "";
      mobileSearchBtn.style.top = "";
      mobileSearchToggleBtn.style.fontSize = "";
    }
  });

  // Add an event listener to the search button
  mobileSearchBtn.addEventListener("click", function () {
    // Get the search query from the search input
    var mobileQuery = mobileSearchInput.value;

    // Make an API call to the search endpoint with the search query
    fetch(
      "https://api.snapme-ng.com/api/v1/search?q=" +
        encodeURIComponent(mobileQuery)
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Clear the search results list
        mobileSearchResults.innerHTML = "";

        // Loop through the search results and add them to the list
        data.mobileResults.forEach(function (mobileResult) {
          var li = document.createElement("li");
          li.textContent = mobileResult.title;
          mobileSearchResults.appendChild(li);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
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
});

// Search catalogs index on mobile ends
////

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
////

//Submit comment fetch API
const submitCommentBtn = document.getElementById("submitComment");

document.addEventListener("DOMContentLoaded", function() {
  // Get the submitCommentBtn element
  const submitCommentBtn = document.getElementById("submitCommentBtn");

  // Add event listener on the submitCommentBtn
  document.addEventListener("DOMContentLoaded", function() {
    const submitCommentBtn = document.getElementById("submitCommentBtn");
  
    submitCommentBtn.addEventListener("click", function () {
      const commentInput = document.getElementById("commentInput").value;
      if (!commentInput) {
        // Handle empty comment input error
        return;
      }
  
      const comment = {
        text: commentInput,
      };
  
      fetch(`https://api.snapme-ng.com/api/v1/pins/:postId/:commentId`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
        body: JSON.stringify(comment),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  
});

//Submit comment
////---------

//Promote popup after 10 minutes
document.addEventListener("DOMContentLoaded", function() {
  function openPromotePopup() {
    document.getElementById("promotePopup").style.display = "block";
  }

  function closePromote() {
    document.getElementById("promotePopup").style.display = "none";
  }

  // Delay the opening of the popup by 10 minutes
  setTimeout(openPromotePopup, 600000); // 10 minutes = 10 * 60 * 1000 milliseconds

  document.getElementById("closePromote").addEventListener("click", closePromote);
});
//Promote notification popup
////
//Get pin details
document.addEventListener("DOMContentLoaded", function() {
  const cardImgTops = document.querySelectorAll(".card-img-top");
  cardImgTops.forEach((cardImgTop) => {
  cardImgTop.addEventListener("click", pinDetails);
});

  function pinDetails() {
    // Fetch the pin data from the backend
    fetch(`https://api.snapme-ng.com/api/v1/pin-details/:pinId`)
      .then((response) => response.json())
      .then((pin) => {
        // Create a container element to display the pin details
        const container = document.createElement("div");

        // Create elements for the pin caption, author, and content
        const caption = document.createElement("h1");
        const author = document.createElement("p");
        const content = document.createElement("p");
        const media = document.createElement(
          pin.media.type === "image" ? "img" : "video"
        );

        // Set the text content of the elements to the pin data
        caption.textContent = pin.caption;
        author.textContent = `By ${pin.author}`;
        content.textContent = pin.content;

        // Set the attributes of the media element
        media.src = pin.media.url;
        media.alt = pin.caption;

        // Add the elements to the container
        container.appendChild(caption);
        container.appendChild(author);
        container.appendChild(content);
        container.appendChild(media);

        // Add the container to the UI
        document.body.appendChild(container);
      })
      .catch((error) => console.error(error));
  }
});
//Get pin details end

//Play video when scrolled into view
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video");
  let isPlayingMap = new Map();

  function updateVideoState(video) {
    const videoTop = video.getBoundingClientRect().top;
    const videoBottom = video.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    const isPlaying = isPlayingMap.get(video) || false;

    if (videoTop < viewportHeight && videoBottom >= 0 && !isPlaying) {
      video.play();
      isPlayingMap.set(video, true);
    } else if (videoTop >= viewportHeight || videoBottom < 0) {
      video.pause();
      isPlayingMap.set(video, false);
    }
  }

  window.addEventListener("scroll", () => {
    videos.forEach((video) => {
      updateVideoState(video);
    });
  });

  // Additional logic to update video states on initial load
  videos.forEach((video) => {
    updateVideoState(video);
  });
});

// Video Controls 
// Play/pause button
document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll(".video");
  const playPauseButtons = document.querySelectorAll(".playPauseButton");

  playPauseButtons.forEach((button, index) => {
    const video = videos[index];
    // Play the video at the start
    video.play();

    button.addEventListener("click", function() {
      const isPlaying = button.dataset.playing === "true";

      if (isPlaying) {
        video.pause();
        button.dataset.playing = "false";
        button.innerHTML = `<img src="Images/play-button-white.svg" alt="Play" />`;
      } else {
        video.play();
        button.dataset.playing = "true";
        button.innerHTML = `<img src="Images/pause-white.svg" alt="Pause" />`;
      }
    });
  });
});

  
// Volume range
document.addEventListener("DOMContentLoaded", function() {
  const volumeRanges = document.querySelectorAll(".volume-range");
  const videos = document.querySelectorAll(".video");

  volumeRanges.forEach((volumeRange, index) => {
    const video = videos[index];

    volumeRange.addEventListener("input", () => {
      video.volume = volumeRange.value;
    });
  });
});

// Mute/unmute button
document.addEventListener("DOMContentLoaded", function() {
  const muteButtons = document.querySelectorAll(".mute-btn");
  const videos = document.querySelectorAll(".video");

  muteButtons.forEach((muteBtn, index) => {
    const video = videos[index];

    muteBtn.addEventListener("click", () => {
      const isMuted = muteBtn.dataset.muted === "true";

      if (isMuted) {
        video.muted = false;
        muteBtn.dataset.muted = "false";
        muteBtn.innerHTML = `<img src="Images/mute-white.svg" alt="Mute" />`;
        video.volume = parseFloat(video.dataset.savedVolume);
      } else {
        video.muted = true;
        muteBtn.dataset.muted = "true";
        muteBtn.innerHTML = `<img src="Images/unmute-white.svg" alt="Unmute" />`;
        video.dataset.savedVolume = video.volume;
        video.volume = 0;
      }
    });
  });
});

// Skip back and skip ahead controls
document.addEventListener("DOMContentLoaded", function() {
  const skipBackButtons = document.querySelectorAll(".skip-back-btn");
  const skipAheadButtons = document.querySelectorAll(".skip-ahead-btn");
  const videos = document.querySelectorAll(".video");

  skipBackButtons.forEach((skipBackBtn, index) => {
    const video = videos[index];

    skipBackBtn.addEventListener("click", () => {
      video.currentTime -= 10;
    });
  });

  skipAheadButtons.forEach((skipAheadBtn, index) => {
    const video = videos[index];

    skipAheadBtn.addEventListener("click", () => {
      video.currentTime += 10;
    });
  });
});

//Video speed control 
// Get the playback speed select element
document.addEventListener("DOMContentLoaded", function() {
  const speedSelects = document.querySelectorAll(".speed-select");
  const videos = document.querySelectorAll(".video");

  speedSelects.forEach((speedSelect, index) => {
    const video = videos[index];

    speedSelect.addEventListener("change", () => {
      video.playbackRate = speedSelect.value;
    });
  });
});

//Show/Hide footer menu on scroll
document.addEventListener("DOMContentLoaded", function () {
  var oldScrollpos = window.scrollY;

  function handleScroll() {
    var newScrollPos = window.scrollY;

    if (oldScrollpos < newScrollPos) {
      document.querySelector(".mobileView").classList.remove("hide");
    } else {
      document.querySelector(".mobileView").classList.add("hide");
    }

    oldScrollpos = newScrollPos;
  }

  window.addEventListener("scroll", handleScroll);
});

//Mobile catalog tabs swipe control
const swipeContainer = document.getElementById("swipe-container");
const swipeContent = document.getElementbyId("swipe-item");

let touchStartX = 0;
let touchEndX = 0;
let isFixed = false;

swipeContainer.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

swipeContainer.addEventListener("touchmove", (event) => {
  touchEndX = event.touches[0].clientX;

  // If the user has scrolled past the top of the swipe container, fix it to the top
  if (swipeContainer.getBoundingClientRect().top <= 0 && !isFixed) {
    swipeContainer.classList.add("fixed");
    isFixed = true;
  }
});

swipeContainer.addEventListener("touchend", () => {
  if (touchEndX < touchStartX) {
    swipeContainer.style.transform = `translateX(0)`;
  } else if (touchEndX > touchStartX) {
    swipeContainer.style.transform = `translateX(0)`;
  }
});

window.addEventListener("scroll", () => {
  // If the user scrolls back to the top of the page, unfix the swipe container
  if (window.scrollY <= 0 && isFixed) {
    swipeContainer.classList.remove("fixed");
    swipeContainer.style.transform = "";
    isFixed = false;
  }
});
////

//Show/hide top menu on scroll
var pastScrollpos = window.scrollY;
window.onscroll = function () {
  var presentScrollPos = window.scrollY;
  if (pastScrollpos < presentScrollPos) {
    document.querySelector(".navmenu").classList.remove("hide");
  } else {
    document.querySelector(".navmenu").classList.add("hide");
  }
  pastScrollpos = presentScrollPos;
};

////
//Follow user for first post
document.addEventListener("DOMContentLoaded", function() {
  const followUserBtn = document.querySelector("#followBtn");

  followUserBtn.addEventListener("click", () => {
    const username = document.querySelector(".username").textContent;

    fetch(`https://api.snapme-ng.com/api/v1/${username}/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // Replace with the actual name of your JWT token in localStorage
      },
      credentials: "include",
      mode: "cors",
      // Add any other necessary options here
    })
      .then((response) => {
        if (response.ok) {
          followUserBtn.textContent = "Following";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

////
// Follow user other posts
document.addEventListener("DOMContentLoaded", function() {
  const followBtn = document.querySelector("#followBtn");

  followBtn.addEventListener("click", () => {
    const username = document.querySelector(".username").textContent;

    fetch(`https://api.snapme-ng.com/api/v1/${username}/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      credentials: "include",
      mode: "cors",
      // Add any other necessary options here
    })
      .then((response) => {
        if (response.ok) {
          followBtn.textContent = "Following";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const followBtn = document.getElementById("followBtn");

  followBtn.addEventListener("click", () => {
    const username = document.querySelector(".username").textContent;
    // Your code for handling the follow button click event goes here
    // For example, you can do something with the 'username' variable
    console.log("Clicked on Follow button for user:", username);
  });
});
/////