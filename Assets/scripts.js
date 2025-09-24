const menuBtn = document.getElementById("menubtn");
const closeBtn = document.getElementById("closebtn");
const navTab = document.querySelector(".nav-tab");
closeBtn.style.display = "none";
navTab.style.display = "none";
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";      
  closeBtn.style.display = "block";    
  navTab.style.display = "block";     
});
closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";    
  menuBtn.style.display = "block";   
  navTab.style.display = "none";      
});

