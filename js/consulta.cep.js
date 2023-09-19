async function buscarCEP(cep) {
//   limpar();

  var cep = document.getElementById("cep");
  var cepInformado = cep.value;
  cepInformado = cepInformado.replace('-', '');

  if (cepInformado.length < 8 || cepInformado.length > 9 ) {
    alert('O CEP deve ser no padrão 00000000 ou 00000-000')
  }

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
//   if (json.bairro) {
//     bairro.value = json.bairro;
//   } else {
//     bairro.disabled = false;
//   }

//   if (json.logradouro) {
//     logradouro.value = json.logradouro;
//   } else {
//     logradouro.disabled = false;
//   }

  cidade.value = json.localidade;
  uf.value = json.uf;
  cidade.disabled = true;
  uf.disabled = true;

  console.log(json);
}

function limpar() {
  cep.value = "";
//   bairro.value = "";
//   logradouro.value = "";
  cidade.value = "";
  uf.value = "";
//   numero.value = "";

//   bairro.disabled = true;
//   logradouro.disabled = true;

}

function mostrarTelaErro() {
    alert('CEP informado não existe')
    cidade.disabled = false;
    uf.disabled = false;
    limpar();
}
