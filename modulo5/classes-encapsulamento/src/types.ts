// Exercício1
// a) Realiza a ação que deve ser executada ao criar a instancia da classe. É o primeiro a ser executado.
// b)
// c) acessando a própria classe usando a keyword this
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

  
  }
// Exercício2
type Transaction = {
    description: string,
    value: number,
    date: string
};

class UserTransaction {
    private description: string;
    private value: string;
    private date: number;
  
    constructor(
        description: string,
        value: string,
        date: number,
    ){
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getTransaction(){
        return this.description, this.value, this.date;
    };
  
  }

//   Exercício3
class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }


