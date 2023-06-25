//Time posted
// var timePinned = moment("20230129", "YYYYMMDD").fromNow();
// timePinned = document.getElementById("timePosted").innerHTML = timePinned;

// var timePinned = moment("20221229", "YYYYMMDD").fromNow();
// document.getElementsByClassName("timePosted")[0].innerHTML = timePinned;

// var timePinned = moment("20230302", "YYYYMMDD").fromNow();
// document.getElementsByClassName("timePosted")[1].innerHTML = timePinned;
///

///
// Social media share modal
//Share post 1

// Get the modal
// var userModal = document.getElementsByClassName("shareUserModal")[0];

// // Get the button that opens the modal
// var userBtn = document.getElementsByClassName("sharePopupBtn")[0];

// // Get the <span> element that closes the modals
// var span = document.getElementsByClassName("closeX")[0];

// // When the user clicks the button, open the modals
// userBtn.onclick = function () {
//   userModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   userModal.style.display = "none";
// };

// // Close the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     userModal.style.display = "none";
//   }
// };

// //Share post 2

// // Get the modal
// var userModal = document.getElementsByClassName("shareUserModal")[1];

// // Get the button that opens the modal
// var userBtn = document.getElementsByClassName("sharePopupBtn")[1];

// // Get the <span> element that closes the modals
// var span = document.getElementsByClassName("closeX")[1];

// // When the user clicks the button, open the modals
// userBtn.onclick = function () {
//   userModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   userModal.style.display = "none";
// };

// // Close the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     userModal.style.display = "none";
//   }
// };

// //Share post 3

// // Get the modal
// var userModal = document.getElementsByClassName("shareUserModal")[2];

// // Get the button that opens the modal
// var userBtn = document.getElementsByClassName("sharePopupBtn")[2];

// // Get the <span> element that closes the modals
// var span = document.getElementsByClassName("closeX")[2];

// // When the user clicks the button, open the modals
// userBtn.onclick = function () {
//   userModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   userModal.style.display = "none";
// };

// // Close the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     userModal.style.display = "none";
//   }
// };
// ////
// //Comment Popup
// const commentBtn = document.getElementById("commentBtn");
// const commentBox = document.getElementById("commentBox");
// const closeComment = document.getElementById("closeComment");

// commentBtn.addEventListener("click", function () {
//   commentBox.style.display = "block";
// });

// closeComment.addEventListener("click", function () {
//   commentBox.style.display = "none";
// });
// //Comment box popup first pin end
// ////
// //Comment box popup for second pin
// var commentBtn2 = document.getElementsByClassName("commentBtn")[0];
// var commentBox2 = document.getElementsByClassName("commentBox")[0];
// var closeCommentBtn2 = document.getElementsByClassName("closeComment")[0];

// commentBtn2.addEventListener("click", function () {
//   commentBox2.style.display = "block";
// });

// closeCommentBtn2.addEventListener("click", function () {
//   commentBox2.style.display = "none";
// });
// //Comment box popup for second pin end
// ////
// ////
// //Comment box popup for third pin
// var commentBtn3 = document.getElementsByClassName("commentBtn")[1];
// var commentBox3 = document.getElementsByClassName("commentBox")[1];
// var closeCommentBtn3 = document.getElementsByClassName("closeComment")[1];

// commentBtn3.addEventListener("click", function () {
//   commentBox3.style.display = "block";
// });

// closeCommentBtn3.addEventListener("click", function () {
//   commentBox3.style.display = "none";
// });
// //Comment box popup for third pin end
// //Signedin Users Content
// //Check signed in status on page
// // Get the button element
// const accountSettingsBtn = document.getElementById("accountSettings");

// // Add an event listener to the button
// accountSettingsBtn.addEventListener("click", () => {
//   // Get the JWT token from local storage
//   const token = localStorage.getItem("jwtToken");

//   // Check if the user is logged in
//   if (token) {
//     try {
//       // Attempt to decode the JWT token to get the user information
//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       const userId = decodedToken.userId; // Example: extract the user ID from the JWT payload

