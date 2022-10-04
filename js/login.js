function logar() {

    let email = 'admin'
    let senha = 'admin'

    if (document.getElementById("email3").value == "" || document.getElementById("senha2").value == "") {
        return alert("Usuário não encontrado")
    }

        if (document.getElementById("email3").value == email && document.getElementById("senha2").value == senha ) {
            location.href = 'index.html'
        } else {
            return alert("E-mail ou senha incorretos. Tente novamente!")
        }
    }