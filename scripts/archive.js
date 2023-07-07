const getUserSelectedText = () => {
  return window.getSelection().toString();
}

const aboutElement = document.querySelector("#about-element");
const discographyElement = document.querySelector("#discography-element");
const BTMElement = document.querySelector("#BTM-element");
const showsElement = document.querySelector("#shows-element");
const archiveElement = document.querySelector("#archive-element");

//Change the page when you click on the sorrounding white box, allowing for easy access
//if a page is selcted, change the window location
aboutElement.addEventListener("click", selectedAbout);
function selectedAbout() {
  window.location='About.html';
}
//Change the page when you click on the sorrounding white box, allowing for easy access
//if a page is selcted, change the window location
discographyElement.addEventListener("click", selectedDiscography);
function selectedDiscography() {
  window.location='Discography.html';
}
//Change the page when you click on the sorrounding white box, allowing for easy access
//if a page is selcted, change the window location
BTMElement.addEventListener("click", selectedBTM);
function selectedBTM() {
  window.location='BTMusic.html';
}
//Change the page when you click on the sorrounding white box, allowing for easy access
//if a page is selcted, change the window location
showsElement.addEventListener("click", selectedShows);
function selectedShows() {
  window.location='Shows.html';
}
//Change the page when you click on the sorrounding white box, allowing for easy access
//if a page is selcted, change the window location
archiveElement.addEventListener("click", selectedArchive);
function selectedArchive() {
  window.location='Archive.html';
}





// get the text that specifies eeach 

const filterHeader = document.querySelector(".menu"),
galleryItems = document.querySelectorAll(".store-item");

filterHeader.addEventListener("click", (event) =>{
  if(event.target.classList.contains("menu-item")){
       // deactivate existing active 'filter-item'
       filterHeader.querySelector(".active").classList.remove("active");
       // activate new 'filter-item'
       event.target.classList.add("active");
       const filterTag = event.target.getAttribute("data-filter");
       galleryItems.forEach((item) =>{
        //if the user has clicked on all, show all images
      if(item.classList.contains(filterTag) || filterTag === 'all'){
          item.classList.remove("hide");
           item.classList.add("show");
      }
        //if not, show just the ones that they clicked on
      else{
          item.classList.remove("show");
          item.classList.add("hide");
      }
       });
  }
});