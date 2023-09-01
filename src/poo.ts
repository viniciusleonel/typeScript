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

interface robot {
    readonly id: number;
    name: string;
    sayHello():string
}

const bot: robot={
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

class Pessoa implements robot{
    id: number;
    name: string;
    
    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const p = new Pessoa(1, "TicoBot");
console.log(p.sayHello());

console.log(meuProduto);