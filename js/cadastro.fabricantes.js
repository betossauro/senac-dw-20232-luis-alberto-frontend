function isRequired() {
  const nome = document.getElementById("nome").value;
  const cnpj = document.getElementById("cnpj").value;
  const cep = document.getElementById("cep").value;
  const cidade = document.getElementById("cidade").value;
  const uf = document.getElementById("uf").value;

  return nome !== "" && cnpj !== "" && cep !== "" && cidade !== "" && uf !== "" ;
}

function mostrarAlertaCampoNaoPreenchido() {
  const nome = document.getElementById("nome").value;
  const cnpj = document.getElementById("cnpj").value;
  const cep = document.getElementById("cep").value;
  const cidade = document.getElementById("cidade").value;
  const uf = document.getElementById("uf").value;

  if (!nome) {
    alert("O campo 'Nome' é obrigatório.");
  } else if (!cnpj) {
    alert("O campo 'CNPJ' é obrigatório.");
  } else if (!cep) {
    alert("O campo 'CEP' é obrigatório.");
  } else if (!cidade) {
    alert("O campo 'Cidade' é obrigatório.");
  } else if (!uf) {
    alert("O campo 'UF' é obrigatório.");
  }
}

function statusBotaoCadastrar() {
  const btnCadastro = document.querySelector(".btn-form");
  btnCadastro.disabled = !isRequired();
}

document.getElementById("nome").addEventListener("input", statusBotaoCadastrar);
document.getElementById("cnpj").addEventListener("input", statusBotaoCadastrar);
document.getElementById("cep").addEventListener("input", statusBotaoCadastrar);
document.getElementById("cidade").addEventListener("input", statusBotaoCadastrar);
document.getElementById("uf").addEventListener("input", statusBotaoCadastrar);

statusBotaoCadastrar();

async function cadastrar() {
  fetch("http://localhost:8080/api/fabricantes", {
    method: "POST",
    body: JSON.stringify({
      nome: document.getElementById("nome").value,
      cnpj: document.getElementById("cnpj").value,
      endereco: {
        cep: document.getElementById("cep").value,
        cidade: document.getElementById("cidade").value,
        uf: document.getElementById("uf").value,
      },
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((resultado) => resultado.json())
    .then((json) => {
      console.log(json);
      limparCampos();
    })
    .catch((err) => console.log("Erro de solicitação", err));
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("cnpj").value = "";
  document.getElementById("cep").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
}

function habilitarCadastrarButton() {
  const btnCadastro = document.querySelector(".btn-form");
  btnCadastro.disabled = !isRequired();
}

document.querySelector(".btn").addEventListener("click", habilitarCadastrarButton);