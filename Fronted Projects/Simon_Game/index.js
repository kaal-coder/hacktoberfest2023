
var colors = ["blue", "red", "yellow", "green"]
var gamePattern = []
var userClickPattern = []
var start = false
var levelNumber = 1

//This function genetrates random color and push that random color in array gamePattern
function colorGenerator() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomColor = colors[randomNumber]
    gamePattern.push(randomColor)
    // console.log(gamePattern)
}


$(document).on("keypress", function () {
    if (!start) {
        colorGenerator()
        showGamePattern()
        $("h1").text("Level-" + levelNumber)  
        start = true
        // console.log(gamePattern)
    }
})


for (var i = 0; i < 4; i++)
    document.querySelectorAll(".btn")[i].addEventListener("click", function (event) {
        if (start) {
            var userClickButtonColor = event.target.id
            userClickPattern.push(userClickButtonColor)
            // console.log(userClickPattern)

            animation(userClickButtonColor)
            createSound(userClickButtonColor)

            if (sublist() && userClickPattern.length == gamePattern.length) {
                levelNumber++
                userClickPattern = []
                colorGenerator()
                showGamePattern()
                $("h1").text("Level-" + levelNumber)
                console.log(gamePattern)
            }
            else if (!sublist()) {
                gameOver()
            }
        }
    })


// for animation when button is clicked
function animation(color) {
    $("#" + color).addClass("animate")

    setTimeout(function () {
        $("#" + color).removeClass("animate")
    }, 90)
}

function createSound(color) {
    var audio = new Audio("sound/sounds_" + color + ".mp3")
    audio.play()
}


function showGamePattern() {
    var i = 0;
    var pattern = setInterval(thisFunction, 1200)

    function thisFunction() {
        if (i < gamePattern.length) {
            var currentColor = gamePattern[i]
            animation(currentColor)
            createSound(currentColor)
            i++
        }
        else {
            clearInterval(pattern)
        }
    }
}

function sublist() {
    for (var n = 0; n < userClickPattern.length; n++) {
        if (userClickPattern[n] != gamePattern[n])
            return false
    }

    return true

}

function gameOver() {
    levelNumber = 1
    userClickPattern = []
    gamePattern = []
    start = false

    $("body").addClass("out")
    $("h1").text("GAME OVER!🙁")

    setTimeout(function () {
        $("body").removeClass("out")
        $("h1").text("Press any key to restart")
    }, 1000)


    var audio = new Audio("sound/game_over.mp3")
    audio.play()
}