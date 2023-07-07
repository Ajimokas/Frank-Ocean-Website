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




const panoramaImage = document.querySelector("#panorama-image");
const panoramaImageText = document.getElementById("panorama-image-text")
const davidPerfImage = document.querySelector("#david");
const davidPerfImageText = document.getElementById("david-text");
var elementTitles = document.getElementsByClassName("title");
var articleLink = document.getElementsByClassName("article-link");
var ticketLink = document.getElementById("ticket-link");


panoramaImage.addEventListener("click", e => {
    panoramaImageText.innerHTML = "Here is Frank Ocean (left and right) performing at paranoma in NYC in 2017, Peep his awesome shirt";
    panoramaImageText.style.textAlign = "center";
    panoramaImageText.toggleAttribute('hidden');
});

davidPerfImage.addEventListener("click", e => {
    davidPerfImageText.innerHTML = "This was the first time he was on david letterman (2013)";
    davidPerfImageText.style.textAlign = "center";
    davidPerfImageText.toggleAttribute('hidden');
});

// make article links opaque when you mouse over them
elementTitles[1].addEventListener("click", e => {
    elementTitles[1].style.color = 'blue';
    
});

articleLink[0].addEventListener("mouseover", e => {
    articleLink[0].style.opacity =0.5;
});

articleLink[0].addEventListener("mouseout", e => {
    articleLink[0].style.opacity =1;
});

ticketLink.addEventListener("mouseover", e => {
    ticketLink.style.opacity =0.5;
});

ticketLink.addEventListener("mouseout", e => {
    ticketLink.style.opacity =1;
});

//Loading all the images in suceession suing Jquery
$(document).ready(function(){
    $("#panorama-image").fadeIn(3000);
});




$(document).ready(function(){
    $("#image1").fadeIn(3000);
});



$(document).ready(function(){
    $("#image2").fadeIn(3000);
});


$(document).ready(function(){
$("#image3").fadeIn(3000);
});



$(document).ready(function(){
$("#image4").fadeIn(3000);
});


$(document).ready(function(){
$("#image5").fadeIn(3000);
});



$(document).ready(function(){
$("#david").fadeIn(3000);
});


$(document).ready(function(){
$("#david1").fadeIn(3000);
});


$(document).ready(function(){
$("#david2").fadeIn(3000);
});


$(document).ready(function(){
$("#image9").fadeIn(3000);
});



$(document).ready(function(){
$("#image10").fadeIn(3000);
});


$(document).ready(function(){
$("#image11").fadeIn(3000);
});


