function lerclientes() 
{
    let requisicao = new XMLHttpRequest();
    let url = "https://etec.fernandograciano.com.br/listarclientes.php";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function()
    {
        let corpotable = document.querySelector("#corpotabela")
        let dados = JSON.parse(this.response)
        dados.forEach(function (valor, chave)
        {
            let novalinha = document.createElement("tr")
            let celulaNome = document.createElement("td")
            let celulaCelular = document.createElement("td")
            celulaNome.inerHTML = valor.nome
            celulaCelular.inerHTML = valor.celulaCelular
            novalinha.append(celulaNome)
            novalinha.append(celulaCelular)
            corpotabela.append(novalinha)
        });
        console.log(this.response)
    }
}