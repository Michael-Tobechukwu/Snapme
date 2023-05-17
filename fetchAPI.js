const api = `https://api.snapme-ng.com/api/v1`;

//Search fetch API
function searchPosts() {
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "Music",
      filters: {
        type: "post",
        author: "Azizy Makim",
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Search results:", data);
    })
    .catch((error) => console.error(error));
}

//FOLLOW CATALOGS
function followCatalog(catalogName) {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  if (!jwtToken) {
    // redirect user to login page if jwtToken doesn't exist
    window.location.href = "/login";
    return;
  }
  fetch(`${api}/catalog/${catalogName}/follow`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({
      catalogName: catalogName,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to follow catalog");
      }
      return response.json();
    })
    .then((data) => {
      Swal.fire(
        "Success!",
        `Successfully followed the ${data.catalog} catalog!`,
        "success"
      );
      console.log("Successfully followed catalog:", data.catalog);
    })
    .catch((error) => {
      Swal.fire("Ooops!", `Error following catalog: ${error}`, "error");
      console.error("Error following catalog:", error);
    });
}

//Like post
//Add click event listener to like buttons
document.getElementById("likeBtn").addEventListener("click", likePost);
document.getElementById("likeBtn2").addEventListener("click", likePost);
document.getElementById("likeBtn3").addEventListener("click", likePost);
document.getElementById("likeBtn4").addEventListener("click", likePost);
document.getElementById("likeBtn5").addEventListener("click", likePost);
document.getElementById("likeBtn6").addEventListener("click", likePost);
document.getElementById("likeBtn7").addEventListener("click", likePost);
document.getElementById("likeBtn8").addEventListener("click", likePost);

//Put request to like a post
const userId = 456;

async function likePost() {
  const response = await fetch("${api}/pins/:id/like", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  });

  const data = await response.json();

  if (data.success) {
    console.log("Post liked successfully");
  } else {
    console.log("Error liking post:", data.error);
  }
}

//Post request to comment on post
const token = "<token>";

async function commentOnPost(userId, postId, comment) {
  const response = await fetch("${api}/pins/comment/:id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId,
      postId,
      comment,
    }),
  });

  const data = await response.json();

  console.log(data);
}

//Get request to download post
async function downloadPost() {
  try {
    const currentPostImg = document.querySelector(".post-img");
    const currentPostId = currentPostImg.dataset.id;
    const response = await fetch(`${api}/pins/download/${currentPostId}`);
    
    if (!response.ok) {
      throw new Error('Failed to download the post.');
    }
    
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    // Get the MIME type of the image
    const mimeType = currentPostImg.src.split(/[?#]/)[0].split(/\//).pop();

    // Set the download attribute of the anchor element
    a.download = `post-${currentPostId}.${mimeType}`;

    // Set the href attribute of the anchor element to the generated URL
    a.href = url;

    // Click the anchor element to download the file
    a.click();
  } catch (error) {
    console.error('Error while downloading the post:', error);
    // Handle the error appropriately (e.g., display an error message to the user)
  }
}

//Post request to save post
function savePost() {
  // Get the element with the class of 'post-img' using the querySelector() method.
  const currentPostImg = document.querySelector(".post-img");

  // Get the ID of the post from the element's dataset.
  const currentPostId = currentPostImg.dataset.id;

  // Make a request to the API to get the post data.
  fetch(`${api}/pins/${currentPostId}`)
    .then((response) => response.json())
    .then((data) => {
      // Get the title and content of the post from the API response.
      const title = data.title;
      const content = data.content;

      // Create a JSON object with the title and content of the post.
      const postData = {
        title,
        content,
      };

      // Make a request to the API to save the post.
      fetch("${api}/pins/save/:id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Check the response status code.
          if (data.status === 200) {
            // The post was saved successfully.
            console.log("Post saved successfully.");
          } else {
            // There was an error saving the post.
            console.log("Error saving post: " + data.message);
          }
        })
        .catch((error) => {
          // There was an error making the request to the API.
          console.error(error);
        });
    })
    .catch((error) => {
      // There was an error making the request to the API.
      console.error(error);
    });
}

//Delete post
function deletePost() {
  // Get the element with the class of 'post-img' using the querySelector() method.
  const currentPostImg = document.querySelector(".post-img");

  // Get the ID of the post from the element's dataset.
  const currentPostId = currentPostImg.dataset.id;

  // Make a request to the API to get the post data.
  fetch(`${api}/pins/${currentPostId}`)
    .then((response) => response.json())
    .then((data) => {
      // Get the ID of the post from the API response.
      const deleteId = data.id;

      // Make a request to the API to delete the post.
      fetch(`${api}/pins/delete/${currentPostId}/${deleteId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            console.log("Post deleted successfully.");
          } else {
            console.error("Error deleting post.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })
    .catch((error) => {
      console.error("Error making request to API:", error);
    });
}

//Fetch timeline post
function timeline() {
  const timelineBtn = document.getElementById('timeCapsule');
  fetch(`${api}pins/timeline`)
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        console.log(post.title);
        console.log(post.body);
      });
    })
    .catch((error) => console.error(error));
    timelineBtn.addEventListener('click', timeline)
}

//Get suggested Accounts of users to follow
function suggestedAccounts() {
  fetch(`${api}/user/suggested`)
    .then((response) => response.json())
    .then((suggestions) => {
      suggestions.forEach((suggestion) => {
        console.log(suggestion.name);
        console.log(suggestion.bio);
        console.log(suggestion.avatarUrl);
      });
    })
    .catch((error) => console.error(error));
}

//Subscribe
function subscribe() {
  fetch(`${api}/subscribe/:index`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "example@example.com",
      name: "John Doe",
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Successfully subscribed!");
      } else {
        console.log("Failed to subscribe.");
      }
    })
    .catch((error) => console.error("Error:", error));
}
subscribe();
