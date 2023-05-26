// //Post date and time
// var postDate = moment("20012023, 15:16", "DDMMYYYY, h:mm a");
// var postDate = postDate.toLocaleString();
// document.getElementById("postDate").innerHTML = postDate;

// //Post date and time on mobile
// var postDate = moment("20012023, 15:16", "DDMMYYYY, h:mm a");
// var postDate = postDate.toLocaleString();
// document.getElementById("postDateMobile").innerHTML = postDate;

//Pin details Share
// Get the modal
var pinModal = document.getElementById("sharePinModal");

// Get the button that opens the modal
var pinBtn = document.getElementById("sharePinBtn");

// Get the <span> element that closes the modals
var closeThis = document.getElementById("closeZ");

// When the user clicks the button, open the modals
// pinBtn.onclick = function () {
//   pinModal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
// closeThis.onclick = function () {
//   pinModal.style.display = "none";
// };

// // Close the modal by clicking outside the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     pinModal.style.display = "none";
//   }
// };

const api2 = `http://localhost:5000/api/v1`;

function checkJwt(location) {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  console.log(jwtToken);
  if (jwtToken && location === "profile") {
    window.location.href = "/user.html";
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
    return undefined;
  }
  return jwtToken;
}

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const id = getQueryParam("id");

const token = getJwt();

