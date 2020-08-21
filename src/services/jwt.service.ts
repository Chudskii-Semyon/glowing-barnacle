import { Service as Injectable } from 'typedi';
import * as jsonwebtoken from 'jsonwebtoken'
import { JwtPayloadInputDto } from '@dtos/inputs/jwt-payload.input.dto';

@Injectable('JWT')
export class JwtService {
  private jwt: any;

  constructor() {
    this.jwt = jsonwebtoken
  }

  public async sign( jwtPayload: JwtPayloadInputDto): Promise<string> {
    // secret from env / config
    return this.jwt.sign(jwtPayload, 'secret')
  }
}
