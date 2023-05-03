// Obtém o modal
var modal = document.getElementById("modal");

// Obtém o botão que abre o modal
var btn = document.getElementById("fecharPedido");

// Obtém o botão "x" de fechar o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abra o modal
btn.onclick = function () {
    modal.style.display = "flex";
}

// Quando o usuário clicar no botão "x", feche o modal
span.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, feche-o
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}