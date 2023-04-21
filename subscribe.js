//Subscribe
function subscribe() {
    fetch("https://api.snapme-ng.com/api/v1/subscribe/:index", {
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