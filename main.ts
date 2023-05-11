bluetooth.onBluetoothConnected(function () {
    music.playMelody("C D E F G A B C5 ", 800)
})
bluetooth.onBluetoothDisconnected(function () {
    music.playMelody("C5 B A G F E D C ", 800)
})
input.onButtonPressed(Button.A, function () {
    Likes += 1
    music.playTone(523, music.beat(BeatFraction.Quarter))
    bluetooth.uartWriteString("Likes: " + Likes + ", Dislikes: " + Dislikes)
    datalogger.log(
    datalogger.createCV("Likes", Likes),
    datalogger.createCV("Dislikes", Dislikes)
    )
})
input.onButtonPressed(Button.AB, function () {
    Likes = 0
    Dislikes = 0
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "Likes",
    "Dislikes"
    )
    datalogger.log(
    datalogger.createCV("Likes", Likes),
    datalogger.createCV("Dislikes", Dislikes)
    )
})
input.onButtonPressed(Button.B, function () {
    Dislikes += 1
    music.playTone(131, music.beat(BeatFraction.Quarter))
    bluetooth.uartWriteString("Likes: " + Likes + ", Dislikes:" + Dislikes)
    datalogger.log(
    datalogger.createCV("Likes", Likes),
    datalogger.createCV("Dislikes", Dislikes)
    )
})
let Dislikes = 0
let Likes = 0
let Logging = true
bluetooth.uartWriteString("Logging Started")
datalogger.setColumnTitles(
"Likes",
"Dislikes"
)
loops.everyInterval(1000, function () {
    if (Logging) {
    	
    }
})
basic.forever(function () {
	
})
