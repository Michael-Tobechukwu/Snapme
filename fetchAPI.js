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
function likePost() {
  fetch(`${api}/pins/:id/like`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 456,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Post liked successfully");
    })
    .catch((error) => console.error(error));
}
likePost();

//Post request to comment on post
function commentOnPost() {
  fetch(`${api}/pins/comment/:id`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer <token>",
    },
    body: JSON.stringify({
      userId: 123,
      postId: 456,
      comment: "This is a great post!",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
commentOnPost();

//Get request to download post
function downloadPost() {
  fetch(`${api}/pins/download/:id`)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "post.pdf";
      a.click();
    })
    .catch((error) => console.error(error));
}
downloadPost();

//Post request to save post
function savePost() {
  fetch(`${api}/pins/save/:id`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Post Title",
      content: "This is the content of the post",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
savePost();

//Delete post
function deletePost() {
  fetch(`${api}/pins/delete/:postId/:deleteId`, {
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
}
deletePost();

//Fetch timeline post
function timeline() {
  fetch(`${api}/pins/timeline`)
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        console.log(post.title);
        console.log(post.body);
      });
    })
    .catch((error) => console.error(error));
}
timeline();

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
suggestedAccounts();

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
