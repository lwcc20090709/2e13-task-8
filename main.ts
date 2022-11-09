let degree = 0
input.onButtonPressed(Button.A, function () {
    degree = input.compassHeading()
    if (degree == 0) {
        basic.showString("N")
        music.playMelody("A F D F A G E F ", 407)
    }
    if (degree == 90) {
        basic.showString("E")
        music.playMelody("G B A G C5 B A B ", 120)
    }
    if (degree == 180) {
        basic.showString("S")
        music.playMelody("C5 B A G F E D C ", 230)
    }
    if (degree == 270) {
        basic.showString("W")
        music.playMelody("B A G A G F A C5 ", 45)
    }
})
input.onButtonPressed(Button.B, function () {
    degree = input.compassHeading()
    if (degree >= 0) {
        basic.showString("N")
    }
    if (degree == 45) {
        basic.showString("NE")
    }
    if (degree > 90) {
        basic.showString("E")
    }
    if (degree == 135) {
        basic.showString("SE")
    }
    if (degree > 180) {
        basic.showString("S")
    }
    if (degree == 225) {
        basic.showString("SW")
    }
    if (degree > 270) {
        basic.showString("W")
    }
    if (degree == 315) {
        basic.showString("NW")
    }
})
