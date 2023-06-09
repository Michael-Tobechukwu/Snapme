api7 = `http://localhost:5000/api/v1`;

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

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

let currentProfile = localStorage.getItem("username");

window.addEventListener("load", function () {
  const ref = getQueryParam("reference");
  fetch(`${api7}/${currentProfile}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        return response.json().then((data) => {
          throw new Error(data.message || "Error: " + response.statusText);
        });
      } else if (response.status === 500) {
        return response.json().then((data) => {
          throw new Error(data.message || "Error: " + response.statusText);
        });
      }
    })
    .then((user) => {
      console.log(user);
      const displayContent = document.querySelector(".content");

      displayContent.innerHTML = `
      <img src="Images/back arrow.svg" width="25px" class="backArrow" onclick="goBack()">
        <div class="userDetails">
          <img src="${user.user.picture}" width="50px" />
          <div class="userName">
            <p>${user.user.username}</p>
            <h3>${user.user.name}</h3>
          </div>
        </div>
        <div class="userInfo">
          <ul>
          <li>${
            user.user?._id === user?.currentId && !user.user?.occupation
              ? `<a href=updateProfile.html?id=${user.user?._id} style="color: white;">Add your occupation</a><span style="color: red;"> (IMPORTANT!)</span>`
              : user.user?._id !== user?.currentId && !user.user?.occupation
              ? ""
              : user.user?.occupation
          }</li>
          <li>${
            user.user?._id === user?.currentId && !user.user?.country
              ? `<a href=updateProfile.html?id=${user.user?._id} style="color: white;">Add your country </a><span style="color: red;"> (IMPORTANT!)</span>`
              : user.user?._id !== user?.currentId && !user.user?.country
              ? ""
              : user.user?.country
          }</li>
          </ul>
        </div>
        <p class="body-text">
          You are about to join elite users with unique privileges to create
          posts on all catalogs and get verified on Snapme.
        </p>

        <p>Your subscription will be:</p>
        <h6>NGN 5,520 equivalent USD12</h6>
        <p class="acceptHeading">We accept:</p>
        <div class="cardOptions">
          <img src="Images/visa.svg" alt="Visa" />
          <img src="Images/mastercard.svg" alt="Mastercard" />
          <img src="Images/american-express.svg" alt="American Express" />
        </div>
        <div class="payment">
          <input
            type="button"
            value="Auto-Renew Premium Plan"
            onclick="subscribe()"
          />
          <input
            type="button"
            value="One-Time Premium Plan"
            onclick="oneTime()"
          />
        </div>
      `;
    })
    .catch((error) => {
      Swal.fire("Ooops!", `${error}`, "error");
      console.log(error);
    });

  if (ref) {
    Swal.fire({
      title: "Verifying payment status...",
      html: '<div class="loader-container"><div class="loader"></div></div>',
      showConfirmButton: false,
      allowOutsideClick: false,
      customClass: {
        popup: "swal-popup",
        title: "swal-title",
      },
    });

    fetch(`${api7}/verify/${ref}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getJwt()}`,
      },
    })
      .then((verifyResponse) => verifyResponse.json())
      .then((status) => {
        console.log(status);

        // Handle the payment verification status
        if (status.data.status === "success") {
          Swal.fire(
            "Verified!",
            "Subscription payment verified successfully!",
            "success"
          ).then(() => {
            window.location.href = "timeline.html";
          });
        } else {
          Swal.fire("Oops!", "Payment verification failed!", "error");
        }
      })
      .catch((error) => {
        console.error("Error verifying payment:", error);
        Swal.fire("Oops!", "Error verifying payment!", "error");
      });
  }
});

async function oneTime() {
  const response = await fetch(`${api7}/payment/0`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
  });

  const data = await response.json();

  console.log(data);

  Swal.fire({
    title: "Verifying payment status...",
    html: '<div class="loader-container"><div class="loader"></div></div>',
    showConfirmButton: false,
    allowOutsideClick: false,
    customClass: {
      popup: "swal-popup",
      title: "swal-title",
    },
  });

  const handler = PaystackPop.setup({
    key: data.key,
    email: data.email,
    amount: data.amount,
    ref: data.reference,
    currency: data.currency,
    onClose: () => {
      Swal.fire("Warning!", "Payment process cancelled!", "warning");
    },
    callback: function (response) {
      // Perform payment verification
      const customRef = data.reference;
      fetch(`${api7}/verify/${customRef}/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getJwt()}`,
        },
      })
        .then((verifyResponse) => verifyResponse.json())
        .then((status) => {
          console.log(status);

          // Handle the payment verification status
          if (status.data.status === "success") {
            Swal.fire(
              "Verified!",
              "Payment verified successfully!",
              "success"
            ).then(() => {
              window.location.href = "timeline.html";
            });
          } else {
            Swal.fire("Oops!", "Payment verification failed!", "error");
          }
        })
        .catch((error) => {
          console.error("Error verifying payment:", error);
          Swal.fire("Oops!", "Error verifying payment!", "error");
        });
    },
  });

  handler.openIframe();
}

//Subscribe
function subscribe() {
  fetch(`${api7}/subscribe/0`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getJwt()}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        return response.json().then((data) => {
          throw new Error(data.message || "Error: " + response.statusText);
        });
      } else if (response.status === 500) {
        return response.json().then((data) => {
          throw new Error(data.message || "Error: " + response.statusText);
        });
      }
    })
    .then((data) => {
      console.log(data);
      window.location.href = data.data.authorization_url;
    })
    .catch((error) => console.error("Error:", error));
}

//Go back to previous page
function goBack() {
  window.history.back();
}