window.addEventListener("load", function () {
  if (!id) {
    Swal.fire("Ooops!", `Post not found!`, "error");
    window.location.href = "timeline.html";
    return;
  }
  console.log(id);
  // Make an HTTP request to the timeline API endpoint
  fetch(`${api2}/pin-details/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getJwt() ? `Bearer ${getJwt()}` : undefined,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 401) {
        return response.json().then((data) => {
          throw new Error(data.message || "Error: " + response.statusText);
        });
      } else if (response.status === 500) {
        return response.json().then((data) => {
          throw new Error(data.message || "Error: " + response.statusText);
        });
      }
    })
    .then((post) => {
      console.log(post);
      console.log(post.post.user);
      console.log(post.username);

      const pinDetailsElement = document.getElementById("pinCard");

      let mediaHTML = "";
      if (Array.isArray(post.post.media) && post.post.media.length > 0) {
        // Determine if the media is an image or video
        const isImage =
          post.post.media[0].endsWith(".jpg") ||
          post.post.media[0].endsWith(".jpeg") ||
          post.post.media[0].endsWith(".png") ||
          post.post.media[0].endsWith(".svg") ||
          post.post.media[0].endsWith(".tiff") ||
          post.post.media[0].endsWith(".webp") ||
          post.post.media[0].endsWith(".gif");
        const isVideo =
          post.post.media[0].endsWith(".mp4") ||
          post.post.media[0].endsWith(".avi") ||
          post.post.media[0].endsWith(".mov") ||
          post.post.media[0].endsWith(".mkv") ||
          post.post.media[0].endsWith(".3gp") ||
          post.post.media[0].endsWith(".flv") ||
          post.post.media[0].endsWith(".wmv") ||
          post.post.media[0].endsWith(".webm");

        // If the media is an image, create an img tag and append it to the mediaHTML string
        if (isImage) {
          mediaHTML += `<img src="${post.post.media[0]}" class="post-image" onclick="openFullscreen(this)" />`;
        }

        // If the media is a video, create a video tag and append it to the mediaHTML string
        if (isVideo) {
          mediaHTML += `<video src="${post.post.media[0]}" class="post-video" onclick="openFullscreen(this)" controls></video>`;
        }

        // If there are more than one media, create a slider
        if (post.post.media.length > 1) {
          mediaHTML = `
            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                ${post.post.media
                  .map((media, index) => {
                    const isImage =
                      media.endsWith(".jpg") ||
                      media.endsWith(".jpeg") ||
                      media.endsWith(".png") ||
                      media.endsWith(".svg") ||
                      media.endsWith(".tiff") ||
                      media.endsWith(".webp") ||
                      media.endsWith(".gif");
                    const isVideo =
                      media.endsWith(".mp4") ||
                      media.endsWith(".avi") ||
                      media.endsWith(".mov") ||
                      media.endsWith(".mkv") ||
                      media.endsWith(".3gp") ||
                      media.endsWith(".flv") ||
                      media.endsWith(".wmv") ||
                      media.endsWith(".webm");
                    const type = isImage ? "image" : isVideo ? "video" : null;
                    if (type) {
                      return `
                        <div class="swiper-slide" onclick="openFullscreen(this)">
                          ${
                            type === "image"
                              ? `<img src="${media}" class="post-image"/>`
                              : `<video class="video" loop>
                            <source src="${media}" type="video/mp4" />
                          </video>
                          <div id="my-video-controls" class="my-video-controls">
                            <button id="play-pause-btn">
                              <img src="Images/pause-button.svg" alt="Pause/Play" />
                            </button>
                            <input
                              type="range"
                              id="volume-range"
                              min="0"
                              max="1"
                              step="0.1"
                              value="1"
                            />
                            <button id="mute-btn">
                              <img src="Images/unmute button.svg" alt="Unmute/Mute" />
                            </button>
                            <select id="speed-select">
                              <option value="1">1x</option>
                              <option value="0.5">0.5x</option>
                              <option value="1.5">1.5x</option>
                              <option value="2">2x</option>
                            </select>
                            <button id="skip-back-btn">
                              <img src="Images/skip-backward.svg" alt="<<" />
                            </button>
                            <button id="skip-ahead-btn">
                              <img src="Images/skip-forward.svg" alt=">>" />
                            </button>
                          </div>`
                          }
                        </div>`;
                    }
                  })
                  .join("")}
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>`;
        }
      }

      pinDetailsElement.innerHTML = `
        <div class="img">
        ${mediaHTML}

          <div class="mobileIcons">
            <img
              src="Images/back arrow.svg"
              onclick="history.back()"
            />
            <img src="Images/Snapme icon white.png" class="white-logo" alt="logo" />
          </div>
          <div class="content-top-mobile">
            <div class="userDetails">
              <img src="${post.post.user.picture}" />
              <p
                class="azizy_username"
                onclick="window.location='user.html?user=${
                  post.post.user.username
                }'"
              >
                ${post.post.user.username}
              </p>
            </div>
            <button
              id="followUserBtn"
              class="follow"
              onclick="followThisUser()"
            >
              Follow +
            </button>
          </div>
        </div>
        <div class="content">
          <div class="content-top">
            <div class="userDetails">
              <img
                src="${post.post.user.picture}"
                onclick="window.location='user.html?user=${
                  post.post.user.username
                }'"
              />
              <div class="text">
                <p
                  class="azizy_username"
                  onclick="window.location='user.html?user=${
                    post.post.user.username
                  }'"
                >
                ${post.post.user.username}
                </p>
                <span id="postDate">${moment(post.post.date)
                  .locale("en")
                  .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}</span>
              </div>
            </div>
            <button
              id="followUserButton"
              class="follow"
              onclick=""
            >
              Follow +
            </button>
          </div>
          
          <div class="content-mid">
            <h3 class="postCaption">${post.post.caption}</h3>
            <span id="postDateMobile"></span>

            <div class="show-more">
              <ul class="card-title icons-list">
                <li>
                  <button>
                    <i class="fa-solid fa-eye"></i>
                    <p class="text-white">${post.post.views}</p>
                  </button>
                </li>
                <li class="likeDiv">
                  <button onclick="likePost()" id="like-button">
                    <i class="far fa-heart"></i>
                  </button>
                  <p class="text-white">${post.post?.likes?.length}</p>
                </li>
                <li>
                <a href="#commentForm">
                  <button id="commentCount">
                    <i class="fa-solid fa-comment"></i>
                    <p class="text-white">${post.post?.comment?.length}</p>
                  </button>
                  </a>
                </li>
                <li>
                  <button id="sharePinBtn">
                    <i class="fa-solid fa-share"></i>
                    <p class="text-white">${post.post.shares}</p>
                  </button>
                </li>

                <!--The modal-->
                <div id="sharePinModal" class="modal">
                  <!-- Modal content -->
                  <div class="modalContent mobileModalContent">
                    <span id="closeZ">&times;</span>
                    <p>Share this post</p>
                    <div class="share_popup">
                      <a
                        class="facebookShare"
                        href="https://www.facebook.com/sharer/sharer.php?u=https://snapme-ng.com/pin-details/"
                        target="_blank"
                        ><img src="Images/facebook new.svg"
                      /></a>
                      <a
                        class=""
                        href="https://twitter.com/share?text=I found this awesome post on Snapme! Check it out!&url=https://snapme-ng.com/pin-details/&hashtags=fashion,music,sports,Snapme"
                        data-size="large"
                        target="_blank"
                      >
                        <img src="Images/twitter new.svg" alt="Twitter"
                      /></a>

                      <a
                        class="whatsappShare"
                        href="https://api.whatsapp.com/send/?text=I+found+this+awesome+post+on+Snapme.+Check+it+out!+https://snapme-ng.com/pin-details/"
                        target="_blank"
                      >
                        <img src="Images/whatsapp new.svg" alt="WhatsApp" />
                      </a>

                      <a
                        class="telegramShare"
                        href="https://t.me/share/url?url=https://snapme-ng.com/pin-details&text=I found this awesome post on Snapme! Check it out!"
                        target="_blank"
                      >
                        <img
                          src="Images/telegram new.svg"
                          alt="Telegram share"
                        />
                      </a>

                      <a
                        class="linkedinShare"
                        href="https://linkedin.com/shareArticle?mini=true&url=https://snapme-ng.com/pin-details/"
                        target="_blank"
                      >
                        <img src="Images/linkedin.svg" alt="Linkedin" />
                      </a>

                      <a
                        class="redditShare"
                        href="http://www.reddit.com/submit?url=https://snapme-ng.com/pin-details/&text=I found this awesome post on Snapme! Check it out!"
                        target="_blank"
                      >
                        <img src="Images/reddit.svg" alt="Reddit" />
                      </a>
                    </div>
                  </div>
                </div>

                <li>
                  <button onclick="savePost()">
                    <i class="fa-solid fa-bookmark"></i>
                    <p class="text-white">${post.post.saves}</p>
                  </button>
                </li>
                <li>
                  <button onclick="downloadPost()">
                    <i class="fa-solid fa-download"></i>
                    <p class="text-white">${post.post.downloads}</p>
                  </button>
                </li>
              </ul>
            </div>
            <p class="postBody">
  ${
    post.post.message.length <= 100
      ? post.post.message
      : post.post.message.substring(0, 100) +
        "<span id='dots'>...</span><span id='more-text' style='display: none'>" +
        post.post.message.substring(100) +
        "</span>"
  }
