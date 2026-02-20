let rmode = 0
forever(function () {
    scene.setBackgroundImage(assets.image`autumn`)
    pause(1000)
    scene.setBackgroundImage(assets.image`forest2`)
    pause(1000)
})
forever(function () {
    rmode = 1
    if (rmode) {
        pins.P13.digitalWrite(true)
    }
    pause(200)
    if (rmode) {
        pins.P13.digitalWrite(false)
    }
    pause(200)
})
