
import { Card } from "../../model/card/Card";

export interface CardRepository {
    createCard(card: Card): Promise<void>
    getAllTransactionByHolderId(id_holder: string): Promise<Card | null>
}