//       // Redirect the user to the create pin page
//       window.location.href = "settings.html";
//     } catch (err) {
//       // If there was an error decoding the token, assume the user is not logged in
//       console.error("Error decoding JWT token:", err);

//       // Redirect the user to the login page
//       window.location.href = "login.html";
//     }
//   } else {
//     // Redirect the user to the login page
//     window.location.href = "login.html";
//   }
// });

// //Check signed in status of user on create button clicked - mobile

// ////
// //Like button 1
// const likeButton = document.getElementsByClassName("like-button")[0];
// let isLiked = false;

// likeButton.addEventListener("click", () => {
//   if (isLiked) {
//     likeButton.innerHTML = '<i class="far fa-heart"></i>';
//     likeButton.style.color = "#fff";
//     isLiked = false;
//   } else {
//     likeButton.innerHTML = '<i class="fas fa-heart"></i>';
//     likeButton.style.color = "#fff";
//     isLiked = true;
//   }
// });

// //Like button 2
// const likeButton2 = document.getElementsByClassName("like-button")[1];
// let isLiked2 = false;

// likeButton2.addEventListener("click", () => {
//   if (isLiked2) {
//     likeButton2.innerHTML = '<i class="far fa-heart"></i>';
//     likeButton2.style.color = "#fff";
//     isLiked2 = false;
//   } else {
//     likeButton2.innerHTML = '<i class="fas fa-heart"></i>';
//     likeButton2.style.color = "#fff";
//     isLiked2 = true;
//   }
// });

// //Like button 3
// const likeButton3 = document.getElementsByClassName("like-button")[2];
// let isLiked3 = false;

// likeButton3.addEventListener("click", () => {
//   if (isLiked3) {
//     likeButton3.innerHTML = '<i class="far fa-heart"></i>';
//     likeButton3.style.color = "#fff";
//     isLiked3 = false;
//   } else {
//     likeButton3.innerHTML = '<i class="fas fa-heart"></i>';
//     likeButton3.style.color = "#fff";
//     isLiked3 = true;
//   }
// });

const api6 = `http://localhost:5000/api/v1`;

function getJwt() {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  if (!jwtToken) {
    // redirect user to login page if jwtToken doesn't exist
    localStorage.setItem("returnUrl", window.location.href);
    return undefined;
  }
  return jwtToken;
}

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const username = getQueryParam("username");

// const token = getJwt();

async function getRandomImage() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=N4MqS0O1YuELy-OhQ0ZH44j8NPTqjPlYO2tPAvXvM6I"
  );
  const data = await response.json();
  const imageUrl = data.urls.regular;
  return imageUrl;
}

// async function getRandomImage() {
//   const response = await fetch("https://source.unsplash.com/random");
//   const imageUrl = response.url;
//   return imageUrl;
// }

