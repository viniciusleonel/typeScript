"use strict";
let meuProduto = {
    nome: "Celular",
    preco: 1.999,
    emEstoque: true,
};
const bot = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, "TicoBot");
console.log(p.sayHello());
console.log(meuProduto);