</p>
<button onclick="readMore()" id="myBtn" style="font-weight: bold; display: ${
        post.post.message.length <= 100 ? "none" : "block"
      }">
  Show more
</button>

          </div>
          <div class="content-bottom">
            <p class="text-white">Comments</p>

            <div id="dynamicComment">
  ${
    post.post.comment.length > 0
      ? post.post.comment
          .map(
            (comment) => `
      <div id="comment-${comment.id}" class="marcdiss-box">
        <button onclick="window.location = 'user.html?user=${comment.username}'">
          <img src="${comment.userImage}" width="50px" alt="${comment.username} Profile Picture" />
        </button>
        <div class="marcdiss">
          <p class="username">${comment.username}</p>
          <p class="alias">${comment.text}</p>

          <ul id="signedInContent2">
            <li onclick="likeComment('${comment.id}')">Like</li>
            <li onclick="replyComment('${comment.id}')">Reply</li>
            <li onclick="deleteReply('${comment.id}', '${comment.replies?.id}')">Remove</li>
            <li onclick="deleteComment('${comment.id}')">Delete</li>
          </ul>
        </div>
      </div>
    `
          )
          .join("")
      : `<p style="color: white">No comments yet!</p>`
  }
</div>

         ${
           token
             ? `<form class="form-input-button">

              <div class="commenterProfile">
                <input type="button" onclick="user.html?user=${post.username}">
                <div class="imageContainer">
                <img src="${post.user}" alt="${post.username} Profile pic" />
                </div>
              </div>  

                <input type="text" name="text" placeholder="Add your comment..." id="commentInput" required/>

                <div id="commentButton">
                <button type="button" id="sendCommentBtn" onclick="commentOnPost()">
      <i class="fas fa-paper-plane"></i>
    </button>
                </div>
            </form>`
             : `<p style="color: white; font-size: 10px;">You need to <a href="login.html">login</a> first to be able to make comments!</p>`
         }
          </div>
        </div>
        `;
      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.log(error);
    });
});

function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    /* Safari */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    /* IE11 */
    element.msRequestFullscreen();
  }
}

//Pin details post like
const likeBtns = document.querySelector("#like-button");
let isLiked = false;

likeBtns.addEventListener("click", () => {
  if (isLiked) {
    likeBtns.innerHTML = '<i class="far fa-heart"></i>';
    isLiked = false;
  } else {
    likeBtns.innerHTML = '<i class="fas fa-heart"></i>';
    isLiked = true;
  }
});
////
//Like post fetch API
const likeBtn = document.getElementById("like-button");
//Add fetch API to button
likeBtn.addEventListener("click", likePost);

//Put request to like a post
function likePost() {
  fetch(`${api2}/pins/${id}/like`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Post liked successfully");
    })
    .catch((error) => console.error(error));
}

//Add comment
function commentOnPost() {
  const text = document.getElementById("commentInput").value;
  const container = document.getElementById("dynamicComment");

  if (!text) {
    return;
  }
  console.log(text);

  fetch(`${api2}/pins/comment/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
    body: JSON.stringify({
      text,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error(`${response.status} ${response.statusText}`);
      } else if (response.status === 401) {
        throw new Error(
          `You need to login first: <br> ${response.statusText}! <br> <a href="login.html">click here to login</a>`
        );
      } else if (response.status === 500) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then((data) => {
      console.log(data);

      const commentElement = document.createElement("div");
      commentElement.classList.add("marcdiss-box");

      commentElement.innerHTML = `
  ${
    data.length !== 0
      ? data
          .map(
            (comment) => `
            <button onclick="window.location = 'user.html?user=${comment.username}'">
              <img src="${comment.userImage}" width="50px" alt="${comment.username} Profile Picture" />
            </button>
            <div class="marcdiss">
              <p class="username">${comment.username}</p>
              <p class="alias">${comment.text}</p>
              <ul id="signedInContent2">
                <li onclick="likeComment('${comment.id}')">Like</li>
                <li onclick="replyComment('${comment.id}')">Reply</li>
                <li onclick="deleteReply('${comment.id}', '${comment.replies?.id}')">Remove</li>
                <li onclick="deleteComment('${comment.id}')">Delete</li>
              </ul>
            </div>
          `
          )
          .join("")
      : "<p>No comments yet!</p>"
  }
`;
      container.appendChild(commentElement);
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.error(error);
    });
}

