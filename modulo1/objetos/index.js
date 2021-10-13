// // Exercícios de interpretação de código

// // 1) RESPOSTA: 
// // Matheus Nachtergaele
// //  Virginia Cavendish
// //  Canal: "Globo", horario: "14"

// // 2) RESPOSTA:
// // A)
// // nome: "Juca", idade: 3, raca: "SRD"
// // nome: "Juba", idade: 3, raca: "SRD"
// // nome: "Juco", idade: 3, raca: "SRD"
// // B) Espelha um objeto já existente.

// // 3) RESPOSTA:
// // A)
// // False
// // Indefinidio
// // B) Indefinido pois não nada foi declarado para "altura"

// // Exercícios de escrita de código

// // 1)
// const pessoa = {
//     nome: "Larissa",
//     apelidos: ["Lari", " Larissinha", " Larissoca "]
// }

// const pessoa1 = {
//     nome: "Larissa",
//     apelidos: ["Laroca", " Larissi ", "Laruska "]
// }

// function frase (objeto){
//    return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}` 

// }

// console.log(frase(pessoa))
// console.log(frase(pessoa1))

// // 2)
// // A)
// const pessoa2 = {
//     nome: "Pedro",
//     idade: 26,
//     profissao:"Programador"
// }

// const pessoa3 = {
//     nome: "Bruna",
//     idade: 25,
//     profissao:"Desenvolvedora"
// }
// // B)
// function minhaFuncao (pessoa2){
//     const resultado = [pessoa2.nome,pessoa2.nome.length,pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length ]
//     return resultado
    
//  }
//  console.log(minhaFuncao(pessoa2))
//  console.log(minhaFuncao(pessoa3))

// //  3
// // A) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
// const carrinho = []
// //B)Crie três novos objetos que representem frutas de um sacolão. 
// // Eles devem ter as seguintes propriedades:
// //  nome (string) e disponibilidade (boolean - devem começar como true)

// const bancada1 = {
//     fruta: "banana",
//     disponivel: true,
// }
// const bancada2 = {
//     fruta: "pera",
//     disponivel: true,
// }
// const bancada3 = {
//     fruta: "abacaxi",
//     disponivel: !true,
// }
// // C)
// function comprar (bancada1) {
//     carrinho.push(bancada1)
// }
// console.log(bancada1)
// console.log(bancada2)
// console.log(bancada3)

// // Desafios
// // 1)
// function perguntar (){
//     const resposta =[]
//     resposta [0] = prompt("Seu nome?")
//     resposta [1] = prompt("Sua idade?")
//     resposta [2] = prompt("sua profissão?")
//     return resposta   
// }
// const resposta = perguntar
// const objeto = {
//     nome: resposta[0],
//     idade: resposta[1],
//     profissao: resposta[2],

// }
// console.log(objeto)

// // 2)
// function receberObjetos (){

//     const filme1 = {
//         nome: "007",
//         ano_de_lancamento:2006,
//     }
//     const filme2 = {
//         nome: "O malvado",
//         ano_de_lancamento:2006, 
//     }
//     const resposta1 = `O primeiro filme foi lançado antes do segundo?`(filme1.ano_de_lancamento <= filme2.ano_de_lancamento)
//     const resposta2 = `O primeiro filme foi lançado no mesmo ano do segundo?`(filme1.ano_de_lancamento === filme2.ano_de_lancamento)
//     return resposta1 +resposta2
// }
// filme1 = receberObjetos
// filme2 = receberObjetos
// console.log(receberObjetos(filme1))



// // 3)
// console.log(bancada3)


//JavaScript
const pessoa = {
    nome: "Paula",
    genero: "Feminino"
    }
    
    
    const desejaBoasVindas = (pessoa) => {
    if(pessoa.genero === "Feminino") {
    return "Seja bem-vinda!"
    } else if(pessoa.genero === "Masculino") {
    return "Seja bem-vindo!"
    } else {
    return "Desejamos boas-vindas!".
    }
    }
    
    
    console.log(desejaBoasVindas(pessoa))