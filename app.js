// import functions

// reference needed DOM elements

const catImage = document.getElementById('cat-image');


// set event listeners 
const catAudio = document.getElementById('cat-audio');

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
catImage.addEventListener('click', () => {
    catAudio.play();

});
