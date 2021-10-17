/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
var boasVindas = alert('Olá , Boas vindas ao jogo de Blackjack!');

   const carta1Usuario = comprarCarta()
   const carta2Usuario = comprarCarta()
   const carta1Computado = comprarCarta()
   const carta2Computado = comprarCarta()

   const valorUsuario = carta1Usuario.valor + carta2Usuario.valor
   const valorComputador = carta1Computado.valor + carta2Computado.valor

if (confirm( "Quer iniciar uma nova rodada?" )){
   let usuario = (`Usuário - cartas: ${carta1Usuario.valor}, ${carta2Usuario.valor} - pontuação: ${valorUsuario} `)
   let computador = (`Computador - cartas: ${carta1Computado.valor}, ${carta2Computado.valor} - pontuação: ${valorComputador} `)
   console.log(usuario)
   console.log(computador)
   if(valorComputador === valorUsuario){
      console.log("Empate!")
   }else if(valorComputador > valorUsuario){
      console.log("O computador ganhou!")
   }else if(valorUsuario> valorComputador){
      console.log("O usuário ganhou!")
   }
}else{
   alert("O jogo acabou!")
}
