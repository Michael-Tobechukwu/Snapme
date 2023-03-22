//Edit username in update profile
const paragraph = document.getElementById("editParagraph");
const edit_button = document.getElementById("editButton");
const done_button = document.getElementById("doneButton");

edit_button.addEventListener("click", function () {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
  paragraph.style.color = "#000";
});

done_button.addEventListener("click", function () {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#021129";
  paragraph.style.color = "#fff";
});

function updateProfile() {
  fetch("https://api.snapme-ng.com/api/v1/update-profile/:username", {
    method: "POST",
    body: JSON.stringify({ userId: "123" }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      isFollowing = true;
    })
    .catch((error) => {
      console.error(error);
    });
}
updateProfile();
//Update profile ends
