function qualquer(parametro: string | number | boolean) {
    var tipo = `O tipo informado é ${typeof (parametro)}`
    return (
        tipo
    )
}

console.log(qualquer(true))
console.log(qualquer(23))
console.log(qualquer("larissa"))