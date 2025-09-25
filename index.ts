// pra rodar usar npx ts-node nome-do-arquivo.ts

let aleatoriaa: number = 28
// console.log(aleatoriaa)

interface Produto {
    nome: string,
    preco: number,
    descricao?: string
}

const objetoProduto1: Produto = {
    nome: "TV",
    preco: 3520
}

const objetoProduto2: Produto = {
    nome: "PC",
    preco: 5000
}

// console.log(objetoProduto1)

const palavra: string = "lola"
console.log(palavra.toUpperCase());