////
//Get user profile
window.addEventListener("load", function () {
  if (!username) {
    Swal.fire("Ooops!", `Search Query does not contain username!`, "error");
    window.location.href = "index.html";
    return;
  }
  // Make an HTTP request to the timeline API endpoint
  fetch(`${api6}/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getJwt() ? `Bearer ${getJwt()}` : undefined,
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
      const userId = user.user?._id;
      const newTitle = user.user.username;
      document.title = `Snapme || @${newTitle}`;

      const userElement = document.getElementById("mainContent");

      userElement.innerHTML = `
      <div id="profile-card">
      <div class="top">
        <div class="backArrow" onclick="goBack()">
          <i class="fa-solid fa-arrow-left-long"></i>
        </div>

        <div class="logout">
          <button onclick="logOut()" id="logOut">
            <i class="fa-solid fa-power-off"></i>
          </button>
        </div>
      </div>
      <div class="banner"s>
    </div>
    
      <div class="mainUserDetails">
        <div class="userInfo">
          <img src="${
            user.user.picture ===
            "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
              ? `Images/user image.svg`
              : user.user.picture
          }" class="profilePic" />
          <div class="userInfoInner">
            <div class="userNameBadge">
              <h3 id="userID">${user.user.username}</h3>
              ${
                user.user.role === "subscribed"
                  ? ' <img id="subscribed-badge" src="Images/verified.svg" alt="verified badge"/>'
                  : ""
              }
            </div>
            <p>${user.user.name}</p>
          </div>
        </div>

         <div class="userButtons">
         ${
           user.user.username !== user?.currentUser
             ? `<button
              id="followUserBtn"
              class="follow"
              onclick="followThisUser('${user.user.username}')"
            >
            ${
              user.user.followers.includes(user?.currentId)
                ? "Following &#10003;"
                : "Follow +"
            }
            </button>`
             : ""
         }
  
            <button id="accountSettings" onclick="window.location.href='settings.html?username=${
              user.user.username
            }'" class="editButton" style="${
        user.user.username === user.currentUser
          ? `display: block`
          : `display: none`
      }">
              Account Settings
            </button>
          </div>
          
      </div>

      <ul class="user-List">
        <li>${
          user.user?._id === user?.currentId && !user.user?.occupation
            ? `<a href=updateProfile.html?id=${user.user?._id} style="color: white;">Add your occupation</a><span style="color: red;"> (IMPORTANT!)</span>`
            : user.user?._id !== user?.currentId && !user.user?.occupation
            ? ""
            : user.user?.occupation
        }</li>
        <li>${
          user.user?._id === user?.currentId && !user.user?.country
            ? `<a href=updateProfile.html?id=${user.user?._id} style="color: white;">Add your country </a><span style="color: red;"> (IMPORTANT!)</span>`
            : user.user?._id !== user?.currentId && !user.user?.country
            ? ""
            : user.user?.country
        }</li>
        <li id="followersCount">Followers: ${user.user.followers.length}</li>
        <li id="followingCount">Following: ${user.user.following.length}</li>
      </ul>

      <div class="userTabs" id="">
        <button id="CataloguedBtn" onclick="myPosts('${
          user.user?._id
        }')">Cataloged</button>
        <button onclick="likedPosts('${user.user?._id}')">Liked</button>
        <button onclick="savedPosts('${user.user?._id}')">Saved</button>
        <button onclick="followedPosts('${user.user?._id}')">Followed</button>
      </div>

      <div id="mobileUserTabs">
        <div id="swipe-container">
          <div class="swipe-item">
            <button onclick="myPosts('${user.user?._id}')"  id="CataloguedBtn">
              Cataloged
            </button>
          </div>

          <div class="swipe-item">
            <button onclick="likedPosts('${
              user.user?._id
            }')" class="">Liked</button>
          </div>

          <div class="swipe-item">
            <button onclick="savedPosts('${
              user.user?._id
            }')" class="">Saved</button>
          </div>

          <div class="swipe-item">
            <button onclick="followedPosts('${
              user.user?._id
            }')" class="">Followed</button>
          </div>
        </div>
      </div>
    </div>
    <div id="image-cards" class="container-fluid text-center">
      <div class="row myrow" id="userPins">
      </div>
    </div>  

      `;
      async function renderBanner() {
        const banner = document.querySelector(".banner");
        banner.style.backgroundImage = user.user.coverPicture
          ? `url(${user.user.coverPicture})`
          : `url('${await getRandomImage()}')`;
      }

      renderBanner();

      const cataloguedBtn = document.getElementById("CataloguedBtn");

      cataloguedBtn.focus();
      myPosts(userId);
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.log(error);
    });
});

////
//Log out
// var logoutBtn = document.getElementById("logout-button");
// logoutBtn.addEventListener("click", logOut);

function logOut() {
  document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "login.html";
}
////
// Cataloged (my posts) in username

let activeTab = "";

function myPosts(id) {
  if (activeTab === "catalogBtn") {
    return;
  }

  (() => {
    let currentPage = 1;
    let allPostsLoaded = false;
    let isLoading = false;

    const showLoadingSpinner = () => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.remove();
      }

      const spinnerElement = document.createElement("div");
      spinnerElement.id = "loadingSpinner";
      spinnerElement.textContent = "Loading...";
      document.getElementById("userPins").appendChild(spinnerElement);
    };

    const hideLoadingSpinner = () => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.remove();
      }
    };

    const loadPosts = () => {
      if (isLoading || allPostsLoaded) {
        return;
      }

      isLoading = true;
      showLoadingSpinner();

      fetch(`${api6}/pins/mypins/${id}?params=${currentPage}`, {
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
          if (posts.length === 0) {
            allPostsLoaded = true;

            if (currentPage === 1) {
              const postElement = document.getElementById("userPins");

              while (postElement.firstChild) {
                postElement.firstChild.remove();
              }

              // if (!document.getElementById("userPins").hasChildNodes()) {
              const messageElement = document.createElement("div");
              messageElement.classList.add("col-12");
              messageElement.innerHTML = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nothing to see here...</h5>
                  <p class="card-text">There are no pins to display here yet...</p>
                  <button type="button" class="btn btn-primary" onclick="location.href='create-pin.html'">Create new pin</button>
                  <button type="button" class="btn btn-secondary" onclick="location.href='friends.html'">Make friends</button>
                </div>
              </div>`;
              postElement.appendChild(messageElement);
              // return;
              // }
            }
          } else {
            const postElement = document.getElementById("userPins");

            while (postElement.firstChild) {
              postElement.firstChild.remove();
            }

            posts.forEach((post) => {
              const postId = post._id;

              const postContent = document.createElement("div");
              postContent.classList.add("col");

              postContent.innerHTML = `
              <div class="card">
              <div class="post-img">
              ${
                post.media && post.media.length > 0
                  ? post.media[0].endsWith(".mp4")
                    ? `<video class="card-img-top" controls autoplay muted onclick="window.location = 'pin-details.html?id=${postId}'">
                        <source src="${post.media[0]}" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>`
                    : `<img src="${post.media[0]}" class="card-img-top" onclick="window.location = 'pin-details.html?id=${postId}'" />`
                  : `<p onclick="window.location = 'pin-details.html?id=${postId}'">${post.message}</p>`
              }              
                <div class="userDetails">
                  <a href="user.html?username=${post.user.username}">
                    <img src="${post.user.picture}" width="30px" />
                    <span style="font-size: 13px">${post.user.username}</span>
                    ${
                      post.user.role === "subscribed"
                        ? '<img src="Images/verified.svg" width="20px" />'
                        : ""
                    }
                    <span style="font-size: 12px" id="timePosted">${moment(
                      post.date
                    ).fromNow()}</span>
                  </a>
                </div>
  
                <h4>${post?.caption}</h4>
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
                      /><img
                        src="Images/send.svg"
                        alt="Comment"
                        width="20px"
                      />
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
                    <button onclick="likePost()" class="like-button">
                      <i class="far fa-heart" style="color: #fff"></i>
                    </button>
                    <p class="text-white">${post.likes?.length}</p>
                  </li>
                  <li>
                    <button id="commentBtn">
                      <i class="fa-solid fa-comment"></i>
                      <p class="text-white">${post.comment?.length}</p>
                    </button>
                  </li>
                  <li>
                    <button class="sharePopupBtn">
                      <i class="fa-solid fa-share"></i>
                      <p class="text-white">${post.shares}</p>
                    </button>
                  </li>
                  
                  <div class="shareUserModal" class="modal">
                    <div class="modalContent mobileModalContent">
                      <span class="closeX">&times;</span>
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
                          class="linkedinShare"
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
                          <p>${post.saves}</p>
                        </li>
                        <li onclick="downloadPost()">
                          <i class="fa-solid fa-download"></i>
                          <p>${post.downloads}</p>
                        </li>
                        <li onclick="deletePost()">
                          <i class="fa-solid fa-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button onclick="moreIcons()" id="myBtn">
                    <img src="Images/more-icon.svg" width="20px" />
                  </button>
                </div>
              </div>
              
            </div>
              `;
              postElement.appendChild(postContent);
              activeTab = "catalogBtn";
            });
          }
          isLoading = false;
          hideLoadingSpinner();
        })
        .catch((error) => {
          console.error(error);
          isLoading = false;
          hideLoadingSpinner();
          Swal.fire("Ooops!", `${error}`, "error");
        });
    };

    loadPosts();

    window.addEventListener("scroll", () => {
      if (
        !allPostsLoaded &&
        !isLoading &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight
      ) {
        if (document.getElementById("userPins").hasChildNodes()) {
          currentPage++;
          loadPosts();
        }
      }
    });
  })();
}

