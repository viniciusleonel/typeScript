// Function ( Tipando os parâmetros e o retorno)
function addNumber(x:number, y:number): number{
    return x + y;
}
let soma:number = addNumber(4,7);

// Faz com que a função aceite como um parâmetro e retorne um number ou uma string 
function callToPhone(phone: number | string): number | string{
    return phone;
}

// Função assíncrona async
async function getDatabase(id:number): Promise<string> {
    return "Vinicius"
}

// async function name(params:type) {    
// }
// async (params:type) => {    
// }