//Catalogs for you pins share
//Share 1
var btn = document.getElementsByClassName("myPopupBtn")[0];
var modal = document.getElementsByClassName("shareModal")[0];
var closeThisNow = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeThisNow.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 2
var btn = document.getElementsByClassName("myPopupBtn")[1];
var modal = document.getElementsByClassName("shareModal")[1];
var closeThisNow = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeThisNow.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 3
var btn = document.getElementsByClassName("myPopupBtn")[2];
var modal = document.getElementsByClassName("shareModal")[2];
var closeThisNow = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeThisNow.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Share 4
var btn = document.getElementsByClassName("myPopupBtn")[3];
var modal = document.getElementsByClassName("shareModal")[3];
var closeThisNow = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modals
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeThisNow.onclick = function () {
  modal.style.display = "none";
};

// Close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Catalogs for you pins share
////
//Signedin Users Content
//Check signed in status on page
// window.addEventListener("load", () => {
//   // Get the JWT token from local storage
//   const token = localStorage.getItem("jwtToken");

//   if (token) {
//     try {
//       // Attempt to decode the JWT token to get the user information
//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       const userId = decodedToken.userId; // Example: extract the user ID from the JWT payload

//       // Display the content for signed-in users
//       const signedInContent = document.getElementById("signedInContent");
//       const signedInContent2 = document.getElementById("signedInContent2");
//       signedInContent.style.display = "block";
//       signedInContent2.style.display = "block";
//     } catch (err) {
//       // If there was an error decoding the token, assume the user is not signed in
//       console.error("Error decoding JWT token:", err);

