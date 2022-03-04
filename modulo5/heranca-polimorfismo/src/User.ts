// Exercício 1
// a) Não pois ela é privada e não tem nenhum método para ela.

export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	
	}
	public introduceYourself(): string {
		return `Olá, sou ${this.name}. Bom dia!`
	}

}