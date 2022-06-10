function salvarAnotocao(){
    novaAnotacao = document.getElementById("anotacao").value;
    document.getElementById("anotacoes-salvas").innerHTML += "<p>" + novaAnotacao + "</p>";
    document.getElementById("anotacao").value = "";
    alert("Anotação salva com sucesso");
}

document.getElementById("salvar").addEventListener("click", function(){
    salvarAnotocao();
    navigator.vibrate(7000);
});