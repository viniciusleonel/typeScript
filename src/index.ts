// Criando Classes e Objetos
type ProdutoLoja = {
    nome: string;
    preco: number;
    emEstoque: boolean;
}

let meuProduto: ProdutoLoja = {
    nome: "Celular",
    preco: 1.999,
    emEstoque: true,
}

// Arrays
let dados: string[] = ["Vinícius", "Nathália", "Nina"];
let dados2: Array<string> = ["Vinícius", "Nathália", "Nina"];

// Arrays com mais de um tipo ( Pode declarar qualquer tipo a qualquer hora)
let info: (string | number)[] = ["Vinícius", 31];

// Tupla ( Declara o tipo na ordem certa )
let boleto:[string, number, number] = ["conta", 99.99, 123456];

// Date
let hoje:Date = new Date("2023-09-01 18:37");


console.log(meuProduto);
console.log(dados);
console.log(boleto);
console.log(hoje.toString());
console.log(hoje.toDateString());


