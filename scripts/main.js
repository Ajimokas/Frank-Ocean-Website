const getUserSelectedText = () => {
    return window.getSelection().toString();
}



const spotifyImage = document.querySelector("#spotify-image");
const spotifyImageNew = document.querySelector("#spotify-image-new");
const blondPromoImage = document.querySelector("#blond-promo-image");

// Links to Pages after clicking on bakcground of nav bar
const aboutElement = document.querySelector("#about-element");
const discographyElement = document.querySelector("#discography-element");
const BTMElement = document.querySelector("#BTM-element");
const showsElement = document.querySelector("#shows-element");
const archiveElement = document.querySelector("#archive-element");

//When images are clicked display text
//Get the id of the image and then change the innerhtml to display the text
spotifyImage.addEventListener('click', e => {
    spotifyImageText = document.getElementById("spotify-image-text")
    spotifyImageText.innerHTML = "Frank Ocean's Earlier Spotify Picture";
    spotifyImageText.toggleAttribute('hidden');
})


//When images are clicked display text
//Get the id of the image and then change the innerhtml to display the text
blondPromoImage.addEventListener("click", e => {
    blondPromoImageText = document.getElementById("blond-promo-image-text")
    blondPromoImageText.innerHTML = "Frank Ocean's Blonde Promotional Picture";
    blondPromoImageText.toggleAttribute('hidden');
})

//When images are clicked display text
//Get the id of the image and then change the innerhtml to display the text
spotifyImageNew.addEventListener("click", e => {
    spotifyImageNewText=  document.getElementById("spotify-image-new-text")
    spotifyImageNewText.innerHTML = "Frank Ocean's Most Recent Spotify Picture";
    spotifyImageNewText.toggleAttribute('hidden');
})
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

//<!-- Fade in the images that appear on screen -->
$(document).ready(function(){
    $("#spotify-image").fadeIn(3000);
});


    $(document).ready(function(){
        $("#blond-promo-image").fadeIn(3000);
    });



    $(document).ready(function(){
        $("#spotify-image-new").fadeIn(3000);
    });



//<!-- Fade in the text boxes that appear on screen -->

    $(document).ready(function(){
        $("#coachella-text").fadeIn(2000);
    });


    $(document).ready(function(){
        $("#homer-text").fadeIn(2000);
    });



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
