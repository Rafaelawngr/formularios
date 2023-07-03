const form = document.querySelector("#login");
form.addEventListener("submit", submitForm);

const user = document.querySelector('#name');
const pass = document.querySelector('#password');

function submitForm(e) {
  e.preventDefault();

  const formValues = Object.fromEntries(new FormData(e.target));

  let usuarioValidado = false;
  const errorMessage = document.getElementById("error-message");

  for (let i = 0; i < listaUsers.length; i++) {
    if (
      formValues.username === listaUsers[i].username &&
      formValues.password === listaUsers[i].password
    ) {
      usuarioValidado = true;
    }
  }

  if (usuarioValidado == true) {
    window.location.href = "page2.html";
  } else {
    errorMessage.innerText = "Ops, o usuário não foi encontrado!";
  }
}

class User {
  username = "";
  password = "";

  constructor(usuario, senha) {
    this.username = usuario;
    this.password = senha;
  }
}

const user1 = new User("rafaela", "159753");
const user2 = new User("jorge", "951357");
const user3 = new User("brenda", "753951");

const listaUsers = [user1, user2, user3];



