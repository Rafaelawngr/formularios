const form = document.querySelector("#login");
form.addEventListener("submit", submitForm);

const user = document.querySelector("#name");
const pass = document.querySelector("#password");

function submitForm(e) {
  e.preventDefault();

  const formValues = Object.fromEntries(new FormData(e.target));

  checkInputs();

  let usuarioValidado = false;

  for (let i = 0; i < listaUsers.length; i++) {
    if (
      formValues.username === listaUsers[i].username &&
      formValues.password === listaUsers[i].password
    ) {
      usuarioValidado = true;
      break;
    }
  }

  if (usuarioValidado == true) {
    setSuccessFor(user);
    setSuccessFor(pass);
    window.location.href = "page2.html";
  } else {
    setErrorFor(user, "Ops, o usuário não foi encontrado!");
    setErrorFor(pass, "Ops, o usuário não foi encontrado!");
  }
}

function checkInputs() {
  const usernameValue = user.value.trim();
  const passwordValue = pass.value.trim();

  if (usernameValue === "") {
    setErrorFor(user, "O nome de usuário não pode ser vazio");
  } else {
    setSuccessFor(user);
  }

  if (passwordValue === "") {
    setErrorFor(pass, "A senha não pode ser vazia");
  } else {
    setSuccessFor(pass);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
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
