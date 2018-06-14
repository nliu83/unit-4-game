//generating random number between 19 to 120
var targetNumber = Math.floor(Math.random() * 102) + 19;

console.log(targetNumber)

$("#number-to-guess").text(targetNumber);

var counter = 0; 
var wins = 0;
var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);
$("#currentscore").text(counter);
//for each possible image, there is a value between 1 -  12

var numberOptions = []
    
    for (i=0;i < 4 ; i++ ){

        numberOptions[i] = Math.floor(Math.random() * 12) + 1;
        
        }

console.log(numberOptions);

function reset(){
    counter = 0;
    $("#currentscore").text(counter);
    targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
    
    for (i=0; i<numberOptions.length; i++) {
        numberOptions[i] = Math.floor(Math.random() * 12) + 1;
    }
    console.log(numberOptions);
    } 



for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageArray = $(".crystal-images");
    console.log("1 : " + imageArray);
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    
    imageArray.addClass("crystal-image");
    //console.log("2 : " + imageArray);
    
    // Each imageCrystal will be given a src link to the crystal image
    //imageArray.attr(".crystal-images");

    //console.log("3 : " + imageArray);
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.

    imageArray.attr("data-crystalvalue", numberOptions[i]);
    
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $(".crystal-images").append(imageArray);
  }


$(".crystal-image").on("click", function() {

    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    console.log("Score: " + counter);

    $("#currentscore").text(counter);

    if (counter === targetNumber) {
        console.log("You win!");
        wins++;
        $("#wins").text(wins);
        reset ()
        // counter = 0;
        // targetNumber = Math.floor(Math.random() * 102) + 19;
        // console.log(targetNumber);
        // $("#number-to-guess").text(targetNumber);
        // $("#currentscore").text(counter);
      }
  
      else if (counter >= targetNumber) {
        console.log("You lose!!");
        losses++;
        $("#losses").text(losses);
        reset()
        // counter = 0;
        // targetNumber = Math.floor(Math.random() * 102) + 19;
        // console.log(targetNumber);
        // $("#number-to-guess").text(targetNumber);
        // $("#currentscore").text(counter);
      }
    
});