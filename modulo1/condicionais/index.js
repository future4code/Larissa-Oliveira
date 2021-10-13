// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1)
// A) Verificar se o número é par e se é igual a 0
// B) Números Pares
// C) Números Ímpares

// 2)
// A) Para consultar o valor da fruta.
// B) O preço da fruta Maçã é R$ 2,50
// C) O preço da fruta iria dar o valor de 5 pois é o valor registrado em default

// 3)
// A) Esta pedindo um número e transformando a string em número.
// B) "Esse número passou no teste" "Essa mensagem é secreta" caso contratio não teria mensagem
// C) O console não esta fora do escopo e não consegue acessar a várieavel "mensagem"

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1) pergunta ao usuário qual a idade dele e 
// imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// const perguntarIdade = Number(prompt("Qual a sua idade?"))

// if(perguntarIdade>= 18){
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir.")
// }

// 2)
// const turnoAluno = prompt("Qual o turno do dia você estuda? Responda com M, V ou N")

// if(turnoAluno === "M"){
//     console.log("Bom dia!");
// }else if(turnoAluno==="V"){
//     console.log("Boa tarde!");
// }else if(turnoAluno==="N"){
//     console.log("Boa noite!");
// }

// 3)
// const turnoAluno = prompt("Qual o turno do dia você estuda? Responda com M, V ou N")

// switch(turnoAluno){
//     case "M":
//          console.log("Bom dia!");
//          break

//     case "V":
//         console.log("Boa tarde!")
//         break
    
//     case "N":
//         console.log("Boa noite!")
//         break
// }

// 4)/ Desafio 1

// const filme = prompt(" Qual o gênero do filme?")
// const valorIngresso = Number(prompt(" Qual o valor do ingresso?"))
// const lanche = prompt("qual lanchinho vai comprar?")

// if(filme === "fantasia", valorIngresso === 15, (lanche === "pipoca", "chocolate", "doces"))
// {
//      console.log("Bom filme!");
//      console.log(`Aproveite a(o) ${[lanche]}`);   
// }
// else
// {console.log("Escolha outro filme :(")}

// Desafio 2

const nome = prompt ("Qual o seu nome completo")
const tipoDeJogo = prompt ("Qual o seu de jogo ? IN indica internacional; e DO indica doméstico")
const etapaDoJogo = prompt ("Qual a etapa do jogo ? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
const categoria = Number(prompt("Qual a categoria? pode ser as opções 1, 2, 3 ou 4"))
const quantidadeIngresso = Number(prompt("Quantidade de ingresso?"))

function imprimir(){
    if(tipoDeJogo === "DO"){
    console.log(`---Dados da compra--- 
    Nome do cliente:  ${nome} 
    Tipo do jogo:  ${tipoDeJogo} 
    Etapa do jogo:  ${etapaDoJogo} 
    Categoria:  ${categoria} 
    Quantidade de Ingressos:  ${quantidadeIngresso} ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ 
    Valor total:  R$ 19800${precoingresso}
    `);
    
}
else{(tipoDeJogo === "IN")
console.log(`---Dados da compra--- 
Nome do cliente:  ${nome} 
Tipo do jogo:  ${tipoDeJogo} 
Etapa do jogo:  ${etapaDoJogo} 
Categoria:  ${categoria} 
Quantidade de Ingressos:  ${quantidadeIngresso} ingressos 
---Valores--- 
Valor do ingresso:  R$ 
Valor total:  R$ 19800${precoingresso*4.10}
`);
}
}

let precoingresso = 0;
const precoSF ={
    categoria: 1 = 1320.00,
    categoria: 2 = 880.00,
    categoria: 3 = 550.00,
    categoria: 4 = 220.00
}
const precoDT ={
    categoria: 1 = 660.00,
    categoria: 2 = 440.00,
    categoria: 3 = 330.00,
    categoria: 4 = 170.00
}
const precoFI ={
    categoria: 1 = 1980.00,
    categoria: 2 = 1320.00,
    categoria: 3 = 880.00,
    categoria: 4 = 330.00
}

switch(etapaDoJogo){
    case "SF":
        precoingresso = (precoSF(categoria))
        break
    case "DT":
        precoingresso = precoDT(categoria)
        break
    default:
        precoingresso = precoFI(categoria)
}




imprimir(nome,tipoDeJogo,etapaDoJogo,categoria,quantidadeIngresso,precoingresso)