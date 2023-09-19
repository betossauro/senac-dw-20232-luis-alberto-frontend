function preencherTabela(jsonFabricantes) {
    var dadosTabelaFabricantes = document.getElementById("corpoTabela");
  
    dadosTabelaFabricantes.innerHTML = "";
  
    jsonFabricantes.forEach((item) => {
      let novaLinha = dadosTabelaFabricantes.insertRow();
  
      let celulaId = novaLinha.insertCell();
      celulaId.innerText = item.id;
  
      let celulaNome = novaLinha.insertCell();
      celulaNome.innerText = item.nome;
  
      let celulaCnpj = novaLinha.insertCell();
      celulaCnpj.innerText = item.cnpj;
  
      let celulaCep = novaLinha.insertCell();
      celulaCep.innerText = item.endereco.cep;
  
      let celulaCidade = novaLinha.insertCell();
      celulaCidade.innerText = item.endereco.cidade;
  
      let celulaUf = novaLinha.insertCell();
      celulaUf.innerText = item.endereco.uf;
    });
  }
  
  window.addEventListener('DOMContentLoaded', buscarTodosFabricantes());
  
  async function buscarTodosFabricantes() {
    fetch("http://localhost:8080/api/fabricantes/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((resultado) => resultado.json())
      .then((json) => {
        console.log(json);
        preencherTabela(json);
      });
  }

function limparFabricantes() {
    var dadosTabelaFabricantes = document.getElementById("corpoTabela");
  
    dadosTabelaFabricantes.innerHTML = "";
}