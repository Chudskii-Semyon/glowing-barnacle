import bcrypt from 'bcrypt'
import { Service as Injectable } from 'typedi'
import { BCRYPT_SERVICE } from '@constants/services.constant';

@Injectable('BCRYPT')
export class BcryptService {
  public async genSalt( rounds: number = 10, minor: string = 'b' ): Promise<string> {
    return bcrypt.genSalt(rounds, minor);
  }

  public async compare( data: string, encrypted: string ): Promise<boolean> {
    return bcrypt.compare(data, encrypted)
  }

  public async hash( data: string, salt: string ): Promise<string> {
    return bcrypt.hash(data, salt)
  }
}
