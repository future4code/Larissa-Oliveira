function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
  ex = 3
  p1 = 5
  p2 = 3


    var mp = (ex *1) + (p1 *2) + (p2 *3) / (1+2+3) 
    if( mp >= 9 ){
      return `A`
    }else if(mp < 9.0 >= 7.5){
      return `B`
    }else if(mp < 7.5 >= 6){
      return `C`
    }else(mp < 6){
      return `D`
    }
  }
calculaNota()