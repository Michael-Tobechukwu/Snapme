//Search fetch API
function searchPosts() {
  fetch("https://api.snapme-ng.com/api/v1/search", {
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

/////FOLLOW CATALOGS
//Put request to follow music catalog
function followMusic() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/music/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow shows and concerts catalog
function followShowsConcerts() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/showsConcerts/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow dance catalog
function followDance() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/dance/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow afrobeats catalog
function followAfrobeats() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/afrobeats/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}


//Put request to follow comedy catalog
function followComedy() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/comedy/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow tag stories catalog
function followTagStories() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/tagStories/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow Photography catalog
function followPhotography() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/photography/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow art catalog
function followArt() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/art/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow museums catalog
function followMuseums() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/museums/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow tourism catalog
function followTourism() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/tourism/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow fashion catalog
function followFashion() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/fashion/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow Beauty & Kits catalog
function followBeautyKits() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/beautyKits/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow food catalog
function followFood() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/food/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow fitness catalog
function followFitness() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/fitness/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}
followFitness();

//Put request to follow football catalog
function followFootball() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/football/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow basketball catalog
function followBasketball() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/basketball/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow sports catalog
function followSports() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/sports/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow news catalog
function followNews() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/news/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow fashion TV catalog
function followFashionTV() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/fashionTV/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow cars catalog
function followCars() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/cars/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow house decoration catalog
function followHouseDecoration() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/houseDecoration/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow nature catalog
function followNature() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/nature/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow quotes catalog
function followQuotes() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/quotes/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow pets catalog
function followPets() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/pets/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
}

//Put request to follow others catalog
function followOthers() {
  fetch("https://api.snapme-ng.com/api/v1/catalog/others/follow", {
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
      console.log("Catalog followed successfully");
    })
    .catch((error) => console.error(error));
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
  fetch("https://api.snapme-ng.com/api/v1/pins/:id/like", {
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

//Post request to comment on post
function commentOnPost() {
  fetch("https://api.snapme-ng.com/api/v1/pins/comment/:id", {
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

//Get request to download post
function downloadPost() {
  fetch("https://api.snapme-ng.com/api/v1/pins/download/:id")
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

//Post request to save post
function savePost() {
  fetch("https://api.snapme-ng.com/api/v1/pins/save/:id", {
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

//Delete post
function deletePost() {
  fetch("https://api.snapme-ng.com/api/v1/pins/delete/:postId/:deleteId", {
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

//Fetch timeline post
function timeline() {
  const timelineBtn = document.getElementById('timeCapsule');
  fetch("https://api.snapme-ng.com/api/v1/pins/timeline")
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
  fetch("https://api.snapme-ng.com/api/v1/user/suggested")
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

/*
//Follow user fetch API
var followUser = document.getElementById("follow-toggle");
followUser.addEventListener("click", toggleFollow);

function toggleFollow() {
  fetch("https://api.snapme-ng.com/api/v1/:username/follow", {
    method: "POST",
    body: JSON.stringify({ follow: true }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to follow/unfollow user.");
      }
    })
    .then((data) => {
      if (data.following) {
        document.getElementById("follow-toggle").textContent = "Unfollow";
      } else {
        document.getElementById("follow-toggle").textContent = "Follow";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
toggleFollow();
*/
