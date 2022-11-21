function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function p_stop () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function p_go () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function p_cliniote () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
basic.forever(function () {
    vert()
    p_stop()
    if (input.buttonIsPressed(Button.A)) {
        jaune()
        basic.pause(500)
        rouge()
        p_go()
        basic.pause(500)
        p_cliniote()
        basic.pause(83.3)
        p_stop()
        basic.pause(83.3)
        p_cliniote()
        basic.pause(83.3)
        p_stop()
        basic.pause(83.3)
        p_cliniote()
        basic.pause(83.3)
        p_stop()
        basic.pause(83.3)
    }
})
