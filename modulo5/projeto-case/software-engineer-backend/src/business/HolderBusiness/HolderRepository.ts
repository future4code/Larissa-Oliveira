import { Holder } from "../../model/holder/Holder";

export interface HolderRepository {
    createHolder(holder: Holder): Promise<void>
    getHolderByCpf(cpf: string): Promise<Holder | null>
    getHolderByEmail(email: string): Promise<Holder | null>
}