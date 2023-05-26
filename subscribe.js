//Subscribe
function subscribe() {
  fetch("http://localhost:5000/api/v1/subscribe/:index", {
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

//Go back to previous page
function goBack() {
  window.history.back();
}
