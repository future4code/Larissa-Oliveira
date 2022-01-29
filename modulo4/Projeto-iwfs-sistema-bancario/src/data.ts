enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type Transaction = {
    idTransaction: number;
    value: number,
    date: string,
    description: string
}

export type User = {
    id: any,
    name: string,
    cpf: string,
    birthDate: string,
    balance:any,
    transactions:Transaction []
}


export let users: User [] = [
    {
        id: 1,
        name: "Larissa",
        cpf: "123.456.789-10",
        birthDate: "23/12/1995",
        balance:0,
        transactions: [
            {
                idTransaction:1,
                value: 50,
                date: "10/12/2021",
                description: "loja de sapato"
            },
            {
                idTransaction:2,
                value: 30,
                date: "11/11/2021",
                description: "loja de tesoura"
            }
        ]
    },

    {
        id: 2,
        name: "Albert",
        cpf: "321.654.987-01",
        birthDate: "23-01-95",
        balance: 300,
        transactions: [
            {
                idTransaction: 1,
                value: 10,
                date: "10/02/2021",
                description: "loja de roupa"
            }
        ]
    }
]
