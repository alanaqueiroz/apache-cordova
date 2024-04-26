function consultacep()
{
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/17015220/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        alert(JSON.parse(requisicao.response).logradouro);
    }
}

let botao = document.querySelector("#botao");
botao.addEventListener("click",consultacep);