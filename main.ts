basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showString("T.BAJA")
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showString("T.ALTA")
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showNumber(input.temperature())
        basic.showString("T.NORMAL")
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    }
})
