// var minhaString: string = 10
// a)O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322)

// b)
type meuNumero = number & string 
var meuNumero = 10

// c)
type pessoa = {
  nome: string,
  idade: number,
  corFavorita: CorFavorita
}

// e)
enum CorFavorita {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO ="Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}
const fabiana: pessoa = {
  nome: "Fabiana",
  idade: 23,
  corFavorita: CorFavorita.AZUL
}

console.log(fabiana)

