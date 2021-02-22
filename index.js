
var drums = document.querySelectorAll("button.drum");

function playSound(textKey) {
    switch (textKey) {
        case "w":
            var aud = new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "a":
            var aud = new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "s":
            var aud = new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "d":
            var aud = new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        case "j":
            var aud = new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "k":
            var aud = new Audio("sounds/crash.mp3");
            aud.play();
            break;
        case "l":
            var aud = new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
        default:
    }
}

function buttonAnimation(textKey) {

    var buttonClass = document.querySelector("." + textKey);
    buttonClass.classList.add("pressed");
    setTimeout(function() {
        buttonClass.classList.remove("pressed");
    }, 100);   //0.1 sec
}

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        playSound(this.textContent);
        buttonAnimation(this.textContent);
    })
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

