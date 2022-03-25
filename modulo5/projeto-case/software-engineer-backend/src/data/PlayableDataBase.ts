import { PayableRepository } from "../business/PlayableBusiness/PayableRepository";
import { Card } from "../model/card/Card";
import { Payable } from "../model/playable/Payable";
import { BaseDataBase } from "./BaseDataBase";

export class PayableDataBase extends BaseDataBase implements PayableRepository {
    private TABLE_PAYABLE = "payable"
    private TABLE_CARD = "card"

    createPayable = async (payable: Payable): Promise<void> => {
        try {
            await PayableDataBase
                .connection(this.TABLE_PAYABLE)
                .insert({
                    "id": payable.getId(),
                    "status": payable.getStatus(),
                    "payment_date": payable.getPaymentDate(),
                    "created_date": payable.getCreatedDate(),
                    "value": payable.getValue(),
                    "description": payable.getDescription(),
                    "id_holder": payable.getIdHolder()
                })
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    getAllPayableByHolderId = async (id: string) => {
        try {
            const queryResult: any = await PayableDataBase
                .connection(this.TABLE_PAYABLE)
                .select()
                .where({ id_holder: id })
            if (queryResult[0]) {
                const result = new Payable(
                    queryResult[0].id,
                    queryResult[0].status,
                    queryResult[0].payment_date,
                    queryResult[0].created_date,
                    queryResult[0].value,
                    queryResult[0].description,
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


    getHolderCard = async (id: string) => {
        try {
            const queryResult: any = await PayableDataBase
                .connection(this.TABLE_CARD)
                .select()
                .where({ id_holder: id })
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