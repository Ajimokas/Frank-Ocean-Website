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


//dropt bown box using jquery 
$(function() { // Dropdown toggle
    //when you click the lost button to show the dropdown menu
    $('.dropdown-switch').click(function() { $(this).next('.dropdown').slideToggle();
    });

    $(document).click(function(e) 
    { 
    //make target variable to check if the drop down has been clicked and to slide up when it is toggled
    var target = e.target; 
    if (!($(target).is('.dropdown-switch')) && !$(target).parents().is('.dropdown-switch')){
    //make the dropdown menu slide all the way up
     $('.dropdown').slideUp(); }
    });
    });

    // Fade in Imges using JQuery 
    
    $(document).ready(function(){
        $("#image1").fadeIn(2000);
    });


    $(document).ready(function(){
        $("#image2").fadeIn(2000);
    });


    $(document).ready(function(){
        $("#image3").fadeIn(2000);
    });


    $(document).ready(function(){
        $("#image4").fadeIn(3000);
    });


    $(document).ready(function(){
        $("#image5").fadeIn(3000);
    });


    $(document).ready(function(){
        $("#image6").fadeIn(3000);
    });



    $(document).ready(function(){
        $("#image7").fadeIn(4000);
    });





