//Cadastro

let bancoUsuarios = [] //criou um array

function cadastrarUsuario(nome, usuario, email, senha) {
    
    let novoUsuario = {
        nome: nome,
        usuario: usuario,
        email: email,
        senha: senha,
    }
    
    if (document.getElementById("email").value != "" && document.getElementById("senha").value != "" && document.getElementById("nome").value != "" && document.getElementById("usuario").value != "") {
        if (bancoUsuarios.length == 0) {
            bancoUsuarios.push(novoUsuario) // Inserindo novo usuario e colocando no array com as informações
            location.href = 'login.html' // Ao cadastrar vai para a tela
            return alert("Usuário cadastrado com sucesso")
    } else {
        for (let i in bancoUsuarios) {
            if ( bancoUsuarios[i].usuario != usuario && bancoUsuarios[i].email != email) {
                bancoUsuarios.push(novoUsuario)
                location.href = 'login.html'
                return alert("Usuário Cadastrado com sucesso!")
            } else {
                return alert("Nome de e-mail ou usuário já existente!")
            }
        }
    }
} else {
    return alert("Impossível cadastrar! Complete as informações!")
}
}

function cadastrar() {
    let nome = document.getElementById("nome").value
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    cadastrarUsuario(nome, usuario, email, senha) //Chamando os valores das variaveis para a função 

    document.getElementById("nome").value = ""
    document.getElementById("usuario").value = ""
    document.getElementById("email").value = ""
    document.getElementById("senha").value = ""

   
}

console.log("-----------------")
console.log("Lista de usuários")
console.log("-----------------")

console.log(bancoUsuarios)