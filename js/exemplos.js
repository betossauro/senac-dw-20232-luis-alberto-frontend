// // Exemplo 01

// let prompt = require('prompt-sync')();

// // let curso = prompt('Qual o nome do seu curso? ');
// // console.log('Curso: ' + curso);

// // let fase = Number(prompt('Informe a fase: '))
// // console.log('Fase: ' + fase + 'ª');

// // // Exemplo 02

// // let carroA = {fabricante: 'Ford', modelo: 'Mustang', ano: 1969};
// // let carroB = {fabricante: 'Porsche', modelo: 'Macan', ano: 2023};
// // let carros = [carroA, carroB];

// // for (let carro of carros) {
// //     console.log(carro);
// // }

// // console.log('----------------------');
// // for (let propriedade in carroA) {
// //     console.log(propriedade);
// // }

// // console.log('----------------------');
// // for (let propriedade in carroB) {
// //     console.log('Propriedade: ' + propriedade + ' - valor: ' + carroB[propriedade]);
// // }

// // console.log('----------------------');
// // let nomes = ['Fred', 'Sheila', 'Sara'];
// // for (let nome of nomes) {
// //     console.log(nome);
// // }

// // console.log('----------------------');
// // for (let nome in nomes) {
// //     console.log(nome);
// // }

// // Exemplo CEP

// let cepInformado = prompt('Informe seu CEP: ');

// buscarCEP(cepInformado);

// async function buscarCEP(cep) {
//     let options = {
//         method: 'GET',
//         headers: {'Content-type': 'application/json'}
//     };

//     const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`, options); 

//     const json = await promiseConsultaCEP.json();

//     console.log(json);
// }