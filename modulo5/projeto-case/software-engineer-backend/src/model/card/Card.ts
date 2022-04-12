export class Card {
    constructor(
        private id: string,
        private cardholderName: string,
        private cardNumber: string,
        private lastNumber: string,
        private cvv: string,
        private idHolder: string
    ) { }

    setId(id: string) {
        this.id = id
    }
    setCardNumber(cardNumber: string) {
        this.cardNumber = cardNumber
    }
    setLastNumber(lastNumber: string) {
        this.lastNumber = lastNumber
    }
    setCardholderName(cardholderName: string) {
        this.cardholderName = cardholderName
    }
    setCvv(cvv: string) {
        this.cvv = cvv
    }
    setIdHolder(idHolder: string) {
        this.idHolder = idHolder
    }


    getId() {
        return this.id
    }
    getCardNumber() {
        return this.cardNumber
    }
    getLastNumber() {
        return this.lastNumber
    }
    getCardholderName() {
        return this.cardholderName
    }
    getCvv() {
        return this.cvv
    }
    getIdHolder() {
        return this.idHolder
    }

}