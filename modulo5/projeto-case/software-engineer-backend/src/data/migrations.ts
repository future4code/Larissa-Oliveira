import { BaseDataBase } from "./BaseDataBase"

export default class Migration extends BaseDataBase {

    static createTables = async () => {
        try {
            await this.connection.raw(`
            CREATE TABLE holder (
                id VARCHAR(255) PRIMARY KEY,
                cardholder_Name VARCHAR(255) NOT NULL,
                cpf_holder VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created VARCHAR(255) NOT NULL
            );

            CREATE TABLE playable_holder(
                id VARCHAR(255) PRIMARY KEY,
                status ENUM("PAID","WAITING_FUNDS"),
                payment_date DATE NOT NULL,
                created_date DATE NOT NULL,
                amount FLOAT NOT NULL,
                id_holder VARCHAR(255) NOT NULL,
                FOREIGN KEY (id_holder) REFERENCES holder(id)
            );
    
            CREATE TABLE transaction_holder(
                id VARCHAR(255) PRIMARY KEY,
                transactions_value FLOAT NOT NULL,
                transactions_description VARCHAR(255) NOT NULL,
                payment_method ENUM("DEBIT_CARD","CREDIT_CARD"),
                card_number VARCHAR(255) NOT NULL,
                expiration_date DATE NOT NULL,
                created_date DATE NOT NULL,
                cvv VARCHAR(255) NOT NULL,
                id_holder VARCHAR(255) NOT NULL,
                FOREIGN KEY (id_holder) REFERENCES holder(id)
            );`)

        } catch (error: any) {
            console.log(error.message)
        }
    }
}

Migration.createTables()