// Exercícios de interpretação de código
// 1) = 10
// 2)
// A) 19, 21, 23, 25, 27, 30
// B) pode ser usado o indexOf

// 3 ****

// Exercícios de escrita de código
// 1)
// let quantidadeBichos = Number(prompt("Quantos bichos você tem?"))
// let nomes = []
// if(quantidadeBichos > 0)
//     for (let i =0; i < quantidadeBichos; i++){
//     nomes = prompt ("Digite o nome dos seus bichos")
//     console.log (nomes)
// }

// else{
//     console.log ("Que pena! Você pode adotar um pet!")
// }
// 2)
let arrayOriginal = [0, 30, 130, 40, 60]
let i =0
let indice = []
let resultado = []
let novoArray = []
let valorMaximo =[]
let valorMinimo =[]

// function imprimirArray(){
//     while(i<arrayOriginal.length){
//         console.log(arrayOriginal[i]  )
//         i++
//     }
// }
// imprimirArray( )

// function divisor (){
//     for(let i = 0; i < arrayOriginal.length; i++){
//     console.log(arrayOriginal[i]/10 )
//   }
// }
// divisor()
  
// for(let numero of arrayOriginal){
//     if (arrayOriginal[i] % 2 ===0){
//         resultado.push(numero)
//     }
// }
// console.log(resultado)

// // D)
// for(let i=0; i<arrayOriginal.length; i++){
    
//     indice.push(`O elemento do índice ${i} é ${arrayOriginal[i]}`)
// }
// console.log(indice)

function encontraMaior(arrayOriginal) {    
    //Se o array for vazio lança um erro
    if(arrayOriginal.length < 1) {
    }
    var maior = arrayOriginal[0];

    for (let i = 1; i < arrayOriginal.length; i++) {
        var atual = arrayOriginal[i];
        if( atual > maior)
         maior = atual;
    }

    return maior;
}


// // desafio 1
// let numeroPensado = Math.round(Math.round()*100)
// let numeroChutado = Number(prompt("Escolher um número:"))
// while(numeroChutado!== numeroPensado){

//     let diferenca
//     if (numeroChutado> numeroPensado){
//         diferenca = "menor"
//     }else{
//         diferenca ="maior"
//     }
//     console.log(`Errou, chute um númemo${diferenca}`)

//     numeroChutado = Number(prompt("Escolher outro número:"))
// }

// alert(`Acertou! O número era mesmo ${numeroPensado}`)