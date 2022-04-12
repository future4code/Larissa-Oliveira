import { paymentMethod } from "../enums/paymentMethod";

export class Transaction {
    constructor(
        private id: string,
        private cardNumber: string,
        private cvv: string,
        private idHolder: string,
        private paymentMethod: paymentMethod
    ) { }

    getId() {
        return this.id
    }

    getPaymentMethod() {
        return this.paymentMethod
    }
    getCardNumber() {
        return this.cardNumber
    }
    getCvv() {
        return this.cvv
    }
    getIdHolder() {
        return this.idHolder
    }

    setId(id: string) {
        this.id = id
    }
    setCpfHolder(cpfHolder: string) {
        this.id = cpfHolder
    }
    setPaymentMethod(paymentMethod: paymentMethod) {
        this.paymentMethod = paymentMethod
    }
    setCardNumber(cardNumber: string) {
        this.cardNumber = cardNumber
    }
    setCvv(cvv: string) {
        this.cvv = cvv
    }
    setIdHolder(idHolder: string) {
        this.idHolder = idHolder
    }
}


