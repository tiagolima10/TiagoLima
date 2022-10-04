//Contador Para Início da Copa

var contador = new Date("Nov 20, 2022 13:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = contador - now;
var dias = Math.floor(t / (1000 * 60 * 60 * 24));
var horas = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("contagem").innerText = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("contagem").innerHTML = "A COPA JÁ INICIOU!!";
    }
}, 1000);

//Fim Contador Início


// FORMULÁRIO DADOS //
let bancoFormulario = []

function formEnviar(nome, sobrenome, email, brasileiro, experiencia, artilheiro, copas) {
    let novoFormulario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        brasileiro: brasileiro,
        experiencia: experiencia,
        artilheiro: artilheiro,
        copas: copas,
    }
    
    bancoFormulario.push(novoFormulario)

    alert("Formulário preenchido com sucesso, Muito Obrigado!")
}

function formular() {
    let nome = document.getElementById("nome1").value
    let sobrenome = document.getElementById("sobrenome1").value
    let email = document.getElementById("email1").value
    let pergunta = document.querySelector("input[name = pergunta1]:checked").value
    let experiencia = document.getElementById("experiencia").value
    let artilheiro = document.getElementById("artilheiro").value
    let copas = document.querySelector("input[name = copa]:checked").value

    formEnviar(nome, sobrenome, email, pergunta, experiencia, artilheiro, copas)

    document.getElementById("nome1").value = ""
    document.getElementById("sobrenome1").value = ""
    document.getElementById("email1").value = ""
    document.getElementById("experiencia").value = ""
}

console.log("-----------")
console.log("Formulários")
console.log("-----------")

console.log(bancoFormulario)