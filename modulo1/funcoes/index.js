// EXERCICIO
// 1 -A) 10 , 50
//    B) 10 , 50
// 2 A) Retur retornar o valor para fora do {} Includes irá verificar se existe Cenoura no texto//toLowerCase ira deixar tudo mnsculo
//   B)eu gosto de cenoura - true
//    cenoura é bom pra vista -true 
//  cenouras crescem na terra - true


// EXERCÍCIOS
// 1 A)

// function meusDados() {
//     console.log ("Eu sou Larissa, tenho 25 anos, moro em São Paulo e sou estudante.")


// }
// meusDados()

// B)
// function quatroParametros(nome, idade, cidade, profissao){
//     const frase = `Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
//   return frase
// }

// const fraseFinal = quatroParametros("Larissa", 25,"São paulo", "estudante")
// console.log(fraseFinal)
//    

// 2 Escreva as funções
// a) Escreva uma função que receba 2 números como parâmetros, 
//    dentro da função, faça a soma das duas entradas e retorne o resultado
// const numero = function ( numeroUm, numeroDois) {
//     const soma = numeroUm + numeroDois
//     return soma + resultado
    
// }
// const resultado = numero (9,1)
// console.log(resultado)

// b)função que recebe 2 números e 
// retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
// const numeros = function (num1, num2){
//     // num1 = prompt ("Insira um número")
//     // num2 = prompt ("insira outro número")
//     const resposta = (num1 >= num2)
//     console.log(resposta)
//     return resposta 
// }
// numeros(5,1)

// c)
// const numeros = function (num1){
//     const resposta = num1 % 2
//     console.log(resposta)
//     return resposta 
// }
// numeros(2)aaaa

// d) 
// const receberMensagem = function (frase){
//     console.log(frase.length)
//     console.log(frase.toUpperCase())
// }
// receberMensagem("aaaaaaaaaaaa")

// 3
// const numb1 = Number(prompt ("Insira o primeiro número"));
// const numb2 = Number(prompt ("Insira o segundo número"));

// const operaçoesBasicas = function(soma, subtração, multiplicação, divisao){
//     soma = (numb1 + numb2)
//     subtração = (numb1 - numb2)
//     multiplicação = (numb1*numb2)
//     divisao  = (numb1 /numb2)
//     console.log (`Números inseridos: ${numb1} e ${numb2}`)
//     console.log (`Soma: ${soma}`)
//     console.log (`Diferença: ${subtração}`)
//     console.log (`Multiplicação: ${multiplicação}`)
//     console.log (`Divisão: ${divisao}`)
//     // return num1 + num2
// }
// operaçoesBasicas()

// DESAFIOS
// 1
// a)
// const parametro = (parametroUm) => {
//     console.log(parametroUm)
// }
// parametro()

// // b) 
// const parametroDois =(valorUm, valorDois) =>{
//     const resultado = valorUm + valorDois
//     parametro(resultado)
//     console.log (resultado)
        
// }


// 2
function teoremadePitagoras(a, b){
    const formula =(a**2)+(b**2)
    const hip = formula**(1/2)
    return hip
    
}
teoremadePitagoras()