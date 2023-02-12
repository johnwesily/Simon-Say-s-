
var buttonColours =["red","green","blue","yellow"];
var gamePattern=[];
var userClickPattern=[];
var Level=0;
var started=false;


$(document).keypress(function (){
    if(!started){
    $("#level-title").text("LEVEL " + Level);
    nextSequence();
    started=true;
    }
});


$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");

  userClickPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickPattern.length-1);

});


function checkAnswer(currentLevel){


  if(gamePattern[currentLevel] ===userClickPattern[currentLevel]){

    console.log("success");

    if(userClickPattern.length === gamePattern.length){
      setTimeout( function(){
        nextSequence();
      }, 1000);
    }

  }

  else{
    console.log("wrong");
    var l="wrong";
    playSound(l);
    $("body").addClass("game-over");

    setTimeout( function(){
      $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over ,Press Any Key to Restart");
    startOver();
  }
}


function startOver(){
  Level=0;
  gamePattern=[];
  started=false;
}



function nextSequence(){

   userClickPattern= [] ;

  Level++;
  $("#level-title").text("Level "+Level);

  var randomNumber = Math.floor(Math.random()*4);

var randomChosenColour=buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
animatePress(randomChosenColour);

}







function playSound(name){

var audio=new Audio("sounds/"+name+".mp3");
audio.play();

}




function animatePress(currentColour){
   $("#"+currentColour).addClass("pressed");

   setTimeout( function(){
     $("#"+currentColour).removeClass("pressed");
 },100);

}
