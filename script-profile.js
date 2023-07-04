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
  
  const futebol = formValuesProfile.futebol;
  const volei = formValuesProfile.volei;
  const danca = formValuesProfile.danca;
  const corrida = formValuesProfile.corrida;
  const musculacao = formValuesProfile.musculacao;
  const crossfit = formValuesProfile.crossfit;
  const natacao = formValuesProfile.natacao;
  const luta = formValuesProfile.luta;

  let resultadoFoto = document.querySelector("#chosenImage");
  resultadoFoto.src = selectedImage;

  let resultadoNome = document.querySelector("#nome-completo");
  resultadoNome.innerText = `${firstName} ${lastName}`;

  let resultadoEndereco = document.querySelector("#enderecoResult");
  resultadoEndereco.innerText = `Você mora na ${adress},`;

  let resultadoNascimento = document.querySelector("#dataNascimentoResult");
  resultadoNascimento.innerText = `nasceu no dia ${birthDate},`;

  let resultadoFilhos = document.querySelector("#filhosResult");
  if (filhos === "sim") {
   
    if (qtsFilhos === '1') {
      resultadoFilhos.innerText = `tem entre 1 e 2 filhos e`;
    } else if (qtsFilhos === '2') {
      resultadoFilhos.innerText = `tem entre 3 e 4 filhos e`;
    } else {
      resultadoFilhos.innerText = `tem 5 filhos ou mais e`;
      }

  } else {
    resultadoFilhos.innerText = "";
  }


  let resultadoEsportes = document.querySelector("#esportesResult");
  let esportesSelecionados = [];
  console.log(esportesSelecionados)


  if (futebol) {
    esportesSelecionados.push("Futebol");
  }
  
  if (volei) {
    esportesSelecionados.push("Vôlei");
  }
  
  if (danca) {
    esportesSelecionados.push("Dança");
  }
  
  if (corrida) {
    esportesSelecionados.push("Corrida");
  }
  
  if (musculacao) {
    esportesSelecionados.push("Musculação");
  }
  
  if (crossfit) {
    esportesSelecionados.push("Crossfit");
  }
  
  if (natacao) {
    esportesSelecionados.push("Natação");
  }
  
  if (luta) {
    esportesSelecionados.push("Luta");
  }
  resultadoEsportes.innerText = "Seus esportes favoritos são: " + esportesSelecionados.join(", ");

}

