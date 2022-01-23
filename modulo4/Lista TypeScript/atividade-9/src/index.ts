function fatorial(valor:string):number{
    const numeroLetras = valor.length
    let contador = 1;
        for(let i = numeroLetras; i > 1; i--){
            contador *= i -1;
        }
    return contador;
}
  
console.log(fatorial("mensal"))