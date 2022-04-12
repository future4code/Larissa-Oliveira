import { paymentStatus } from "../enums/paymentStatus"

export class Payable {
    constructor(
        private id: string,
        private status: paymentStatus,
        private paymentDate: string,
        private createdDate: string,
        private value: number,
        private description: string,
        private idHolder: string

    ) { }
    static toPayableModel(payable: any): Payable {
        return new Payable(payable.id, payable.status, payable.paymentDate, payable.createdDate, payable.amount, payable.description, payable.idHolder)
    }

    getId() {
        return this.id
    }
    getStatus() {
        return this.status
    }
    getPaymentDate() {
        return this.paymentDate
    }
    getCreatedDate() {
        return this.createdDate
    }
    getValue() {
        return this.value
    }
    getDescription() {
        return this.description
    }
    getIdHolder() {
        return this.idHolder
    }

    setId(id: string) {
        this.id = id
    }
    setStatus(status: paymentStatus) {
        this.status = status
    }
    setPaymentDate(paymentDate: string) {
        this.paymentDate = paymentDate
    }
    setCreatedDate(createdDate: string) {
        this.createdDate = createdDate
    }
    setValue(value: number) {
        this.value = value
    }
    setDescription(description: string) {
        this.description = description
    }
    setIdHolder(idHolder: string) {
        this.idHolder = idHolder
    }

}