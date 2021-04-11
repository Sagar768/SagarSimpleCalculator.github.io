function valueButton(e) {
    calc.screen.value += e.value
}

function del() {
    calc.screen.value = parseInt(calc.screen.value /= 10)
}

function ac() {
    calc.screen.value = ' '
}



function equals() {
    calc.screen.value = eval(calc.screen.value)
}