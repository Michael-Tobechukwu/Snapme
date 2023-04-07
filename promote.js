// Promote popup
var promoteModal = document.getElementById("promoteModal");
var promoteBtn = document.getElementById("promoteButton");
var closePromote = document.getElementById("closePromote");

promoteBtn.onclick = function () {
  promoteModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
closePromote.onclick = function () {
  promoteModal.style.display = "none";
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