// Redirect the user to the login page
//       window.location.href = "login.html";
//     }
//   } else {
//     // Redirect the user to the login page
//     window.location.href = "login.html";
//   }
// });

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
  const viewportHeight = window.innerHeight;

  if (video2Top < viewportHeight && video2Bottom >= 0 && !isPlaying2) {
    video2.play();
    isPlaying2 = true;
  } else if (video2Top >= viewportHeight || video2Bottom < 0) {
    video2.pause();
    isPlaying2 = false;
  }
});
//Video played when scrolled into view end
////
//Suggested catalogs like buttons
//Like button for suggested catalog 1
const likeButton1 = document.getElementsByClassName("like-button")[0];
let isLiked1 = false;

likeButton1.addEventListener("click", () => {
  if (isLiked1) {
    likeButton1.innerHTML = `<i class="far fa-heart"></i>`;
    likeButton1.style.color = "#fff";
    isLiked1 = false;
  } else {
    likeButton1.innerHTML = `<i class="fas fa-heart"></i>`;
    likeButton1.style.color = "#fff";
    isLiked1 = true;
  }
});

//Like button for suggested catalog 2
const likeButton2 = document.getElementsByClassName("like-button")[1];
let isLiked2 = false;

likeButton2.addEventListener("click", () => {
  if (isLiked2) {
    likeButton2.innerHTML = `<i class="far fa-heart"></i>`;
    likeButton2.style.color = "#fff";
    isLiked2 = false;
  } else {
    likeButton2.innerHTML = `<i class="fas fa-heart"></i>`;
    likeButton2.style.color = "#fff";
    isLiked2 = true;
  }
});

//Like button for suggested 3
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

//Like button for suggested 4
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
////
//Follow catalog popup on mobile
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
////
//Time posted
var timePinned = moment("20230129", "YYYYMMDD").fromNow();
document.getElementById("timePosted").innerHTML = timePinned;

var timePinned = moment("20220210", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[0].innerHTML = timePinned;

var timePinned = moment("20221229", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[1].innerHTML = timePinned;

var timePinned = moment("20230228", "YYYYMMDD").fromNow();
document.getElementsByClassName("timePosted")[2].innerHTML = timePinned;

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
//Follow catalog popup on mobile

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
////
//Follow/unfollow user on desktop
let isFollowingDesktop = false;

const thisFollowButton = document.getElementById("followUserButton");
function toggleFollowUser() {
  if (isFollowingDesktop) {
    // unfollow logic
    thisFollowButton.textContent = "Follow +";
  } else {
    // follow logic
    thisFollowButton.textContent = "Following";
  }

  isFollowingDesktop = !isFollowingDesktop;
}

thisFollowButton.addEventListener("click", toggleFollowUser);

//Follow/unfollow user on mobile
let isFollowing = false;
const followBtn = document.getElementById("followUserBtn");
function toggleFollowUser() {
  if (isFollowing) {
    // unfollow logic
    followBtn.textContent = "Follow +";
  } else {
    // follow logic
    followBtn.textContent = "Following";
  }

  isFollowing = !isFollowing;
}

followBtn.addEventListener("click", toggleFollowUser);

////
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
    searchToggleBtn.innerHTML = '<img src="Images/search icon.svg" alt="" />';
    searchInput.value = "";
    searchResults.innerHTML = "";
  }
});

