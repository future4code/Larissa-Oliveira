import { paymentMethod } from "../enums/paymentMethod"

export type PayableInputDTO = {
    token: string | undefined,
    paymentMethod: paymentMethod,
    value: number,
    description: string,
    cardNumber: string,
    cvv: string,

}