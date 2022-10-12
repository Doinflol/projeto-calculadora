let valor
let foioperador = false
let operador
let continua = false
let fator

function digitar(n) {
    let esp = document.getElementById('esp')
    if (foioperador) {
        esp.value = ''
        foioperador = false
    }
    esp.value += n
}

function del() {
    let esp = document.getElementById('esp')
    esp.value = ''
    valor = 0
    fator = 0
    operador = 0
}

function mais() {
    let esp = document.getElementById('esp')
    valor = Number(esp.value)
    esp.value = `+`
    foioperador = true
    operador = 1
    continua = true
    }

function multp() {
    let esp = document.getElementById('esp')
    valor = Number(esp.value)
    esp.value = `X`
    foioperador = true
    operador = 2
}

function subt() {
    let esp = document.getElementById('esp')
    valor = Number(esp.value)
    esp.value = `-`
    foioperador = true
    operador = 3
}

function divisao() {
    let esp = document.getElementById('esp')
    valor = Number(esp.value)
    esp.value = `/`
    foioperador = true
    operador = 4
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

