type Clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number []
}

const listaDeCliente: Clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function negativados(listaDeCliente:Clientes[]):Clientes[]{
    return listaDeCliente.map((cliente)=>{
        const totalDividas = cliente.debitos.reduce((total, numero)=>{
            return total += numero
        },0)
        cliente.saldoTotal -= totalDividas
        return cliente
    }).filter((cliente)=>{
        cliente.debitos = [] 
        return cliente.saldoTotal < 0
    })
}

console.log (negativados(listaDeCliente))

