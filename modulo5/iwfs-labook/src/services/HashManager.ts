import * as bcrypt from 'bcryptjs';

export class HashManager {
  public async hash(plainText: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(plainText, salt)
  }

  public async compare(plainText: string, cypherText: string): Promise<boolean> {
    return bcrypt.compare(plainText, cypherText)
  }
}