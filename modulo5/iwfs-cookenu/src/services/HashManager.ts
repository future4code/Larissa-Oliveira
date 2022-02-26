import * as bcryptjs from 'bcryptjs';

export class HashManager {
    public async hash(text: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcryptjs.genSalt(rounds);
        return  bcryptjs.hash(text,salt);
    }
    public async compare(text:string, hash: string): Promise<boolean>{
        return bcryptjs.compare(text, hash)
    }
}