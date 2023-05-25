input.onPinPressed(TouchPin.P0, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Yes)
    addLike()
})
function addDislike () {
    Dislikes += 1
    music.playTone(131, music.beat(BeatFraction.Quarter))
    bluetooth.uartWriteString("Likes: " + Likes + ", Dislikes:" + Dislikes)
    datalogger.log(
    datalogger.createCV("Likes", Likes),
    datalogger.createCV("Dislikes", Dislikes)
    )
}
bluetooth.onBluetoothConnected(function () {
    music.playMelody("C D E F G A B C5 ", 800)
})
bluetooth.onBluetoothDisconnected(function () {
    music.playMelody("C5 B A G F E D C ", 800)
})
input.onButtonPressed(Button.A, function () {
    addLike()
})
function addLike () {
    Likes += 1
    music.playTone(523, music.beat(BeatFraction.Quarter))
    bluetooth.uartWriteString("Likes: " + Likes + ", Dislikes: " + Dislikes)
    datalogger.log(
    datalogger.createCV("Likes", Likes),
    datalogger.createCV("Dislikes", Dislikes)
    )
}
input.onButtonPressed(Button.AB, function () {
    reset()
})
input.onButtonPressed(Button.B, function () {
    addDislike()
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Yes)
    addLike()
})
function reset () {
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
}
let Likes = 0
let Dislikes = 0
music.playTone(262, music.beat(BeatFraction.Whole))
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
