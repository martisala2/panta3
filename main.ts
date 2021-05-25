basic.forever(function () {
    I2C_LCD1602.LcdInit(39)
    I2C_LCD1602.BacklightOff()
    I2C_LCD1602.ShowString("Hello", 0, 0)
    basic.pause(1000)
    I2C_LCD1602.clear()
})
