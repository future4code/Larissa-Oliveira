function idade(nascimento:Date) { 
    var diff_ms = Date.now() - nascimento.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(idade(new Date(1995, 12, 23)));

function tempoEmissao(emissao:Date) { 
    var dataAtual = Date.now() - emissao.getTime();
    var ano = new Date(dataAtual); 
  
    return Math.abs(ano.getUTCFullYear() - 1970);
}


console.log(tempoEmissao(new Date(2015, 10, 5)));

function validaRenovacaoDocumento(nascimento: string, emissao: string): boolean {

    function idade(emissao:Date) { 
        var dataAtual = Date.now() - emissao.getTime();
        var ano = new Date(dataAtual); 
      
        return Math.abs(ano.getUTCFullYear() - 1970);
    }
    function tempoEmissao(emissao:Date) { 
        var dataAtual = Date.now() - emissao.getTime();
        var ano = new Date(dataAtual); 
      
        return Math.abs(ano.getUTCFullYear() - 1970);
    }

    

    if (nascimento <= 20 && emissao >= 5) {return true}
    if (nascimento <= 50 && emissao >= 10) {return true}
    if (nascimento > 50 && emissao >= 15) {return true}
    return false
}




