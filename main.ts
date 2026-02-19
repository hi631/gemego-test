let rmode = 0
forever(function () {
    rmode = 0
    if (rmode) {
        pins.LED.digitalWrite(true)
    }
    pause(200)
    if (rmode) {
        pins.LED.digitalWrite(false)
    }
    pause(200)
})
forever(function () {
    scene.setBackgroundImage(assets.image`autumn`)
    pause(1000)
    scene.setBackgroundImage(assets.image`forest2`)
    pause(1000)
})
