$(document).ready(function() {

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
    
    numberOptions[0] = Math.floor(Math.random() * 12) + 1;
    numberOptions[1] = Math.floor(Math.random() * 12) + 1;
    numberOptions[2] = Math.floor(Math.random() * 12) + 1;
    numberOptions[3] = Math.floor(Math.random() * 12) + 1;

    
    console.log(numberOptions);
    };


    // For each iteration, we will create an imageCrystal
    var image1 = $("<img>");
    var image2 = $("<img>");
    var image3 = $("<img>");
    var image4 = $("<img>");
    

    
    image1.addClass("crystal-images");
    image2.addClass("crystal-images");
    image3.addClass("crystal-images");
    image4.addClass("crystal-images");
    
    image1.attr("src", "assets/images/amethyst.jpg");
    image2.attr("src", "assets/images/clearquart.jpg");
    image3.attr("src", "assets/images/diamond.jpg");
    image4.attr("src", "assets/images/greenquart.jpg");

    image1.attr("data-crystalvalue", numberOptions[0]);
    image2.attr("data-crystalvalue", numberOptions[1]);
    image3.attr("data-crystalvalue", numberOptions[2]);
    image4.attr("data-crystalvalue", numberOptions[3]);
    
    // console.log(numberOptions[2]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(image1);
    $("#crystals").append(image2);
    $("#crystals").append(image3);
    $("#crystals").append(image4);

$(".crystal-images").on("click", function() {

    
    

    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    console.log("Score: " + counter);

    $("#currentscore").text(counter);

    if (counter === targetNumber) {
        alert("You win!");
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
        alert("You lose!!");
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


});