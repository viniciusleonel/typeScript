// Arrays
let dados: string[] = ["Vinícius", "Nathália", "Nina"];
let dados2: Array<string> = ["Vinícius", "Nathália", "Nina"];

// Generics ( Usando o generics para concatenar arrays)
// <T> é um parâmetro que vai receber o tipo de array a ser concatenada
// Os três pontos ... significa que pode receber vários itens
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}
// Cria uma const que utiliza a função criada acima para juntar duas arrays do tipo especificado
const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["Vinicius", "Nathalia"], ["Nina"]);

console.log(numArray);
console.log(stgArray);


// Arrays com mais de um tipo ( Pode declarar qualquer tipo a qualquer hora)
let info: (string | number)[] = ["Vinícius", 31];

// Tupla ( Declara o tipo na ordem certa )
let boleto:[string, number, number] = ["conta", 99.99, 123456];

// Date
let hoje:Date = new Date("2023-09-01 18:37");

console.log(dados);
console.log(boleto);
console.log(hoje.toString());
console.log(hoje.toDateString());


