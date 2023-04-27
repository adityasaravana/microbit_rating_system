input.onButtonPressed(Button.A, function () {
    Likes += 1
    music.playTone(523, music.beat(BeatFraction.Quarter))
    datalogger.log(
    datalogger.createCV("Dislikes", Dislikes),
    datalogger.createCV("Likes", Likes)
    )
})
input.onButtonPressed(Button.AB, function () {
    Likes = 0
    Dislikes = 0
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "Likes",
    "Dislikes",
    "Light Level",
    "Sound Level",
    "Microbit Temperature"
    )
})
input.onButtonPressed(Button.B, function () {
    Dislikes += 1
    music.playTone(131, music.beat(BeatFraction.Quarter))
    datalogger.log(
    datalogger.createCV("Dislikes", Dislikes),
    datalogger.createCV("Likes", Likes)
    )
})
let Dislikes = 0
let Likes = 0
let Logging = true
datalogger.setColumnTitles(
"Likes",
"Dislikes",
"Light Level",
"Sound Level",
"Microbit Temperature"
)
loops.everyInterval(1000, function () {
    if (Logging) {
        datalogger.log(
        datalogger.createCV("Dislikes", Dislikes),
        datalogger.createCV("Likes", Likes),
        datalogger.createCV("Light Level", input.lightLevel()),
        datalogger.createCV("Sound Level", input.soundLevel()),
        datalogger.createCV("Microbit Temperature", input.temperature())
        )
    }
})
basic.forever(function () {
	
})
