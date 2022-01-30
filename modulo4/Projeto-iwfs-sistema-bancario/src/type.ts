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