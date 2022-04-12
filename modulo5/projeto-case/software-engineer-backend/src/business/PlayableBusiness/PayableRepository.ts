import { Card } from "../../model/card/Card";
import { Payable } from "../../model/playable/Payable";

export interface PayableRepository {
    createPayable(payable: Payable): Promise<void>
    getHolderCard(id: string): Promise<Card| null>
    getAllPayableByHolderId(id: string): Promise<Payable | null>
}