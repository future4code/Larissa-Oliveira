import { HolderRepository } from "../business/HolderBusiness/HolderRepository";
import { Holder } from "../model/holder/Holder";
import { BaseDataBase } from "./BaseDataBase";

export class HolderDataBase extends BaseDataBase implements HolderRepository {
    private TABLE_NAME = "holder"

    createHolder = async (holder: Holder) => {
        try {
            await HolderDataBase
                .connection(this.TABLE_NAME)
                .insert({
                    "id": holder.getId(),
                    "cardholder_Name": holder.getCardholderName(),
                    "cpf_holder": holder.getCpfHolder(),
                    "email": holder.getEmail(),
                    "password": holder.getPassword(),
                    "created": holder.getCreated()
                })
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    getHolderByCpf = async (cpf: string) => {
        try {
            const result: Holder[] = await HolderDataBase
                .connection(this.TABLE_NAME)
                .select()
                .where({ cpf_holder: cpf })
            return result.length ? result[0] : null
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    getHolderByEmail = async (email: string) => {
        try {
            const queryResult: any = await HolderDataBase
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })
            if (queryResult[0]) {
                const result = new Holder(
                    queryResult[0].id,
                    queryResult[0].cardholder_Name,
                    queryResult[0].cpf_holder,
                    queryResult[0].email,
                    queryResult[0].password,
                    queryResult[0].created
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