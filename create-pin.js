//Create pin
function createPin() {
  const caption = document.getElementById("caption").value;
  const message = document.getElementById("message").value;
  const category = document.getElementById("category").value;
  const fileUpload = document.getElementById("inputGroupFile").value;

    // generate unique pinId
    const pinId = Math.random().toString(36).substring(2, 8) + Date.now().toString(36);

    // add pin to array with generated pinId
    pins.push({
      pinId,
      caption: pin.caption,
      media: pin.media,
      message: pin.message,
    });
  
    return pinId;

  // Create a data object with the form data
  const data = {
    caption: caption,
    message: message,
    category: category,
    fileUpload: input,
  };

  // Send the data to the server using the Fetch API
  fetch("https://api.snapme-ng.com/api/v1/create-pin/:catalog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Update the UI with the response data
      const pinContainer = document.getElementById("pin-container");
      const pinElement = document.createElement("div");
      pinElement.innerHTML = `
        <h3>${data.caption}</h3>
        <p>${data.message}</p>
        <p>${data.category}</p>
        <div>${data.fileUpload}</div>
        <div class="card-body">
                <ul class="card-title icons-list">
                  <li>
                    <button>
                      <i class="fa-solid fa-eye"></i>
                      <p class="text-white">7.9k</p>
                    </button>
                  </li>
                  <li class="likeListItem">
                    <button
                      onclick="likePost()"
                      class="like-button"
                      id="likeBtn8"
                    >
                      <i class="far fa-heart" style="color: #fff"></i>
                    </button>
                    <p class="text-white">5k</p>
                  </li>
                  <li>
                    <button onclick="commentOnPost()">
                      <i class="fa-solid fa-comment"></i>
                      <p class="text-white">307</p>
                    </button>
                  </li>
                  <li>
                    <button class="myPopupBtn">
                      <i class="fa-solid fa-share"></i>
                      <p class="text-white">188</p>
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
                          href="https://t.me/share/url?url=https://snapme-ng.com/&text=I found this awesome post on Snapme! Check it out!"
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
                    <div id="more-icons">
                      <ul>
                        <li onclick="savePost()">
                          <i class="fa-solid fa-bookmark"></i>
                          <p>117</p>
                        </li>
                        <li>
                          <i
                            onclick="downloadPost()"
                            class="fa-solid fa-download"
                          ></i>
                          <p>32</p>
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

      `;
      pinContainer.appendChild(pinElement);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
createPin();

//Accept multiple files
function handleFileSelect(event) {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i].name);
  }
}
