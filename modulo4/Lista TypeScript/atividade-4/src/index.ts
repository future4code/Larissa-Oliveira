const input = process.argv[2]

enum Setores {
    SETOR1 = "marketing",
    SETOR2 = "vendas",
    SETOR3 = "financeiro",
}

type Colaborador = {
    nome: string, 
    salário: number, 
    setor: Setores, 
    presencial: boolean
}

const lista: Colaborador[] =[
	{ nome: "Marcos", salário: 2500, setor: Setores.SETOR1, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setores.SETOR2, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setores.SETOR3, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setores.SETOR1, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setores.SETOR3, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setores.SETOR2, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setores.SETOR1, presencial: true }
]

const result = lista.filter((i)=>{
    return i.setor.includes(input) && i.presencial === true
  })
  
  console.table(result)