// Add an event listener to the search button
searchBtn.addEventListener("click", function () {
  // Get the search query from the search input
  var query = searchInput.value;

  // Make an API call to the search endpoint with the search query
  fetch("http://localhost:5000/api/v1/search?q=" + encodeURIComponent(query))
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

//Search on mobile
// Get the search toggle button, search container, search input, search button, and search results list
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
    mobileSearchBtn.style.top = "7px";
  } else {
    mobileSearchContainer.style.display = "none";
    mobileSearchToggleBtn.innerHTML =
      '<img src="Images/search icon.svg" alt="" />';
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
    "http://localhost:5000/api/v1/search?q=" + encodeURIComponent(mobileQuery)
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
// Search catalogs index on mobile ends
////

////
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
//More icons for first pin
function moreIcons5() {
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
////
//Show/Hide footer menu on scroll
var oldScrollpos = window.pageYOffset;
window.onscroll = function () {
  var newScrollPos = window.pageYOffset;
  if (oldScrollpos < newScrollPos) {
    document.querySelector("#mobileFooter").classList.remove("hide");
  } else {
    document.querySelector("#mobileFooter").classList.add("hide");
  }
  oldScrollpos = newScrollPos;
};

////
//Commenter profile
// function commenterProfile() {
//   fetch(`${api2}/:username`)
//     .then((response) => response.json())
//     .then((data) => {
//       // Display the user profile data on the page
//       const profileContainer = document.querySelector("#profile-container");
//       profileContainer.innerHTML = `
//       <h2>${data.name}</h2>
//       <p>Email: ${data.email}</p>
//       <p>Age: ${data.age}</p>
//       <p>Location: ${data.location}</p>
//     `;
//     })
//     .catch((error) => {
//       // Handle any errors that occurred during the request
//       console.error("Error fetching user profile:", error);
//     });
// }

//Like comment
function likeComment(commentId) {
  if (token === undefined) window.location.href = "login.html";
  fetch(`${api2}/pins/${id}/like/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      } else if (response.status === 500) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    })
    .then((data) => {
      console.log(`${data.message}`);
    })
    .catch((error) => console.error(error));
}

//Reply Comment
function replyComment(commentId) {
  if (token === undefined) window.location.href = "login.html";
  // const text = document.getElementById("text").value;

  fetch(`${api2}/pins/${id}/comment/${commentId}/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
    // body: JSON.stringify({
    //   text,
    // }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      } else if (response.status === 401) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      } else if (response.status === 500) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    })
    .then((data) => {
      console.log(`${data.message}`);
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.error(error);
    });
}

//Remove/delete reply
function deleteReply(commentId, replyId) {
  if (token === undefined) window.location.href = "login.html";
  fetch(`${api2}/pins/${id}/${commentId}/delete/${replyId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error(`Error: ${response.statusText}`);
      } else if (response.status === 401) {
        throw new Error(`Error: ${response.statusText}`);
      } else if (response.status === 500) {
        throw new Error(`Error: ${response.statusText}`);
      }
    })
    .then((data) => {
      Swal.fire("Success", `${data.message}`, "success");
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.error(error);
    });
}

//Delete Comment
function deleteComment(commentId) {
  if (token === undefined) window.location.href = "login.html";
  fetch(`${api2}/pins/${id}/delete/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        const commentElement = document.getElementById(`comment-${commentId}`);
        if (commentElement) {
          commentElement.remove();
        }
        return response.json();
      } else if (response.status === 404) {
        throw new Error(`Error: ${response.statusText}`);
      } else if (response.status === 401) {
        throw new Error(`Error: ${response.statusText}`);
      } else if (response.status === 500) {
        throw new Error(`Error: ${response.statusText}`);
      }
    })
    .then((data) => {
      Swal.fire("Success", `${data.message}`, "success");
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.error(error);
    });
}
//Delete comment end
/////

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
    swipeContainer.scrollBy({ left: 50, behavior: "smooth" });
  } else if (touchEndX > touchStartX) {
    swipeContainer.scrollBy({ left: -50, behavior: "smooth" });
  }
});
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
////
//Active catalog button on click on mobile
var previousButton;

var buttons = document.querySelectorAll(".swipe-item");
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
//Active catalog button on click on mobile
////

//Like button for mobile footer
const footerLike = document.querySelector(".mobileLike");
const img = footerLike.querySelector("img");
let isLikedFooter = false;

