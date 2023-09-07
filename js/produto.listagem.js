async function buscarTodosProdutos(){
    fetch('http://localhost:8080/api/produtos/todos')
    .then(resultado => resultado.json())
    .then(json => { 
        preencherTabela(json);
    });
}

function preencherTabela(jsonProdutos){
    var dadosTabelaProdutos = document.getElementById('corpoTabela');

    jsonProdutos.forEach(item => {
        let novaLinha = dadosTabelaProdutos.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = item.id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = item.nome;

        let celulaFabricante = novaLinha.insertCell();
        celulaFabricante.innerText = item.fabricante.nome;

        let celulaValor = novaLinha.insertCell();
        celulaValor.innerText = 'R$' + item.valor;

        let celulaPeso = novaLinha.insertCell();
        celulaPeso.innerText = item.peso;
    });
}

buscarTodosProdutos();