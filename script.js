let valor
let foioperador = false
let operador
let fator
let inicial

function digitar(n) {
    let esp = document.getElementById('esp')
    foioperador = false
    esp.value = n
}

function mais() {
    let esp = document.getElementById('esp')
    let proximo = document.getElementById('hist')
    if (foioperador == true) {
        esp.value = `${valor}`
        foioperador = true
        operador = '+'
    } else {
        if (valor != null) {
            valor += Number(esp.value)
            inicial += Number(esp.value)
            esp.value = `${valor}`
            proximo.value = `${valor} +`
            operador = '+'
        } else {
            valor = Number(esp.value)
            inicial = Number(esp.value)
            esp.value = `${valor}`
            proximo.value = `${inicial} +`
            foioperador = true
            operador = '+'        
        }
    }
}

function multp() { 
    let esp = document.getElementById('esp')
    let proximo = document.getElementById('hist')
    if (foioperador == true) {
        esp.value = `${valor}`
        foioperador = true
        operador = 'x'
    } else {
        if (valor != null) {
            if (operador == '+') {
                valor += Number(esp.value)
                inicial += Number(esp.value)
                proximo.value = `${inicial} x`
                operador = 'x'
            } else if (operador == '-') {
                valor -= Number(esp.value)
                inicial -= Number(esp.value)
                proximo.value = `${inicial} x`
                operador = 'x'
            }
            else {
            valor *= Number(esp.value)
            inicial *= Number(esp.value)
            esp.value = `${valor}`
            proximo.value = `${valor} x`
            }
        } else {
            valor = Number(esp.value)
            inicial = Number(esp.value)
            esp.value = `${valor}`
            proximo.value = `${inicial} x`
            foioperador = true
            operador = 'x'        
        }
    }
}

function subt() {
    let esp = document.getElementById('esp')
    let proximo = document.getElementById('hist')
    if (foioperador == true) {
        esp.value = `${valor}`
        foioperador = true
        operador = '-'
    } else {
        if (valor != null) {
            if (operador == 'x') {
                valor *= Number(esp.value)
                inicial *= Number(esp.value)
                proximo.value = `${inicial} -`
            } else if (operador == '+') {
                valor += Number(esp.value)
                inicial += Number(esp.value)
                proximo.value = `${inicial} -`
                operador = '-'
            } else if (operador == '/') {
                valor /= Number(esp.value)
                inicial /= Number(esp.value)
                proximo.value = `${inicial} -`
                operador = '-'
            } else {            valor -= Number(esp.value)
                inicial -= Number(esp.value)
                esp.value = `${valor}`
                proximo.value = `${valor} -`
                operador = '-'
            }
        } else {
            valor = Number(esp.value)
            inicial = Number(esp.value)
            esp.value = `${valor}`
            proximo.value = `${inicial}-`
            foioperador = true
            operador = '-'        
        }
    }
}

function divisao() {
    let esp = document.getElementById('esp')
    let proximo = document.getElementById('hist')
    if (foioperador == true) {
        esp.value = `${valor}`
        foioperador = true
        operador = '/'
    } else {
        if (valor != null) {
            if (operador == '+') {
                valor += Number(esp.value)
                inicial += Number(esp.value)
                proximo.value = `${inicial} /`
                operador = '/'
            } else if (operador == 'x') {
                valor *= Number(esp.value)
                inicial *= Number(esp.value)
                proximo.value = `${inicial} /`
                operador = '/'
            } else if (operador == '-') {
                valor -= Number(esp.value)
                inicial -= Number(esp.value)
                proximo.value = `${inicia} /`
                operador = '/'
            } else {
                valor /= Number(esp.value)
                inicial /= Number(esp.value)
                esp.value = `${valor}`
                proximo.value = `${valor} /`
            }
        } else {
        valor = Number(esp.value)
        inicial = Number(esp.value)
        esp.value = `${valor}`
        proximo.value = `${inicial}/`
        foioperador = true
        operador = '/'        
        }
    }
}

function result() {
    let esp = document.getElementById('esp')
    let fator = Number(esp.value)   
    let proximo = document.getElementById('hist') 
    if (operador == '+') {
        valor += fator
        proximo.value = `${inicial} + ${fator} =`
        esp.value = `${valor}`
    } else if (operador == 'x') {
         valor *= fator
         proximo.value = `${inicial} x ${fator} =`
         esp.value = `${valor}`
    } else if (operador == '-') {
        valor -= fator
        proximo.value = `${inicial} - ${fator} =`
        esp.value = `${valor}`
    } else if (operador == '/') {
        valor /= fator
        proximo.value = `${inicial} / ${fator} =`
        esp.value = `${valor}`
}
    valor = null
}

function del() {
    let esp = document.getElementById('esp')
    let proximo = document.querySelector('#hist')
    esp.value = ''
    hist.value = ''
    valor = null
    fator = null
    operador = null
}

