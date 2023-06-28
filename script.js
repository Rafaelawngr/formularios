const form = document.querySelector("#login");
form.addEventListener('submit', submitForm)


function submitForm(e) {
    e.preventDefault()
  
    const formValues = Object.fromEntries(new FormData(e.target))
    
    let usuarioValidado = false

    for (let i = 0; i < listaUsers.length; i++) {
        if (formValues.username === listaUsers[i].username && formValues.password === listaUsers[i].password) {
            usuarioValidado = true
        }   
    }

    if (usuarioValidado == true) {
        // clica no botao e direciona para a outra pagina
    } else {
        console.warn('nao encontrado')
    }   
  }
  
class User {
    username = "";
    password = "";

    constructor(usuario, senha) {
        this.username = usuario;
        this.password = senha
    }
}

const user1 = new User('Rafaela', '159753');
const user2 = new User('Jorge', '951357');
const user3 = new User('Brenda', '753951');

const listaUsers = [user1, user2, user3];


// se o usuário que realizar o login estiver cadastrado - redireciona para a página 2
// se não estiver, mensagem de erro no html





// mensagem de erro leva para o botao de criar conta e aparece uma 2a pagina, contendo NOME, SOBRENOME, IMAGEM DE PERFIL, ENDEREÇO, DATA DE NASCIMENTO, POSSUI FILHOS? SE SIM, QUANTOS. ESPORTE FAVORITO etc.
// inputs: text, radio, checkbox, select option,etc
// Botão confirmar: todos os dados inseridos de forma organizada (estilo página de perfil)




// function validateForm() {

// }

// function checkInputs() {
//     const fullNameValue = fullName.value
//     const passwordValue = password.value

//     if (fullNameValue === '') {
//         // mostrar erro
//     } else {
//         // mostrar classe sucesso
//     }

//     if (passwordValue === '') {
//         // mostrar erro
//     } else {
//         // mostrar classe sucesso
//     }
// }

