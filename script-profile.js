const form = document.querySelector("#completeProfile");

form.addEventListener("submit", submitForm);

let formValuesProfile;

function submitForm(e) {
    e.preventDefault();
    formValuesProfile = Object.fromEntries(new FormData(e.target));
    
    const firstName = formValuesProfile.nome
    const lastName = formValuesProfile.sobrenome
    const adress = formValuesProfile.endereco
    const birthDate = formValuesProfile.dataNascimento

    const filhos  = formValuesProfile.resposta

    console.log(filhos)
    console.log(formValuesProfile)

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

function next() {
    const page2 = document.querySelector("#page2");
    const page3 = document.querySelector("#page3");

    page2.style.display = "none";
    page3.style.display = "block";
}

function goBack() {
    const page2 = document.querySelector("#page2");
    const page3 = document.querySelector("#page3");
    page3.style.display = "none";
    page2.style.display = "flex";
}

function confirmar() {

}
