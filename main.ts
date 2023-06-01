function addDislike () {
    Dislikes += 1
    music.playTone(131, music.beat(BeatFraction.Quarter))
    serial.writeValue("Dislikes", Dislikes)
}
function sweetChildOMine () {
    music.setTempo(189)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
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
    serial.writeValue("Likes", Likes)
}
input.onButtonPressed(Button.AB, function () {
    sweetChildOMine()
    basic.showString("L")
    basic.showString("" + (Likes))
    basic.showString("D")
    basic.showString("" + (Dislikes))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    addDislike()
})
let Likes = 0
let Dislikes = 0
music.playTone(262, music.beat(BeatFraction.Whole))
let Logging = true
loops.everyInterval(1000, function () {
    if (Logging) {
    	
    }
})