//Liked posts
function likedPosts(id) {
  if (activeTab === "likedBtn") {
    return;
  }

  (() => {
    let currentPage = 1;
    let allPostsLoaded = false;
    let isLoading = false;

    const showLoadingSpinner = () => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.remove();
      }

      const spinnerElement = document.createElement("div");
      spinnerElement.id = "loadingSpinner";
      spinnerElement.textContent = "Loading...";
      document.getElementById("userPins").appendChild(spinnerElement);
    };

    const hideLoadingSpinner = () => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.remove();
      }
    };

    const loadPosts = () => {
      if (isLoading || allPostsLoaded) {
        return;
      }

      isLoading = true;
      showLoadingSpinner();

      fetch(`${api6}/pins/liked-pins/${id}?params=${currentPage}`, {
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
          if (posts.length === 0) {
            allPostsLoaded = true;

            if (currentPage === 1) {
              const postElement = document.getElementById("userPins");

              while (postElement.firstChild) {
                postElement.firstChild.remove();
              }

              // if (!document.getElementById("userPins").hasChildNodes()) {
              const messageElement = document.createElement("div");
              messageElement.classList.add("col-12");
              messageElement.innerHTML = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nothing to see here...</h5>
                  <p class="card-text">There are no pins to display here yet...</p>
                  <button type="button" class="btn btn-primary" onclick="location.href='index.html'">Visit Pins</button>
                </div>
              </div>`;
              postElement.appendChild(messageElement);
              // return;
              // }
            }
          } else {
            const postElement = document.getElementById("userPins");

            while (postElement.firstChild) {
              postElement.firstChild.remove();
            }

            posts.forEach((post) => {
              const postId = post._id;

              const postContent = document.createElement("div");
              postContent.classList.add("col");

              postContent.innerHTML = `
              <div class="card">
              <div class="post-img">
              ${
                post.media[0].endsWith(".mp4")
                  ? `<video class="card-img-top" controls autoplay muted onclick="window.location = 'pin-details.html?id=${postId}'">
                  <source src="${post?.media[0]}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>`
                  : `<img src="${post.media[0]}" class="card-img-top" onclick="window.location = 'pin-details.html?id=${postId}'" />`
              }
                <div class="userDetails">
                  <a href="user.html?username=${post.user.username}">
                    <img src="${post.user.picture}" width="30px" />
                    <span style="font-size: 13px">${post.user.username}</span>
                    ${
                      post.user.role === "subscribed"
                        ? '<img src="Images/verified.svg" width="20px" />'
                        : ""
                    }
                    <span style="font-size: 12px" id="timePosted">${moment(
                      post.date
                    ).fromNow()}</span>
                  </a>
                </div>
  
                <h4>${post?.caption}</h4>
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
                      /><img
                        src="Images/send.svg"
                        alt="Comment"
                        width="20px"
                      />
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
                    <button onclick="likePost()" class="like-button">
                      <i class="far fa-heart" style="color: #fff"></i>
                    </button>
                    <p class="text-white">${post.likes?.length}</p>
                  </li>
                  <li>
                    <button id="commentBtn">
                      <i class="fa-solid fa-comment"></i>
                      <p class="text-white">${post.comment?.length}</p>
                    </button>
                  </li>
                  <li>
                    <button class="sharePopupBtn">
                      <i class="fa-solid fa-share"></i>
                      <p class="text-white">${post.shares}</p>
                    </button>
                  </li>
                  
                  <div class="shareUserModal" class="modal">
                    <div class="modalContent mobileModalContent">
                      <span class="closeX">&times;</span>
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
                          class="linkedinShare"
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
                          <p>${post.saves}</p>
                        </li>
                        <li onclick="downloadPost()">
                          <i class="fa-solid fa-download"></i>
                          <p>${post.downloads}</p>
                        </li>
                        <li onclick="deletePost()">
                          <i class="fa-solid fa-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button onclick="moreIcons()" id="myBtn">
                    <img src="Images/more-icon.svg" width="20px" />
                  </button>
                </div>
              </div>
              
            </div>
              `;
              postElement.appendChild(postContent);
              activeTab = "likedBtn";
            });
          }
          isLoading = false;
          hideLoadingSpinner();
        })
        .catch((error) => {
          console.error(error);
          isLoading = false;
          hideLoadingSpinner();
          Swal.fire("Ooops!", `${error}`, "error");
        });
    };

    loadPosts();

    window.addEventListener("scroll", () => {
      if (
        !allPostsLoaded &&
        !isLoading &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight
      ) {
        if (document.getElementById("userPins").hasChildNodes()) {
          currentPage++;
          loadPosts();
        }
      }
    });
  })();
}

//Saved posts
function savedPosts(id) {
  if (activeTab === "savedBtn") {
    return;
  }

  (() => {
    let currentPage = 1;
    let allPostsLoaded = false;
    let isLoading = false;

    const showLoadingSpinner = () => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.remove();
      }

      const spinnerElement = document.createElement("div");
      spinnerElement.id = "loadingSpinner";
      spinnerElement.textContent = "Loading...";
      document.getElementById("userPins").appendChild(spinnerElement);
    };

    const hideLoadingSpinner = () => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.remove();
      }
    };

    const loadPosts = () => {
      if (isLoading || allPostsLoaded) {
        return;
      }

      isLoading = true;
      showLoadingSpinner();

      fetch(`${api6}/pins/saved-pins/${id}?params=${currentPage}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: getJwt() ? `Bearer ${getJwt()}` : undefined,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 404) {
            return response.json().then((data) => {
              throw new Error(data.message || "Error: " + response.statusText);
            });
          }
        })
        .then((posts) => {
          if (posts.length === 0) {
            allPostsLoaded = true;

            if (currentPage === 1) {
              const postElement = document.getElementById("userPins");

              while (postElement.firstChild) {
                postElement.firstChild.remove();
              }

              // if (!document.getElementById("userPins").hasChildNodes()) {
              const messageElement = document.createElement("div");
              messageElement.classList.add("col-12");
              messageElement.innerHTML = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nothing to see here...</h5>
                  <p class="card-text">There are no pins to display here yet...</p>
                  <button type="button" class="btn btn-primary" onclick="location.href='index.html'">Visit Pins</button>
                </div>
              </div>`;
              postElement.appendChild(messageElement);
              // return;
              // }
            }
          } else {
            const postElement = document.getElementById("userPins");

            while (postElement.firstChild) {
              postElement.firstChild.remove();
            }

            posts.forEach((post) => {
              const postId = post._id;

              const postContent = document.createElement("div");
              postContent.classList.add("col");

              postContent.innerHTML = `
              <div class="card">
              <div class="post-img">
              ${
                post.media[0].endsWith(".mp4")
                  ? `<video class="card-img-top" controls autoplay muted onclick="window.location = 'pin-details.html?id=${postId}'">
                  <source src="${post?.media[0]}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>`
                  : `<img src="${post.media[0]}" class="card-img-top" onclick="window.location = 'pin-details.html?id=${postId}'" />`
              }
                <div class="userDetails">
                  <a href="user.html?username=${post.user.username}">
                    <img src="${post.user.picture}" width="30px" />
                    <span style="font-size: 13px">${post.user.username}</span>
                    ${
                      post.user.role === "subscribed"
                        ? '<img src="Images/verified.svg" width="20px" />'
                        : ""
                    }
                    <span style="font-size: 12px" id="timePosted">${moment(
                      post.date
                    ).fromNow()}</span>
                  </a>
                </div>
  
                <h4>${post?.caption}</h4>
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
                      /><img
                        src="Images/send.svg"
                        alt="Comment"
                        width="20px"
                      />
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
                    <button onclick="likePost()" class="like-button">
                      <i class="far fa-heart" style="color: #fff"></i>
                    </button>
                    <p class="text-white">${post.likes?.length}</p>
                  </li>
                  <li>
                    <button id="commentBtn">
                      <i class="fa-solid fa-comment"></i>
                      <p class="text-white">${post.comment?.length}</p>
                    </button>
                  </li>
                  <li>
                    <button class="sharePopupBtn">
                      <i class="fa-solid fa-share"></i>
                      <p class="text-white">${post.shares}</p>
                    </button>
                  </li>
                  
                  <div class="shareUserModal" class="modal">
                    <div class="modalContent mobileModalContent">
                      <span class="closeX">&times;</span>
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
                          class="linkedinShare"
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
                          <p>${post.saves}</p>
                        </li>
                        <li onclick="downloadPost()">
                          <i class="fa-solid fa-download"></i>
                          <p>${post.downloads}</p>
                        </li>
                        <li onclick="deletePost()">
                          <i class="fa-solid fa-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button onclick="moreIcons()" id="myBtn">
                    <img src="Images/more-icon.svg" width="20px" />
                  </button>
                </div>
              </div>
              
            </div>
              `;
              postElement.appendChild(postContent);
              activeTab = "savedBtn";
            });
          }
          isLoading = false;
          hideLoadingSpinner();
        })
        .catch((error) => {
          console.error(error);
          isLoading = false;
          hideLoadingSpinner();
          Swal.fire("Ooops!", `${error}`, "error");
        });
    };

    loadPosts();

    window.addEventListener("scroll", () => {
      if (
        !allPostsLoaded &&
        !isLoading &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight
      ) {
        if (document.getElementById("userPins").hasChildNodes()) {
          currentPage++;
          loadPosts();
        }
      }
    });
  })();
}

//Followed posts
function followedPosts(id) {
  if (activeTab === "followedBtn") {
    return;
  }

  (() => {
    let currentPage = 1;
    let allPostsLoaded = false;
    let isLoading = false;

    const showLoadingSpinner = () => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.remove();
      }

      const spinnerElement = document.createElement("div");
      spinnerElement.id = "loadingSpinner";
      spinnerElement.textContent = "Loading...";
      document.getElementById("userPins").appendChild(spinnerElement);
    };

    const hideLoadingSpinner = () => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.remove();
      }
    };

    const loadPosts = () => {
      if (isLoading || allPostsLoaded) {
        return;
      }

      isLoading = true;
      showLoadingSpinner();

      fetch(`${api6}/users/following/pins/${id}?params=${currentPage}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: getJwt() ? `Bearer ${getJwt()}` : undefined,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 404) {
            return response.json().then((data) => {
              throw new Error(data.message || "Error: " + response.statusText);
            });
          }
        })
        .then((posts) => {
          if (posts.length === 0) {
            allPostsLoaded = true;

            if (currentPage === 1) {
              const postElement = document.getElementById("userPins");

              while (postElement.firstChild) {
                postElement.firstChild.remove();
              }

              // if (!document.getElementById("userPins").hasChildNodes()) {
              const messageElement = document.createElement("div");
              messageElement.classList.add("col-12");
              messageElement.innerHTML = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Nothing to see here...</h5>
                  <p class="card-text">There are no pins to display here yet...</p>
                  <button type="button" class="btn btn-primary" onclick="location.href='index.html'">Visit Pins</button>
                </div>
              </div>`;
              postElement.appendChild(messageElement);
              // return;
              // }
            }
          } else {
            const postElement = document.getElementById("userPins");

            while (postElement.firstChild) {
              postElement.firstChild.remove();
            }

            posts.forEach((post) => {
              const postId = post._id;

              const postContent = document.createElement("div");
              postContent.classList.add("col");

              postContent.innerHTML = `
              <div class="card">
              <div class="post-img">
              ${
                post.media[0].endsWith(".mp4")
                  ? `<video class="card-img-top" controls autoplay muted onclick="window.location = 'pin-details.html?id=${postId}'">
                  <source src="${post?.media[0]}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>`
                  : `<img src="${post.media[0]}" class="card-img-top" onclick="window.location = 'pin-details.html?id=${postId}'" />`
              }
                <div class="userDetails">
                  <a href="user.html?username=${post.user.username}">
                    <img src="${post.user.picture}" width="30px" />
                    <span style="font-size: 13px">${post.user.username}</span>
                    ${
                      post.user.role === "subscribed"
                        ? '<img src="Images/verified.svg" width="20px" />'
                        : ""
                    }
                    <span style="font-size: 12px" id="timePosted">${moment(
                      post.date
                    ).fromNow()}</span>
                  </a>
                </div>
  
                <h4>${post?.caption}</h4>
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
                      /><img
                        src="Images/send.svg"
                        alt="Comment"
                        width="20px"
                      />
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
                    <button onclick="likePost()" class="like-button">
                      <i class="far fa-heart" style="color: #fff"></i>
                    </button>
                    <p class="text-white">${post.likes?.length}</p>
                  </li>
                  <li>
                    <button id="commentBtn">
                      <i class="fa-solid fa-comment"></i>
                      <p class="text-white">${post.comment?.length}</p>
                    </button>
                  </li>
                  <li>
                    <button class="sharePopupBtn">
                      <i class="fa-solid fa-share"></i>
                      <p class="text-white">${post.shares}</p>
                    </button>
                  </li>
                  
                  <div class="shareUserModal" class="modal">
                    <div class="modalContent mobileModalContent">
                      <span class="closeX">&times;</span>
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
                          class="linkedinShare"
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
                          <p>${post.saves}</p>
                        </li>
                        <li onclick="downloadPost()">
                          <i class="fa-solid fa-download"></i>
                          <p>${post.downloads}</p>
                        </li>
                        <li onclick="deletePost()">
                          <i class="fa-solid fa-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button onclick="moreIcons()" id="myBtn">
                    <img src="Images/more-icon.svg" width="20px" />
                  </button>
                </div>
              </div>
              
            </div>
              `;
              postElement.appendChild(postContent);
              activeTab = "followedBtn";
            });
          }
          isLoading = false;
          hideLoadingSpinner();
        })
        .catch((error) => {
          console.error(error);
          isLoading = false;
          hideLoadingSpinner();
          Swal.fire("Ooops!", `${error}`, "error");
        });
    };

    loadPosts();

    window.addEventListener("scroll", () => {
      if (
        !allPostsLoaded &&
        !isLoading &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight
      ) {
        if (document.getElementById("userPins").hasChildNodes()) {
          currentPage++;
          loadPosts();
        }
      }
    });
  })();
}

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
  var moreIcons = document.getElementById("more-iconsII");
  var btnText = document.getElementById("myBtnII");

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

//More icons III button
function moreIconsIII() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsIII");
  var btnText = document.getElementById("myBtnIII");

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
//More icons IV button
function moreIconsIV() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsIV");
  var btnText = document.getElementById("myBtnIV");

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

//More icons V button
function moreIconsV() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsV");
  var btnText = document.getElementById("myBtnV");

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

//More icons VI button
function moreIconsVI() {
  var dots = document.getElementById("dots");
  var moreIcons = document.getElementById("more-iconsVI");
  var btnText = document.getElementById("myBtnVI");

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

////
//Swipe tabs on mobile
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
    swipeContainer.scrollBy({ left: 50, behavior: "smooth" });
  } else if (touchEndX > touchStartX) {
    swipeContainer.scrollBy({ left: -50, behavior: "smooth" });
  }
});

/////

//Go back to previous page
function goBack() {
  window.history.back();
}
