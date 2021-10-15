// Exercícios de interpretação de código
// 1)
// A) o Apelido juntamente com o nome

// 2) irá retornar os nomes.

// 3)irá retornar apenas o que tiver o apelido Chijo.

// Exercícios de escrita de código
// 1)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//  A) Crie um novo array que contenha apenas o nome dos doguinhos
// const pegarNomes = pets.map((item, index, array)=>{
//     return item.nome
// }) 
// console.log(pegarNomes)

// B)Crie um novo array apenas com os cachorros salsicha
// const pegarSalsicha = pets.filter((item, index, array)=>{
//     return item.raca === "Salsicha"
// })
// console.log(pegarSalsicha)

// C)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles
// const pegarPoodle = pets.filter((item,)=>{
    
//     if(item.raca === "Poodle"){
//         console.log( `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
//     }
    
// })

// 2)Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
// utilizando as funções de array map e filter:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
//  A)Crie um novo array que contenha apenas o nome de cada item

// const pegarNomesDosItens = produtos.map((item)=>{
//     return item.nome
// })
// console.log(pegarNomesDosItens)

// B)Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
// aplicando 5% de desconto em todos eles

// const nomePreco = produtos.map((produtos)=>{
//     return {nome: produtos.nome, preco:  (produtos.preco * 0.95).toFixed(2)   }

// })

// console.log(nomePreco)

// C)
// const retornarBebidas = produtos.filter((item)=>{
//     return item.categoria === "Bebidas"
// })

// console.log(retornarBebidas)

// (D) // (E)
// const ipe = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// }).map((ipe)=>{
//     return [ `Compre Detergente ${ipe.nome} por R$:${ipe.preco}`]
// })

// console.log(ipe)

// DESAFIOS
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

// A)

var pegarNomes = pokemons.map ((item) =>{
    return item.nome
})

var oredemAlfabetica = (
    pegarNomes.sort()
)

console.log(oredemAlfabetica)

// B)


let pegarTipos = pokemons.map ((item)=>{
    return item.tipo

})

// console.log(pegarTipos)

const semRepetidos =[
    ...new Set(pegarTipos)
]

console.log(semRepetidos)