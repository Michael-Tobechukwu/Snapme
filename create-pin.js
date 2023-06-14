const create = document.getElementById("create");

const api3 = `https://api.snapme-ng.com/api/v1`;

function getJwt() {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  if (!jwtToken) {
    // redirect user to login page if jwtToken doesn't exist
    localStorage.setItem("returnUrl", window.location.href);
    window.location.href = "/login.html";
    return;
  }
  return jwtToken;
}

document.addEventListener("DOMContentLoaded", function () {
  const jwtToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwtToken="))
    ?.split("=")[1];
  if (!jwtToken) {
    localStorage.setItem("returnUrl", window.location.href);
    Swal.fire("Ooops!", `You need to login first!`, "error");
    // redirect user to login page if jwtToken doesn't exist
    window.location.href = "/login.html";
    return;
  }
  return;
});

//File upload to show progress and selected file name
function uploadFile() {
  var fileInput = document.getElementById('inputGroupFile');
  var file = fileInput.files[0];

  var formData = new FormData();
  formData.append('file', file);

  var selectedFileName = document.getElementById('selectedFileName');
  selectedFileName.textContent = file.name; // Display the file name

  fetch(`${api3}/create-pin/${category}`, {
    method: 'POST',
    body: formData,
    onProgress: function (progressEvent) {
      var percentComplete = (progressEvent.loaded / progressEvent.total) * 100;
      var progress = document.getElementById('uploadProgress');
      progress.value = percentComplete;
    }
  })
  .then(function (response) {
    if (response.ok) {
      // Upload successful
      console.log('File uploaded successfully.');
    } else {
      // Upload failed
      console.error('Error uploading file.');
    }
  })
  .catch(function (error) {
    console.error('Error uploading file:', error);
  });
}

// Attach the uploadFile function to the file input change event
var fileInput = document.getElementById('inputGroupFile');
fileInput.addEventListener('change', uploadFile);


//Create pin
function createPin() {
  const caption = document.getElementById("caption").value;
  const message = document.getElementById("message").value;
  const category = document.getElementById("category").value;

  // // generate unique pinId
  // const pinId =
  //   Math.random().toString(36).substring(2, 8) + Date.now().toString(36);

  // // add pin to array with generated pinId
  // pins.push({
  //   pinId,
  //   caption: pin.caption,
  //   media: pin.media,
  //   message: pin.message,
  // });

  // return pinId;

  // Create a data object with the form data
  const formData = new FormData();
  const filesInput = document.getElementById("inputGroupFile");
  for (let i = 0; i < filesInput.files.length; i++) {
    formData.append("media", filesInput.files[i]);
  }
  formData.append("caption", caption);
  formData.append("message", message);

  const options = {
    method: "POST",
    body: formData,
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getJwt()}`,
    },
  };

  // Send the data to the server using the Fetch API
  fetch(`${api3}/create-pin/${category}`, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      } else if (response.status === 403) {
        throw new Error(response.statusText);
      } else if (response.status === 500) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    })
    .then((data) => {
      const postId = data.postId;
      Swal.fire(
        "Success!",
        `Pin created successfully under the ${data.catalog} catalog!`,
        "success"
      ).then(() => {
        window.location.href = `pin-details.html?id=${postId}`;
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
        footer: '<a href="/subscribe.html">Go to subscribe page now!</a>',
      });
    });
}

create.addEventListener("submit", function (event) {
  event.preventDefault();
  createPin();
});

//Accept multiple files
// function handleFileSelect(event) {
//   const files = event.target.files;
//   for (let i = 0; i < files.length; i++) {
//     console.log(files[i].name);
//   }
// }

//Go to the previous page
function goBack() {
  window.history.back();
}
