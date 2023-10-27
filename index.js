// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }


//For clicks
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

//For keyboard

document.addEventListener("keydown", function(event){
    var keyboardPressed=event.key;

    makesound(keyboardPressed);

    buttonAnimation(keyboardPressed);
});


function makesound(key){
    switch (key) {
    case "w":
        var tom1= new Audio('/Drum-Kit-Game/sounds/tom-1.mp3');
        tom1.play();
        break;

    case "a":
        var tom2= new Audio('/Drum-Kit-Game/sounds/tom-2.mp3');
        tom2.play();
        break;
        
    case "s":
        var tom3= new Audio('/Drum-Kit-Game/sounds/tom-3.mp3');
        tom3.play();
        break;                

    case "d":
        var tom4= new Audio('/Drum-Kit-Game/sounds/tom-4.mp3');
        tom4.play();
        break;
    case "j":
        var snare= new Audio('/Drum-Kit-Game/sounds/snare.mp3');
        snare.play();
        break;
    case "k":
        var crash= new Audio('/Drum-Kit-Game/sounds/crash.mp3');
        crash.play();
        break;
    case "l":
        var kick_bass= new Audio('/Drum-Kit-Game/sounds/kick-bass.mp3');
        kick_bass.play();
        break;
    default:
        console.log(buttonPressed);
        break;
}
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);

    activeKey.classList.add("pressed");

    setTimeout(function (){
        activeKey.classList.remove("pressed");
    }, 100);
    
}
