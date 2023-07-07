const getUserSelectedText = () => {
    return window.getSelection().toString();
}


const frankYoung = document.querySelector("#about_img");
const frankPerforming = document.querySelector("#about_img1");
const frankHands = document.querySelector("#about_img2");

// Links to Pages after clicking on bakcground of nav bar
const aboutElement = document.querySelector("#about-element");
const discographyElement = document.querySelector("#discography-element");
const BTMElement = document.querySelector("#BTM-element");
const showsElement = document.querySelector("#shows-element");
const archiveElement = document.querySelector("#archive-element");

//When images are clicked display text
//Get the id of the image and then change the innerhtml to display the text
frankYoung.addEventListener("click", e => {
    frankYoungText = document.getElementById("about_img-text")
    frankYoungText.innerHTML = "Young Frank Ocean";
    frankYoungText.toggleAttribute('hidden');
})
//When images are clicked display text
//Get the id of the image and then change the innerhtml to display the text
frankPerforming.addEventListener("click", e => {
    frankPerformingText = document.getElementById("about_img1-text")
    frankPerformingText.innerHTML = "Frank Ocean Performing";
    frankPerformingText.toggleAttribute('hidden');
})
//When images are clicked display text
//Get the id of the image and then change the innerhtml to display the text
frankHands.addEventListener("click", e => {
    frankHandsText = document.getElementById("about_img2-text")
    frankHandsText.innerHTML = "Frank Ocean Old Video";
    frankHandsText.toggleAttribute('hidden');
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


function validate() {
    
//Check if the text here is even a letter
    function checkLetter(input)
  {
   var letters = /^[A-Za-z]+$/;
   if(input.match(letters)){
      return true;
     }
    else{
     return false;
     }
  }


// Check if the email is valid
  if( document.myForm.Email.value == "" ) {
    alert( "Please enter a valid email!!!!" );
    document.myForm.Email.focus() ;
    return false;
 }


 
 // Check if the first name is valid

 var firstNameValidate;
 firstNameValidate= document.myForm.Name.value

    if(firstNameValidate== ""){
        alert( "Box empty, Please Input your First Name!" );
       return false;
    }else if(checkLetter(firstNameValidate) == false) {
        alert( "Invalid Input, Please Input Your First Name!" );
        return false;
     }



//Check if the second name is valid 
var secondNameValidate;
 secondNameValidate= document.myForm.Name2.value
    if( secondNameValidate == "" ) {
       alert( "Box Empty, Please Input your Second Name!" );
       return false;
    }
    else if(checkLetter(secondNameValidate) == false){
        alert( "Invalid Input, Please Input your Second Name!" );
       return false;
    }

// Check if the message is empty or not
var messageValidate;
 messageValidate= document.myForm.message.value
    if( messageValidate == "" ) {
       alert('please input message')
       return false;
    }

// validating the country, tell the user if the country name is in valid input
var countryValidate;
countryValidate=document.myForm.Country.value
    if( countryValidate == "" ) {
       alert( "Please input a valid country name" );
       return false;
    }
    else if(checkLetter(countryValidate) == false){
        alert( "Invalid Input, Please Input your Second Name!" );
       return false;
    }
    return( true );
 }


// make all the  images progressivel fade into the page, using JQUERY for this 
 $(document).ready(function(){
     $("#about_img").fadeIn(3000);
 });



$(document).ready(function(){
   $("#about_img1").fadeIn(3000);
});


$(document).ready(function(){
   $("#about_img2").fadeIn(3000);
});


$(document).ready(function(){
   $("#about_text1").fadeIn(2000);
});


$(document).ready(function(){
   $("#about_text2").fadeIn(2000);
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
