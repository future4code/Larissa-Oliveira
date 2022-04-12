import { CardRepository } from "../business/CardBusiness/CardRepository";
import { Card } from "../model/card/Card";
import { BaseDataBase } from "./BaseDataBase";

export class CardDataBase extends BaseDataBase implements CardRepository {
    
    private TABLE_CARD = "card"

    createCard = async (card: Card): Promise<void> => {
        try {
            await CardDataBase
                .connection(this.TABLE_CARD)
                .insert({
                    "id": card.getId(),
                    "cardholder_name": card.getCardholderName(),
                    "card_number": card.getCardNumber(),
                    "last_number": card.getLastNumber(),
                    "cvv": card.getCvv(),
                    "id_holder": card.getIdHolder()
                })
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }


    getAllTransactionByHolderId = async (id_holder: string) => {
        try {
            const queryResult: any = await CardDataBase
                .connection(this.TABLE_CARD)
                .select()
                .where({ id_holder })
            if (queryResult[0]) {
                const result = new Card(
                    queryResult[0].id,
                    queryResult[0].cardholder_name,
                    queryResult[0].card_number,
                    queryResult[0].last_number,
                    queryResult[0].cvv,
                    queryResult[0].id_holder
                )
                return result
            } else {
                return null
            }
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }



}