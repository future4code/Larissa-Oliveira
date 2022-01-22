type  filme = {
    nome: string,
    ano: number,
    genero: string,
    nota: number
}

type numero = {
    baixa: number,
    media: number,
    alta: number
}

const notas: numero = 
    {
        baixa : 3,
        media : 7,
        alta : 10
    }


enum genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

let lista: filme = {
    nome: "O rato",
    ano: 2015,
    genero: genero.COMEDIA,
    nota: notas.baixa
}

function filmes () {
    return lista
}

console.log (lista)