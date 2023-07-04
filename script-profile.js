const form = document.querySelector("#completeProfile");

form.addEventListener("submit", submitForm);

let formValuesProfile;
let selectedImage;

function changePic() {
  let previewFile = document.querySelector("#previewImage");
  let file = document.querySelector("input[type=file]").files[0];
  let reader = new FileReader();

  reader.onloadend = function () {
    previewFile.src = reader.result;
    selectedImage = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    previewFile.src =
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";
  }
}

function mostrarPergunta() {
  let resposta = document.querySelector('input[name="resposta"]:checked');

  let perguntaExtra = document.querySelector("#perguntaExtra");

  if (resposta.value === "sim") {
    perguntaExtra.style.display = "flex";
  } else {
    perguntaExtra.style.display = "none";
  }
}

function changeColor() {
  const colorValue = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--THEMECOLOR");
  let colorInput = document.querySelector("#colorInput");
  let selectedColor = colorInput.value;

  document.documentElement.style.setProperty("--THEMECOLOR", selectedColor);

  const themeElements = document.querySelectorAll("[data-theme-color]");
  themeElements.forEach((element) => {
    element.style.color = selectedColor;
  });
}
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");

function next() {
  page3.style.display = "block";
  page2.style.display = "none";
  page4.style.display = "none";
}

function goBack() {
  page3.style.display = "none";
  page2.style.display = "flex";
  page4.style.display = "none";
}

function submitForm(e) {
  e.preventDefault();
  formValuesProfile = Object.fromEntries(new FormData(e.target));

  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";

  // page-2
  const firstName = formValuesProfile.nome;
  const lastName = formValuesProfile.sobrenome;
  const adress = formValuesProfile.endereco;
  const birthDate = formValuesProfile.dataNascimento;
  // page-3
  const filhos = formValuesProfile.resposta;
  const qtsFilhos = formValuesProfile.filhos;
  const esFut = formValuesProfile.iesFut;
  const esVolei = formValuesProfile.iesVolei;
  const esDanca = formValuesProfile.iesDanca;
  const esCor = formValuesProfile.iesCor;
  const esMus = formValuesProfile.iesMus;
  const esCross = formValuesProfile.iesCross;
  const esNat = formValuesProfile.iesNat;
  const esLut = formValuesProfile.iesLut;

  let resultadoFoto = document.querySelector("#chosenImage");
  resultadoFoto.src = selectedImage;

  let resultadoNome = document.querySelector("#nome-completo");
  resultadoNome.innerText = `${firstName} ${lastName}`;

  let resultadoEndereco = document.querySelector("#endereco");
  resultadoEndereco.innerText = `Você mora na ${adress},`;

  let resultadoNascimento = document.querySelector("#dataNascimento");
  resultadoNascimento.innerText = `nasceu no dia ${birthDate},`;

  let resultadoFilhos = document.querySelector("#filhos");
  if (filhos === "sim") {
    resultadoFilhos.innerText = `tem ${qtsFilhos} filhos e`;
  } else {
    resultadoFilhos.innerText = "";
  }

  let resultadoEsportes = document.querySelector("#esportes");
  resultadoEsportes.innerText = "seus esportes favoritos são: ";

  if (esFut) {
    resultadoEsportes += "Futebol, ";
  }
  if (esVolei) {
    resultadoEsportes += "Vôlei, ";
  }
  if (esDanca) {
    resultadoEsportes += "Dança, ";
  }
  if (esCor) {
    resultadoEsportes += "Corrida, ";
  }
  if (esMus) {
    resultadoEsportes += "Musculação, ";
  }
  if (esCross) {
    resultadoEsportes += "Crossfit, ";
  }
  if (esNat) {
    resultadoEsportes += "Natação, ";
  }
  if (esLut) {
    resultadoEsportes += "Luta, ";
  }

  resultadoEsportes.innerText = resultadoEsportes.innerText.slice(0, -2); // para remover a vírgula e o espaço após o último esporte
}
