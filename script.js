let valor
let foioperador = false
let operador
let fator

function digitar(n) {
    let esp = document.getElementById('esp')
    foioperador = false
    esp.value = n
}

function mais() {
    let esp = document.getElementById('esp')
    if (foioperador == true) {
        esp.value = `+`
        foioperador = true
        operador = 1
    } else {
        if (valor != null) {
            valor += Number(esp.value)
            esp.value = `${valor}+`
        } else {
        valor = Number(esp.value)
        esp.value = `+`
        foioperador = true
        operador = 1
        }
    }
}

function multp() { 
    let esp = document.getElementById('esp')
    if (foioperador == true) {
        esp.value = `X`
        foioperador = true
        operador = 2
    } else {
        valor = Number(esp.value)
        esp.value = `X`
        foioperador = true
        operador = 2
    }
}

function subt() {
    let esp = document.getElementById('esp')
    if (foioperador == true) {
        esp.value = `-`
        foioperador = true
        operador = 3
    } else {
        valor = Number(esp.value)
        esp.value = `-`
        foioperador = true
        operador = 3
    }
}

function divisao() {
    let esp = document.getElementById('esp')
    if (foioperador == true) {
        esp.value = `/`
        foioperador = true
        operador = 4
    } else {
        valor = Number(esp.value)
        esp.value = `/`
        foioperador = true
        operador = 4
    }
}

function result() {
    let esp = document.getElementById('esp')
    let fator = Number(esp.value)    
    if (operador == 1) {
        valor += fator
        esp.value = `${valor}`
    } else if (operador == 2) {
         valor *= fator
         esp.value = `${valor}`
    } else if (operador == 3) {
        valor -= fator
        esp.value = `${valor}`
    } else if (operador == 4) {
    valor /= fator
    esp.value = `${valor}`
}   
}

function del() {
    let esp = document.getElementById('esp')
    esp.value = ''
    valor = null
    fator = null
    operador = null
}

