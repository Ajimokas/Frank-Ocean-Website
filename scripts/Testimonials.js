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
  
  
  

(
    function (){
        // Get the id for thee user picture, username and their review
        const userPic = document.querySelector('#user-img')
        const userName = document.querySelector('#user-name')
        const userText = document.querySelector('#user-text')

// create a variable for tracking which user we are looking at in 'index'
        // userlist represents the array of users 
        // button is for the button that will be clicked to slide the testimonials
        let index = 0
        const userList = []
        const button = document.querySelectorAll('.btn')

        // User is  a class with three fields of image, name and review, which are the three fields I need to display for a user, i would need to have theier name, thier user icon and the review they set

        function User(image, name, review){
            this.image = image
            this.name = name
            this.review = review
        }

        //Create a new user each time you click
        //get their specific image from the backend as well
        function createUser(image, name, review){
            let Img= `./images/${image}.jpg`     
            let aUser = new User(Img,name,review)

            userList.push(aUser);
        }

        createUser(0, 'Devon', 'Frank Oceans performance at Coachella will be AMAZING! I say him in 2013 back when he was performing Nostalgia Ultra, that was one of the best concerts that I had ever been to. He was an awesome perfomer. His skill and vocal abilities were out of this world. My favorite song back then was American Wedding and the guitar part at the end was phenomenal. I definitely look forward to him performing at coachella for the first time EVER!! and I KNOW he will do great!!')

        createUser(1, 'Laura'," Out of all the artists I have had the opportunity to see live to date, Frank Ocean comes out top. In 2013, Out of all the artists I have had the opportunity to see live to date, Frank Ocean comes out top. In 2013, headlining the second stage at Wireless Festival, I made great attempt to get I good spot in the crowd, anticipating that this performance wouldn't disappoint. And it didn't. There were no gimmicks, just Frank Ocean and his piano. It was a breathtaking, solo live performance. He performed most of the Channel Orange album, which the crowd reacted eagerly to each and every track intro. He also performed the full version of Pyramids, which got the crowd really going . The highlight of his set has to be Thinkin' bout you. I think this is the most memorable live musical moment I am proud to say I was present for. ")

        createUser(2, 'Brandon', 'I am really looking forward to him coming back, I mean it has been years since we saw him perform. Some of his greatest live shows were back in 2013, damn I still remember him performing nostalgia ultra for us in tiny venue spaces and now he is in the big leagues, I really hope he does well for coachella. I know he flakes alot because sometimes he has health issues, but I think this time it might be different with him, I hope it all goes alright!!')

        //This is how we determine if the correct button is pressed, which controls the functionality. 
        button.forEach(function(btn){
            btn.addEventListener("click", function(e){
                e.preventDefault()
                 //if the previous button is clicked go back the the index before hand, hence, index = index - 1
                // this means it woukld go back to the previous object
                if (e.target.parentElement.classList.contains('prevButton')){
                    if(index === 0){
                        index = userList.length
                    }
                    index = index - 1
                    userPic.src = userList[index].image
                    userName.textContent = userList[index].name
                    userText.textContent = userList[index].review
                }
                //if the next button is clicked go back to the next index, hence, index = index + 1
                // this means it woukld go back to the next object
                if (e.target.parentElement.classList.contains('nextButton')){
                    index= index+ 1;
                    if(index === userList.length){
                        index = 0
                    }
                
                    userPic.src = userList[index].image
                    userName.textContent = userList[index].name
                    userText.textContent = userList[index].review
                }
            })
        })

    }
) ()

