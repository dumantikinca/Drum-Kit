// Target button and add event lister. Event lister usually has two
// parameters. First is type indicating even type to listen to.
// Second parameter is a listener which is a java script function
// thats going to be called when the click event gets detected.

// Implementing loop for all buttons.
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
  // looking through the document querying for all the of
  // the selectors that have class drum and then selecting each element
  // in array and all event listener
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // 'this' is to identity of the button that triggered the event listener
    // create var - variable to hold the value
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

// Using keyboard event listeners to check for key presses
// Instead of adding click as an event lister, we can add
// for keydown instead
// Detecting keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Create function that takes a character and checks against switch
// statement in order to play correct sound. And then call it inside
// event listener for keypress and well as drum buttons.

function makeSound(key) {
    switch (key) {
      case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;

      case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;

      case "s":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;

      case "d":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;

      case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;

      case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;

      case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;

      default: console.log();

  }
}

// Set animation to keypress and click

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  // setting timeout on animation
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}
