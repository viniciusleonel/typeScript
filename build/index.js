"use strict";
let dados = ["Vinícius", "Nathália", "Nina"];
let dados2 = ["Vinícius", "Nathália", "Nina"];
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Vinicius", "Nathalia"], ["Nina"]);
console.log(numArray);
console.log(stgArray);
let info = ["Vinícius", 31];
let boleto = ["conta", 99.99, 123456];
let hoje = new Date("2023-09-01 18:37");
console.log(dados);
console.log(boleto);
console.log(hoje.toString());
console.log(hoje.toDateString());
