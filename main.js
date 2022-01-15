// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const arrayLikes = Array.from(document.querySelectorAll('ul span'));

arrayLikes.forEach( (heartBtn) => {

function like() {
  mimicServerCall()
  .then( () => {
   if (heartBtn.innerText === EMPTY_HEART) {
      heartBtn.innerText = FULL_HEART;
      heartBtn.className = 'like-glyph activated-heart';

   } else if (heartBtn.innerText === FULL_HEART) {
      heartBtn.innerText = EMPTY_HEART;
      heartBtn.className = 'like-glyph';
      }
    }
  )
  .catch(() => {
  document.querySelector('#modal').className = ''

  document.querySelector('#modal').innerText = "Random server error. Try again."

  setTimeout(() => {document.querySelector('#modal').className = 'hidden'}, 3000)
  })
}
heartBtn.addEventListener('click', like);
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