footerLike.addEventListener("click", () => {
  if (isLikedFooter) {
    img.setAttribute("src", "Images/like empty.svg");
    isLikedFooter = false;
  } else {
    img.setAttribute("src", "Images/liked filled.svg");
    isLikedFooter = true;
  }
});
////
////
//Comment box popup for first catalogs for you pin
const commentBtn = document.getElementById("commentBtn");
const commentBox = document.getElementById("commentBox");
const closeComment = document.getElementById("closeComment");

commentBtn.addEventListener("click", function () {
  commentBox.style.display = "block";
});

closeComment.addEventListener("click", function () {
  commentBox.style.display = "none";
});
//Comment box popup first catalogs for you pin end
////
//Comment box popup for second catalogs for you pin
var commentBtn2 = document.getElementsByClassName("commentBtn")[0];
var commentBox2 = document.getElementsByClassName("commentBox")[0];
var closeCommentBtn2 = document.getElementsByClassName("closeComment")[0];

commentBtn2.addEventListener("click", function () {
  commentBox2.style.display = "block";
});

closeCommentBtn2.addEventListener("click", function () {
  commentBox2.style.display = "none";
});
//Comment box popup for second catalogs for you pin end
////
//Comment box popup for third catalogs for you pin
var commentBtn3 = document.getElementsByClassName("commentBtn")[1];
var commentBox3 = document.getElementsByClassName("commentBox")[1];
var closeCommentBtn3 = document.getElementsByClassName("closeComment")[1];

commentBtn3.addEventListener("click", function () {
  commentBox3.style.display = "block";
});

closeCommentBtn3.addEventListener("click", function () {
  commentBox3.style.display = "none";
});
//Comment box popup for third catalogs for you pin end
////
//Comment box popup for fourth catalogs for you pin
var commentBtn4 = document.getElementsByClassName("commentBtn")[2];
var commentBox4 = document.getElementsByClassName("commentBox")[2];
var closeCommentBtn4 = document.getElementsByClassName("closeComment")[2];

commentBtn4.addEventListener("click", function () {
  commentBox4.style.display = "block";
});

closeCommentBtn4.addEventListener("click", function () {
  commentBox4.style.display = "none";
});
//Comment box popup for fourth catalogs for you pin end
////
//Comment box popup for 5th pin
var commentBtn5 = document.getElementsByClassName("commentBtn")[3];
var commentBox5 = document.getElementsByClassName("commentBox")[3];
var closeCommentBtn5 = document.getElementsByClassName("closeComment")[3];

commentBtn5.addEventListener("click", function () {
  commentBox5.style.display = "block";
});

closeCommentBtn5.addEventListener("click", function () {
  commentBox5.style.display = "none";
});
//Comment box popup for 5th pin end
////

//Get request to fetch user profile
// function thisUser() {
//   fetch("http://localhost:5000/api/v1/:username")
//     .then((response) => response.json())
//     .then((user) => {
//       console.log(user.name);
//       console.log(user.email);
//       console.log(user.bio);
//       console.log(user.avatarUrl);
//     })
//     .catch((error) => console.error(error));
// }
// thisUser();
////

// function pinDetails() {
//   // Fetch the pin data from the backend
//   fetch(`http://localhost:5000/api/v1/pin-details/:pinId`)
//     .then((response) => response.json())
//     .then((pin) => {
//       // Create a container element to display the pin details
//       const container = document.createElement("div");

//       // Create elements for the pin caption, author, and content
//       const caption = document.createElement("h1");
//       const author = document.createElement("p");
//       const content = document.createElement("p");
//       const media = document.createElement(
//         pin.media.type === "image" ? "img" : "video"
//       );

//       // Set the text content of the elements to the pin data
//       caption.textContent = pin.caption;
//       author.textContent = `By ${pin.author}`;
//       content.textContent = pin.content;

//       // Set the attributes of the media element
//       media.src = pin.media.url;
//       media.alt = pin.caption;

//       // Add the elements to the container
//       container.appendChild(caption);
//       container.appendChild(author);
//       container.appendChild(content);
//       container.appendChild(media);

//       // Add the container to the UI
//       document.body.appendChild(container);
//     })
//     .catch((error) => console.error(error));
// }

// // Call the pinDetails function with a pin ID
// pinDetails();

//Get pin details end

//Go back to previous page
function goBack() {
  window.history.back();
}
