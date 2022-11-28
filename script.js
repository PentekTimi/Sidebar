const sideBarToggle = document.querySelector(".sidebar-toggle")
const closeButton = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

console.log(sidebar);

sideBarToggle.addEventListener("click", function(){
  
  sidebar.classList.toggle("sidebar-visibility");
  
})

closeButton.addEventListener("click", function(){

   sidebar.classList.remove("sidebar-visibility");

})