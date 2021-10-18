// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a,b){
        return a - b;
    });
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    var pares = function (item){
        return !(item % 2)
    }
    var numerosPares = array.filter(pares)
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    var pares = function (item){
        return !(item % 2)
    }
    var numerosPares = array.filter(pares)
    for (let numeros of numerosPares){
        if( numeros ** 2, numerosPares)
        return numeros

    }

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    var maior = 0;
    for (var i = 0; i < array.length; i++) {
       if ( array[i] > maior ) {
          maior = array[i];
       }
    }
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    var maiorNumero = [num1, num2 ]
    for (let i of maiorNumero){
        if (i > maiorNumero){
            maiorNumero = i
            return maiorNumero
        }
    }
    var menorNumero = [num1, num2]
    for (let i of menorNumero){
        if (i < menorNumero){
            menorNumero = i
            return menorNumero
        }
    }
    var maiorDivisivelPorMenor = []
    if(maiorNumero % maiorNumero){
        return maiorDivisivelPorMenor = true
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let i = 0
    const array = []
    let par = 0
    while(i< n) {
        array.push(par)
        par = par + 2
        i++
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA && ladoB && ladoC){
        console.log("Escaleno")
    }
    if(ladoA && ladoB || ladoC, ladoB && ladoC || ladoA, ladoC && ladoA || ladoB ){
        console.log("Isósceles")
    }
    if(ladoA || ladoB || ladoC){
        console.log("Equilátero")
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = array.sort((a,b)=> a- b);

    const segundoMaiorValor = arrayOrdenado[arrayOrdenado.length - 2];
    const segundoMaiorValor = arrayOrdenado[1];

    const arrayResultado = [segundoMaiorValor, segundoMenorValor];

    return arrayResultado


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.split()}`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return pessoa =  [...pessoa (pessoa.nome[0] ="ANÔNIMO")]
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    var pessoasLiberadas = [pessoas.altura >= 1.5, pessoas.idade > 14, pessoa.idade <=59]
    console.log (pessoasLiberadas)
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    var pessoasNaoLiberadas = [pessoas.altura < 1.5, pessoas.idade < 14, pessoa.idade >=60]
    console.log (pessoasNaoLiberadas)
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    var saldoTotal = [contas(contas.saldoTotal - contas.compras) = (contas.saldoTotal)]
    console.log (saldoTotal)

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    if(consultas.nome.sort()){
        return consultas
    }
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((primeira, segunda)=>{
        return new Date(primeira.dataDaConsulta.split("/").reverse()).getTime() - new Date(segunda.dataDaConsulta.split("/").reverse()).getTime()
    })

   
}