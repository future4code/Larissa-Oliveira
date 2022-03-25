export class Holder {

    constructor(
        private id: string,
        private cardholderName: string,
        private cpfHolder: string,
        private email: string,
        private password: string,
        private created: string,
    ) { }

    static toHolderModel(holder: any): Holder {
        return new Holder(holder.id, holder.cardholderName, holder.cpfHolder, holder.email, holder.password, holder.created)
    }

    getId() {
        return this.id
    }
    getCardholderName() {
        return this.cardholderName
    }
    getCpfHolder() {
        return this.cpfHolder
    }
    getEmail() {
        return this.email
    }
    getPassword() {
        return this.password
    }
    getCreated() {
        return this.created
    }

    setId(id: string) {
        this.id = id;
    }
    setCardholderName(cardholderName: string) {
        this.cardholderName = cardholderName
    }
    setCpfHolder(cpfHolder: string) {
        this.cpfHolder = cpfHolder
    }
    setEmail(email: string) {
        this.email = email
    }
    setPassword(password: string) {
        this.password = password
    }
    setCreated(created: string) {
        this.created = created
    }


}