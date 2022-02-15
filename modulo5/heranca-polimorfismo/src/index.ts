import { User } from "./User"
import { Customer } from "./Customer"
import { Client } from "./Client"
import { Place } from "./Place"
import { Commerce } from "./Commerce"
import { ResidentialClient } from "./ResidentialClient"

// Herança
// Exercício 1
// const larissa: User = new User('1','larissa@email.com','Larissa','senha123');
// larissa.introduceYourself()
// console.log(larissa);

// Exercício 2 // Exercício 3 // Exercício 4 // Exercício 5
// const customer :Customer = new Customer ('1','larissa@email.com','Larissa','senha123','123')
// customer.introduceYourself()
// console.log(customer.introduceYourself());


// Polimorfismo 
// Exercício 1
// a) [Function: calculateBill]
// b) definir a função desta classe no momento em que for utilizar.
const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: (): number => {
        return 2;
    }
}
// console.log(client.calculateBill())

// Exercício 2
// a) Não foi possível pois a class Place é abstrata.
// b)
class Endereço extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa
        cep: string
    ) {
        super(cep)
    }
}
const osasco = new Endereço(1, "06060240")
// console.log("Cep =>",osasco.getCep())

// Exercício 3
// a) Criar um classe e usar o Place com extends
// b) porque ela é um molde e precisa ser implementada quando for preciso.
// c) Porque ela é uma função simples e reutilizável em casos específicos

const commerce = new Commerce(1, "06060240")
// console.log("Qtd de andar =>", commerce.getFloorsQuantity())

// Exercício 4
// a) 
const residentialClient  = new ResidentialClient ('Alameda',1213,950,'321547',9,'06060240')
console.log("Consumo =>", residentialClient .calculateBill().toFixed(1))