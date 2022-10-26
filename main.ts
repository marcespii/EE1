let suma = 0
let núm1 = 0
let núm2 = 0
input.onButtonPressed(Button.A, function () {
    nombres_al_atzar()
})
function suma1 () {
    suma = núm1 + núm2
    basic.showNumber(suma)
    basic.pause(500)
    basic.clearScreen()
}
function nombres_al_atzar () {
    núm1 = randint(0, 9)
    núm2 = randint(0, 9)
    basic.showString("" + núm1 + "+" + núm2)
    basic.pause(500)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    suma1()
})
