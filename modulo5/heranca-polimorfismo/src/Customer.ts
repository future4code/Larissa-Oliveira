import {User} from "./User"

// Exercício 2
// a)1 vez
// b)1 vez pois o customer herda as informações do User, então ele é chamado.
export class Customer extends User {
	public purchaseTotal: number = 0;
	private creditCard: string;
  
	constructor(
	  id: string,
	  email: string,
	  name: string,
	  password: string,
	  creditCard: string
	) {
	  super(id, email, name, password);
	  console.log("Chamando o construtor da classe Customer");
	  this.creditCard = creditCard;
	}
  
	public getCreditCard(): string {
	  return this.creditCard;
	}
  }
//   Exercício 3
// a) Sim

