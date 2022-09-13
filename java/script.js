var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var n3 = document.querySelector('#n3')
var n4 = document.querySelector('#n4')
var n5 = document.querySelector('#n5')
var n6 = document.querySelector('#n6')

var resposta = document.querySelector('#span')
var resposta2 = document.querySelector('#span2')
var resposta3 = document.querySelector('#span3')

function soma() {
    resposta.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
}
function subtracao() {
    resposta.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}
function divisao() {
    resposta.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
}
function multiplicacao() {
    resposta.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}

function media() {
    resposta2.innerHTML = (parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value) + parseFloat(n4.value)) / 4
}

function equacao() {
    resposta3.innerHTML = parseFloat(n5.value) + parseFloat(n6.value)
}