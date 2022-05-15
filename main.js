// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeGlyphs = document.querySelectorAll(".like-glyph");


likeGlyphs.forEach(likeGlyph => {
likeGlyph.addEventListener("click",invokeServerCall);
});

function invokeServerCall(e){
  let likeGlyph = e.target
  mimicServerCall()
.then((res) => {
  // let activeHeart = document.querySelector(".activated-heart")
  if(likeGlyph.textContent === EMPTY_HEART){
    likeGlyph.textContent = FULL_HEART
    likeGlyph.classList.add("activated-heart")
  }else{
    likeGlyph.textContent = EMPTY_HEART
    likeGlyph.classList.remove("activated-heart")
  }
  console.log(res)
})
.catch((error) => {
  let element = document.getElementById("modal")
  element.classList.remove("hidden")
//  console.log(error.message)
  myTimeOut = setTimeout(myStopFunction, 3000);

  function myStopFunction() {
  let addElement = document.getElementById("modal")
  console.log(addElement)
  addElement.classList.add("hidden");
  clearTimeout(myTimeOut);
}
})
console.log("toast!")
}







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
