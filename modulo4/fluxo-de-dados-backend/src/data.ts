export type Produtos = {
    id: string,
    nameProduct: string,
    price: number
}[]

export const produtos: Produtos = [
    {
        id:'1',
        nameProduct: 'Escova de dente',
        price: 25
    },
    {
        id:'2',
        nameProduct: 'Creme dental',
        price: 30
    },
    {
        id:'3',
        nameProduct: 'Fio dental',
        price: 14
    },
    {
        id:'4',
        nameProduct: 'Enxaguante bucal',
        price: 7
    }
]