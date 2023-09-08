function preencherTabela(jsonProdutos) {
  var dadosTabelaProdutos = document.getElementById("corpoTabela");

  dadosTabelaProdutos.innerHTML = "";

  jsonProdutos.forEach((item) => {
    let novaLinha = dadosTabelaProdutos.insertRow();

    let celulaId = novaLinha.insertCell();
    celulaId.innerText = item.id;

    let celulaNome = novaLinha.insertCell();
    celulaNome.innerText = item.nome;

    let celulaFabricante = novaLinha.insertCell();
    celulaFabricante.innerText = item.fabricante.nome;

    let celulaValor = novaLinha.insertCell();
    celulaValor.innerText = "R$ " + item.valor;

    let celulaPeso = novaLinha.insertCell();
    celulaPeso.innerText = item.peso + " Kg";
  });
}

window.addEventListener('DOMContentLoaded', buscarProdutoSeletor());

async function buscarProdutoSeletor() {
  fetch("http://localhost:8080/api/produtos/filtro", {
    method: "POST",
    body: JSON.stringify({
      nome: document.getElementById("input-produto").value,
      fabricante: document.getElementById("input-fabricante").value,
      cnpjFabricante: document.getElementById("input-cnpj").value,
      valorMinimo: document.getElementById("input-valor-min").value,
      valorMaximo: document.getElementById("input-valor-max").value,
      pesoMinimo: document.getElementById("input-peso-min").value,
      pesoMaximo: document.getElementById("input-peso-max").value,
      dataCadastroInicial: document.getElementById("input-data-inicio").value,
      dataCadastroFinal: document.getElementById("input-data-fim").value,
    }),
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

function esconderFiltro() {
  document.getElementById('meuConteudo').classList.toggle('show');
}

window.onclick = (event) => {
  if(!event.target.matches('.btn-drop')) {
    var dropdowns = document.getElementsByClassName('dropdown-conteudo');
    dropdowns.forEach(item => {
      var openDropdown = dropdowns[item];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    });
  }
}

