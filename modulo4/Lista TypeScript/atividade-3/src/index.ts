enum notas {
    BAIXA = 3,
    MEDIA = 7,
    ALTA = 10
}

enum genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filmes (nome: string, ano: number, genero: string, notas:number):string {
   return `nome: ${nome}, ano de lançamento: ${ano}, genero: ${genero}, pontuação: ${notas}`
}

console.log (filmes("O Rato", 1995, genero.COMEDIA, notas.MEDIA))