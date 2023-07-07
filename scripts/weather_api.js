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
  
    // Defining the variable for the inpur, cityName, temperature, and weathermessage
    var input = document.querySelector('.input_text');
    var cityName = document.querySelector('#city-name');
    var temp = document.querySelector('.temp');
    var weatherMessage = document.querySelector('.message');

    // Desfining the button vairable
    var button= document.querySelector('.submit');
    var metricMessage = document.querySelector('.metric');


    button.addEventListener('click', function(name){
    //fethc apit to grab the data from the website
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=820ed3ff2c22a09a6970754b01b54b5d')
    .then(response => response.json())
    .then(data => {
    //Save the temperature value, the name and the description of the weather condition
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    // Change the temperature value from kelvin to centigrade by removing 273 from the data gained 
    var tempValueDeg = parseInt(tempValue) - 273;
    //set the city name's inner html to the value received from the api
    cityName.innerHTML = nameValue;
    //set the weatherMessage inner html to the value received from the api
    weatherMessage.innerHTML = "Current Weather condition : "+descValue;
    //set the temeperature(°C) inner html to the value received from the api and add the centigrade symbol 
    temp.innerHTML = "Temperature : "+tempValueDeg + "°C";
    
    input.value ="";
    // If the description is of negative 
    if ( (descValue.includes("rain") || descValue.includes("snow") || descValue.includes("haze") || descValue.includes("hail"))){
        metricMessage.innerHTML = "It is unlikely Frank can perform here :(";
    }
    else{
        metricMessage.innerHTML = "It is likely Frank can perform here!";
    }
        
    })
    .catch(err => alert("Invalid city Name!"));
    })