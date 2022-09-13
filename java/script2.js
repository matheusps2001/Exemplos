var nome = document.querySelector('#nome')
var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var n3 = document.querySelector('#n3')
var n4 = document.querySelector('#n4')
var n5 = document.querySelector('#n5')

var resposta = document.querySelector('#span')

function soma() {
    resposta.innerHTML =(parseFloat(n1.value)
     + parseFloat(n2.value)
     + parseFloat(n3.value)
     + parseFloat(n4.value)
     + parseFloat(n5.value)) / 5
}

