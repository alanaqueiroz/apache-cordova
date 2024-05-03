function enviar(){


    const dbParam = JSON.stringify(
        {
            "nome": document.querySelector("#nome").value,
            "documento": document.querySelector("#documento").value,
            "celular": document.querySelector("#celular").value,
            "endereco": document.querySelector("#logradouro").value,
            "numero": document.querySelector("#numero").value,
            "bairro": document.querySelector("#bairro").value,
            "localidade": document.querySelector("#localidade").value
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    }
    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/listarclientes.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );

}