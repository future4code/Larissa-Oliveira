

type Produtos = {
    nome: string, 
    quantidade: number, 
    valorUnitario: number | string
}

const ajustaPreco = (preco :number| string): string => {
	const valorAjustado: string = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
	return valorAjustado
}

const estoque: Produtos[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function compare(a:Produtos, b:Produtos):number {
    if(a.quantidade < b.quantidade)
    return -1
    if(a.quantidade > b.quantidade)
    return 1
    return 0
}


function formate(estoque:Produtos[]): Produtos[]{
    const estoqueOrdenado: Produtos[] = estoque.map(item =>{
        item.valorUnitario = ajustaPreco(item.valorUnitario as number);
        return item
    })
    estoque.sort(compare)
    return estoqueOrdenado
}

console.log(formate(estoque))