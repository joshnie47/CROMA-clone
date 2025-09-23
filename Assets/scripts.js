// Get elements
const menuBtn = document.getElementById("menubtn");
const closeBtn = document.getElementById("closebtn");
const navTab = document.querySelector(".nav-tab");

// Initially hide close button & nav
closeBtn.style.display = "none";
navTab.style.display = "none";

// When clicking the menu button
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";      // hide menu icon
  closeBtn.style.display = "block";    // show close icon
  navTab.style.display = "block";      // show menu list
});

// When clicking the close button
closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";     // hide close icon
  menuBtn.style.display = "block";     // show menu icon
  navTab.style.display = "none";       // hide menu list
});

