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
            //location.href = 'localhost:8082/cadastrar'
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
    let nome = document.getElementById("nome")
    let usuario = document.getElementById("usuario")
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    fetch("http://localhost:8082/cadastrar",
                {
                    method: 'POST',
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },

                    body: JSON.stringify({
                        nome : nome.value,
                        usuario : usuario.value,
                        email : email.value,
                        senha : senha.value
                    }) //Conversor para JSON
                })
            .then(function(res) {console.log(res)})
            .catch(function(res){console.log(res)})
            

    

    /*cadastrarUsuario(nome, usuario, email, senha)*/ //Chamando os valores das variaveis para a função 

    document.getElementById("nome").value = ""
    document.getElementById("usuario").value = ""
    document.getElementById("email").value = ""
    document.getElementById("senha").value = ""

   
}

console.log("-----------------")
console.log("Lista de usuários")
console.log("-----------------")

console.log(bancoUsuarios)