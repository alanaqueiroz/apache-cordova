function enviar(){


    const dbParam = JSON.stringify(
        {
            "nome": document.querySelector("#nome").value,
            "documento": document.querySelector("#documento").value,
            "celular": document.querySelector("#celular").value,
            "endereco": document.querySelector("#endereco").value,
            "numero": document.querySelector("#numero").value,
            "bairro": document.querySelector("#bairro").value,
            "cidade": document.querySelector("#cidade").value,
            "estado": document.querySelector("#estado").value,
            "cep": document.querySelector("#cep").value,
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
       
        console.log(xmlhttp.response);

    }
    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );

}