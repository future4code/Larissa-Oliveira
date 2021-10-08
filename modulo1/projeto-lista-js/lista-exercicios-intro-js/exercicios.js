// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log(soma (1,2))
console.log(soma (4,5))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = prompt('Digite uma mensagem!')
  largura = prompt('Digite uma mensagem!')
  console.log (altura * largura)
}


// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  // implemente sua lógica aqui
  anoAtual = prompt('Digite o ano atual!')
  anoDeNascimento = prompt('Digite o de nascimento!')
  console.log(anoAtual-anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const formula = (peso) / (altura**2)
  console.log(formula)
  return formula

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  nome = prompt('Digite o seu nome!')
  idade = prompt('Digite a sua idade!')
  email = prompt('Digite o seu email!')
  
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(corUM, corDois, corTres) {
  // implemente sua lógica aqui
  corUM = prompt('Digite uma cor favorita"')
  corDois = prompt('Digite outra cor favorita"')
  corTres = prompt('Digite mais uma cor favorita"')
  const coresFavoritas = [corUM, corDois, corTres]
  console.log (coresFavoritas)
  return coresFavoritas

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const fraseMaiuscula = string.toUpperCase()
  console.log (fraseMaiuscula)
  return fraseMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeQuePrecisaSerVendida = (custo) / (valorIngresso)
  console.log(quantidadeQuePrecisaSerVendida)
  return quantidadeQuePrecisaSerVendida

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const booleano = (string1 >= string2)
  console.log(booleano)
  return booleano

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];
  return primeiroElemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length-1];
  return ultimoElemento;
  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultimo = array.length-1
  const primeiro = array[0];
  const troca = array[ultimo]
  array[0] = troca;
  array[ultimo] = primeiro;
  return array
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const minusculoUm = (string1.toLowerCase())
  const minusculoDois = (string2.toLowerCase())
  const boole = (minusculoUm === minusculoDois)
  // console.log(boole)
  return boole
  

}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoCarteira ) {
  // implemente sua lógica aqui
  anoAtual = prompt ("Ano atual?")
  anoNascimento = prompt ("Ano de nascimento?")
  anoCarteira = prompt ("Ano da Carteira?")
  
  const idade = (anoAtual - anoNascimento)
  const idadeCarteira = (anoAtual - anoCarteira)

  const menosdeVinte = (idade <= 20)
  const vinte = (idade > 20, idade <=50 )
  const cinquenta =(idade > 50)
 
  const renovaEmCincoAnos = (menosdeVinte && idadeCarteira >=5)
  const renovaEmDezAnos =(vinte && idadeCarteira >= 10)
  const renovaQuinzeAnos =(cinquenta && idadeCarteira >= 15)

  console.log(renovaQuinzeAnos || renovaEmDezAnos || renovaEmCincoAnos)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}