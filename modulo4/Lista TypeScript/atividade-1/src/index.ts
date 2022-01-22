function nomeData(nome: string, data: string): string {
    let separador = data.split("/")
    let fraseCompleta = `Olá me chamo ${nome}, nasci no dia ${separador[0]} do mês de ${separador[1]} do ano de ${separador[2]}`
    return fraseCompleta
}

console.log(nomeData("larissa", "23/12/1995"))
