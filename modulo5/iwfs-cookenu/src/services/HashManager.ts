import * as bcryptjs from 'bcryptjs';

export class HashManager {

    public hash = (
        text: string
    ): string => {
        const rounds: number = Number(process.env.BCRYPT_COST)
        const salt: string = bcryptjs.genSaltSync(rounds);
        const result: string = bcryptjs.hashSync(text, salt)

        return result
    }
    public compare = (
        text: string,
        hash: string
    ): boolean => {
        return bcryptjs.compareSync(text, hash)
    }
}