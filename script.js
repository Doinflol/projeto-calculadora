let valor
let foioperador = false
let operador
let fator
let inicial
let resultado
let repete
let atual
let ultimo
let valores = []

function digitar(n) {
    let esp = document.getElementById('esp')
    if (foioperador == true || resultado == true) {
        esp.value = n
        foioperador = false
        resultado = false
        repete = false
        ultimo = Number(esp.value)
    } else {
        esp.value += n
        foioperador = false
        ultimo = Number(esp.value)
    }
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
            foioperador = true
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
    foioperador = true
    

}

function multp() { 
    let esp = document.getElementById('esp')
    let proximo = document.getElementById('hist')
    if (foioperador == true) {
        esp.value = `${valor}`
        proximo.value = `${inicial} x`
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
    foioperador = true
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
            proximo.value = `${inicial} -`
            foioperador = true
            operador = '-'        
        }
    }
    foioperador = true
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
        proximo.value = `${inicial} /`
        foioperador = true
        operador = '/'        
        }
    }
    foioperador = true
}

function result() {
    let esp = document.getElementById('esp')
    let fator = Number(esp.value)
    let proximo = document.getElementById('hist')
    if (repete == true) {
    if (operador == '+') { 
        atual = fator
        fator += ultimo
        proximo.value = `${atual} + ${ultimo} =`
        esp.value = `${fator}`
    } else if (operador == 'x') {
        atual = fator
        fator *= ultimo
        proximo.value = `${atual} x ${ultimo} =`
        esp.value = `${fator}`
    } else if (operador == '-') {
        atual = fator
        fator -= ultimo
        proximo.value = `${atual} - ${ultimo} =`
        esp.value = `${fator}`
    } else if (operador == '/') {
        atual = fator
        fator /= ultimo
        proximo.value = `${atual} / ${ultimo} =`
        esp.value = `${fator}`
    }
    } else {
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
    }
    valor = null
    resultado = true
    repete = true
    let gravado = document.getElementById('seltab')
    let item = document.createElement('p')
    valores.push(Number(proximo.value))
    item.innerHTML = `${proximo.value} ${esp.value}`
    gravado.appendChild(item)

}

function del() {
    let esp = document.getElementById('esp')
    let proximo = document.querySelector('#hist')
    let gravado = document.getElementById('seltab')
    let item = document.createElement('H2')
    esp.value = ''
    hist.value = ''
    valor = null
    fator = null
    operador = null
    resultado = null
    repete = null
    atual = null
    gravado.innerHTML = '<h2>Histórico</h2>'
}