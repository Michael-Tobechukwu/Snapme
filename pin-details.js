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

const api2 = `https://api.snapme-ng.com/api/v1`;

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const id = getQueryParam("id");

let currentProfile = localStorage.getItem("username");

function checkJwt(location) {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
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
    return undefined;
  }
  return jwtToken;
}

const token = getJwt();

window.addEventListener("load", function () {
  if (token) {
    const currentPic = localStorage.getItem("picture");
    const profile = document.getElementById("profilePicture");
    // const profileM = document.getElementById("profilePictureM");

    // Create an image element
    const image = document.createElement("img");
    image.src =
      currentPic ===
      "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
        ? `Images/user image.svg`
        : currentPic;
    image.alt = "user Image";
    image.className = "user-image";
    image.style = "border-radius: 50%; border: 2px solid #ba00ba;";

    // Set the image as the innerHTML of the button
    profile.innerHTML = "";
    profile.appendChild(image);
  }

  if (!id) {
    Swal.fire("Ooops!", `Post not found!`, "error");
    window.location.href = "timeline.html";
    return;
  }
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
              src="Images/back arrow.svg" class="backArrow"
              onclick="history.back()" 
            />
            <img src="Images/Snapme icon white.png" class="white-logo" alt="logo" />
          </div>
          <div class="content-top-mobile">
            <div class="userDetails">
            <img src="${
              post.post.user.picture ===
              "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
                ? `Images/user image.svg`
                : post.post.user.picture
            }" style="border-radius: 50%; border: 2px solid #ba00ba;" class="profilePic" />
              <p
                class="azizy_username"
                onclick="window.location='user.html?username=${
                  post.post.user.username
                }'"
              >
                ${post.post.user.username}
              </p>
              ${
                post.post.user.role === "subscribed"
                  ? ' <img id="subscribed-badge" src="Images/verified.svg" style="width: 20px;" alt="verified badge"/>'
                  : ""
              }
            </div>
            <button
                   id="followUserBtn"
                   class="follow"
                   style="${
                     post.post.user.username !== post?.username
                       ? `display: block`
                       : `display: none`
                   }"
                   onclick="followThisUser('${post.post.user.username}')"
                 >
                 ${
                   post.post.user.followers.includes(post?.id)
                     ? "Following &#10003;"
                     : post.post.user.username === post?.username ||
                       post.id === null
                     ? ""
                     : "Follow +"
                 }
                 </button>
          </div>
        </div>
        <div class="content">
          <div class="content-top">
            <div class="userDetails">
            <img src="${
              post.post.user.picture ===
              "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
                ? `Images/user image.svg`
                : post.post.user.picture
            }" style="border-radius: 50%; border: 2px solid #ba00ba;" onclick="window.location='user.html?username=${
        post.post.user.username
      }' class="profilePic" />
              <div class="text">
                <p
                  class="azizy_username"
                  onclick="window.location='user.html?username=${
                    post.post.user.username
                  }'"
                >
                ${post.post.user.username}
                ${
                  post.post.user.role === "subscribed"
                    ? ' <img id="subscribed-badge" src="Images/verified.svg" style="width: 20px;" alt="verified badge"/>'
                    : ""
                }
                </p>
                <span id="postDate">${moment(post.post.date)
                  .locale("en")
                  .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}</span>
              </div>
            </div>
            <button
                   id="followUserBtn"
                   class="follow"
                   style="${
                     post.post.user.username !== post?.username
                       ? `display: block`
                       : `display: none`
                   }
                   onclick="followThisUser('${post.post.user.username}')"
                 >
                 ${
                   post.post.user.followers.includes(post?.id)
                     ? "Following &#10003;"
                     : post.post.user.username === post?.username ||
                       post.id === null
                     ? ""
                     : "Follow +"
                 }
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
                  <button onclick="likePost()" class="like-button">
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
                <img src="${
                  post.user ===
                  "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
                    ? `Images/user image.svg`
                    : post.user
                }" alt="${
                 post.username
               } Profile pic" onclick="window.location='user.html?username=${
                 post.username
               }'" />
                <!--<img src="${post.user}" alt="${
                 post.username
               } Profile pic" />-->
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

      fetch(`${api2}/catalog/suggested/${id}`, {
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
        .then((posts) => {
          // console.log(posts);
          posts.suggestedPosts.forEach((post) => {
            const suggested = document.querySelector(".row");
            // console.log(post);

            const suggestedElement = document.createElement("div");
            suggestedElement.classList.add("col-5");

            suggestedElement.innerHTML = `
            <div class="card mobileCard">
              <div class="post-img">
              ${
                post.media[0].endsWith(".mp4")
                  ? `<video class="card-img-top" controls autoplay muted onclick="window.location = 'pin-details.html?id=${post._id}'">
                  <source src="${post?.media[0]}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>`
                  : `<img src="${post.media[0]}" class="card-img-top" onclick="window.location = 'pin-details.html?id=${post._id}'" />`
              }
                <a class="username text-white" href="user.html?username=${
                  post.user.username
                }"
                  >
                  <img src="${
                    post.user.picture ===
                    "https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
                      ? `Images/user image.svg`
                      : post.user.picture
                  }" style="border-radius: 50%; border: 2px solid #ba00ba;" alt="${
              post.user.username
            } Profile pic" width="35px"
                 class="profilePic" onclick="window.location='user.html?username=${
                   post.user.username
                 }'" />
                  <span class="nameOfUser">${post.user.username}</span>
                  <span id="subscribed-badge" class="verified-badge"
                    > ${
                      post.user.role === "subscribed"
                        ? ' <img src="Images/verified.svg" style="width: 20px;" alt="verified badge"/>'
                        : ""
                    }</span>
                  <span id="timePosted">${moment(post.date).fromNow()}</span>
                </a>

                <h4>${post.caption}</h4>
                <div class="commentBox">
                  <form class="commentBoxForm">
                    <span class="closeComment"> &times;</span>
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
                    <button onclick="likePost()" class="like-button">
                      <i class="far fa-heart" style="color: #fff"></i>
                    </button>
                    <p class="text-white">${post?.likes?.length}</p>
                  </li>
                  <li>
                    <button class="commentBtn">
                      <i class="fa-solid fa-comment"></i>
                      <p class="text-white">${post?.comment?.length}</p>
                    </button>
                  </li>
                  <li>
                    <button class="myPopupBtn">
                      <i class="fa-solid fa-share"></i>
                      <p class="text-white">${post.shares}</p>
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
                </ul>
                <div class="other-icons">
                  <div>
                    <span id="dots"></span>
                    <div id="more-iconsV" class="more-icons">
                      <ul>
                        <li onclick="savePost()">
                          <i class="fa-solid fa-bookmark"></i>
                          <p>${post.saves}</p>
                        </li>
                        <li>
                          <i
                            onclick="downloadPost()"
                            class="fa-solid fa-download"
                          ></i>
                          <p>${post.downloads}</p>
                        </li>
                        <li onclick="deletePost()">
                          <i class="fa-solid fa-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button onclick="moreIcons5()" id="myBtnV">
                    <img src="Images/more-icon.svg" width="20px" />
                  </button>
                </div>
              </div>
            </div>
            `;
            suggested.appendChild(suggestedElement);
          });
        })
        .catch((error) => {
          Swal.fire("Ooops!", `${error}`, "error");
          console.log(error);
        });
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.log(error);
    });

  // const likeBtns = document.querySelector("#like-button");
  // let isLiked = false;

  // likeBtns.addEventListener("click", () => {
  //   if (isLiked) {
  //     likeBtns.innerHTML = '<i class="far fa-heart"></i>';
  //     isLiked = false;
  //   } else {
  //     likeBtns.innerHTML = '<i class="fas fa-heart"></i>';
  //     isLiked = true;
  //   }
  // });
  ////
  // //Like post fetch API
  // const likeBtn = document.getElementById("like-button");
  // //Add fetch API to button
  // likeBtn.addEventListener("click", likePost);

  //Catalogs for you pins share
  //Share 1
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementsByClassName("myPopupBtn")[0];
    var modal = document.getElementsByClassName("shareModal")[0];
    var closeThisNow = document.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };
  
    // When the user clicks on <span> (x), close the modal
    closeThisNow.onclick = function () {
      modal.style.display = "none";
    };
  
    // Close the modal when the user clicks outside the modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  

  //Suggested catalogs like buttons
  //Like button for suggested catalog 1
  document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll(".like-button");
    const isLiked = new Array(likeButtons.length).fill(false);
  
    likeButtons.forEach((likeButton, index) => {
      likeButton.addEventListener("click", () => {
        if (isLiked[index]) {
          likeButton.innerHTML = `<i class="far fa-heart"></i>`;
          likeButton.style.color = "#fff";
          isLiked[index] = false;
        } else {
          likeButton.innerHTML = `<i class="fas fa-heart"></i>`;
          likeButton.style.color = "#fff";
          isLiked[index] = true;
        }
      });
    });
  });
  

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

  var timePinned = moment("20230129", "YYYYMMDD").fromNow();
  document.getElementById("timePosted").innerHTML = timePinned;
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

// var timePinned = moment("20220210", "YYYYMMDD").fromNow();
// document.getElementsByClassName("timePosted")[0].innerHTML = timePinned;

// var timePinned = moment("20221229", "YYYYMMDD").fromNow();
// document.getElementsByClassName("timePosted")[1].innerHTML = timePinned;

// var timePinned = moment("20230228", "YYYYMMDD").fromNow();
// document.getElementsByClassName("timePosted")[2].innerHTML = timePinned;

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
// let isFollowingDesktop = false;

// const thisFollowButton = document.getElementById("followUserButton");
// function toggleFollowUser() {
//   if (isFollowingDesktop) {
//     // unfollow logic
//     thisFollowButton.textContent = "Follow +";
//   } else {
//     // follow logic
//     thisFollowButton.textContent = "Following";
//   }

//   isFollowingDesktop = !isFollowingDesktop;
// }

// thisFollowButton.addEventListener("click", toggleFollowUser);

//Follow/unfollow user on mobile
// let isFollowing = false;
// const followBtn = document.getElementById("followUserBtn");
// function toggleFollowUser() {
//   if (isFollowing) {
//     // unfollow logic
//     followBtn.textContent = "Follow +";
//   } else {
//     // follow logic
//     followBtn.textContent = "Following";
//   }

//   isFollowing = !isFollowing;
// }

// followBtn.addEventListener("click", toggleFollowUser);

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
//Video controls end

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
//Comment box popup for first catalogs for you pin
document.addEventListener('DOMContentLoaded', function() {
  const commentButtons = document.querySelectorAll(".commentBtn");
  const commentBoxes = document.querySelectorAll(".commentBox");
  const closeButtons = document.querySelectorAll(".closeComment");

  commentButtons.forEach((commentBtn, index) => {
    const commentBox = commentBoxes[index];

    commentBtn.addEventListener("click", function () {
      commentBox.style.display = "block";
    });
  });

  closeButtons.forEach((closeButton, index) => {
    const commentBox = commentBoxes[index];

    closeButton.addEventListener("click", function () {
      commentBox.style.display = "none";
    });
  });
});

//All Comments popup
////

//Get request to fetch user profile
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
// thisUser();
////

// function pinDetails() {
//   // Fetch the pin data from the backend
//   fetch(`https://api.snapme-ng.com/api/v1/pin-details/:pinId`)
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
