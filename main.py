rmode = 0

def on_forever():
    global rmode
    rmode = 0
    if rmode:
        pins.LED.digital_write(True)
    pause(200)
    if rmode:
        pins.LED.digital_write(False)
    pause(200)
forever(on_forever)

def on_forever2():
    scene.set_background_image(assets.image("""
        autumn
        """))
    pause(1000)
    scene.set_background_image(assets.image("""
        forest2
        """))
    pause(1000)
forever(on_forever2)
