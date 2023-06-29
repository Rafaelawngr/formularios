const form = document.querySelector("#completeProfile");

form.addEventListener("submit", submitForm);

let formValuesProfile

function submitForm(e) {
    e.preventDefault();

    formValuesProfile =  Object.fromEntries(new FormData(e.target));

}

function changePic() {
    let previewFile = document.querySelector("#previewImage");
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        previewFile.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        previewFile.src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";
    }
}


function mostrarPergunta() {
    let resposta = document.querySelector('input[name="resposta"]:checked');

    let perguntaExtra = document.querySelector('#perguntaExtra');

    if (resposta.value === 'sim') {
      perguntaExtra.style.display = 'flex';
    } else {
      perguntaExtra.style.display = 'none';
    }
}

function changeColor() {
    let colors = document.querySelector('#colorInput');
    let selectedColor = colors.value

    let buttons = document.getElementsByClassName('submit');
    let lines = document.getElementsByClassName('linha')
    console.log(lines)
    
    for (let i = 0; i < buttons.length; i++) {
    // if (selectedColor != colors)
    buttons[i].style.backgroundColor = selectedColor;
  }
}

let colorInput = document.querySelector('#colorInput');
colorInput.addEventListener('change', changeColor);
lines.addEventListener('change', changeColor)


 // const newDocument = document.implementation.createHTMLDocument('Perfil');