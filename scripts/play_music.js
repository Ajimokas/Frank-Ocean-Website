
// Client ID and client secret to secure the API use, (cannot be accesses except by creator)
    const clientId = '0506f9e52a3544d0a3a3596dbdfa348d';
    const clientSecret = '070d6bb5158b4d87913b4d0796b5de79';

//async fucntion to to get the token  from the spotify API
const getToken = async () => {
    // fetch the api token link
    const result = await fetch('https://accounts.spotify.com/api/token', {
    // it is a post request, as specified on the spotify website
        method: 'POST',
        //required headers to authorize use of the API
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
// we need an access token to use the api, this will be returned by the function
    const data = await result.json();   
    return data.access_token;
}

// after getting the token, fetch the data that we want to display
//we want to display a search of playlists that are similar to the artist
getToken()
  .then((accessToken) => {
    fetch('https://api.spotify.com/v1/search?q=similar+to+frank+ocean+&type=playlist&limit=10', {
        //get call to retrieve the data and pass token in header to authorize access
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + accessToken }
    })
      .then((res) => res.json())
      .then((data) => {
        //for each playlist that is gotten, print out the name, description, make a button that links to the page, and then the image of that playlist so
        // that the personas can easily find it
        data.playlists.items.forEach((user) => {
            // get name and then add it as html to a list elemnent as we want a whole column of items (one for each playlist)
          const markup = `<li><b>${user.name}</b></li>`;
          document.querySelector('.desc').insertAdjacentHTML('beforeend', markup);
          // get description and then add it as html to a list elemnent as we want a whole column of items (one for each playlist)
          const markupDesc = `<li>${user.description}</li>`;
          document.querySelector('.desc').insertAdjacentHTML('beforeend', markupDesc);
          // get link nd then add it as html to a button's 'onclick' functionality 
          const markupLink = `<input type="button" onclick="location.href='${user.external_urls.spotify}'" value="Listen" />`
        document.querySelector('.desc').insertAdjacentHTML('beforeend', markupLink)
        // get image and then add it as html to a list elemnent as we want a whole column of items (one for each playlist)
          const markupImg = `<img width=100 height=100 style="border-radius: 50px" src="${user.images[0].url}">`;
          document.querySelector('.desc').insertAdjacentHTML('beforeend', markupImg);
        });
        console.log(data);
      })
      //catch any errors that occur
      .catch((error) => console.log('ERROR'));
  })
  .catch((error) => console.log('ERROR'));


