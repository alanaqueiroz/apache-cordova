function consultacep()
{
    let campo = document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/"+ campo.value +"/json";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        let objetoCEP = JSON.parse(requisicao.response)
        
        campo.value = objetoCEP.cep

        let campoEndereco = document.querySelector("#logradouro") 
        campoEndereco.value = objetoCEP.logradouro

        let campoBairro = document.querySelector("#bairro") 
        campoBairro.value = objetoCEP.bairro

        let campoLocalidade = document.querySelector("#localidade") 
        campoLocalidade.value = objetoCEP.localidade
    }
}

let botao = document.querySelector("#botao");
botao.addEventListener("click",consultacep);