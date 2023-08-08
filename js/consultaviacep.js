async function buscarCEP(cep) {
  limpar();

  var cep = document.getElementById("cep");
  var cepInformado = cep.value;

  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then((resultado) => resultado.json())
    .then((json) => {
      if (json.erro) {
        mostrarTelaErro();
      } else {
        preencherCamposComJSON(json);
      }
    })
    .catch((erro) => mostrarTelaErro());
}

function preencherCamposComJSON(json) {
  if (json.bairro) {
    bairro.value = json.bairro;
  } else {
    bairro.disabled = false;
  }

  if (json.logradouro) {
    logradouro.value = json.logradouro;
  } else {
    logradouro.disabled = false;
  }

  cidade.value = json.localidade;
  uf.value = json.uf;

  console.log(json);
}

function limpar() {
  cep.valeu = "";
  bairro.value = "";
  logradouro.value = "";
  cidade.value = "";
  uf.value = "";
  numero.value = "";

  bairro.disabled = true;
  logradouro.disabled = true;
  cidade.disabled = true;
  uf.disabled = true;
}

function mostrarTelaErro() {
    alert('CEP informado não existe')
    limpar();
}