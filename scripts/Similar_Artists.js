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






// Chaning the opacity of the article links to make it more dynamic, using javascript
var articleLink = document.getElementsByClassName("article-link");


articleLink[0].addEventListener("mouseover", e => {
    articleLink[0].style.opacity =0.5;
});

articleLink[0].addEventListener("mouseout", e => {
    articleLink[0].style.opacity =1;
});


articleLink[1].addEventListener("mouseover", e => {
    articleLink[1].style.opacity =0.5;
});

articleLink[1].addEventListener("mouseout", e => {
    articleLink[1].style.opacity =1;
});



