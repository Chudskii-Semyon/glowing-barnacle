import { Inject, Service as Injectable } from 'typedi'
import { AUTH_SERVICE } from '@constants/services.constant';
import { User } from '@entities/user.entity';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '@repositories/user.repository';
import { SignInInputDto } from '@dtos/inputs/sign-in.input.dto';
import { plainToClass } from 'class-transformer';
import { SignInOutputDto } from '@dtos/outputs/sign-in.output.dto';
import { SignUpOutputDto } from '@dtos/outputs/sign-up.output.dto';
import { JwtService } from '@services/jwt.service';
import { BcryptService } from '@services/bcrypt.service';
import { SignUpInputDto } from '@dtos/inputs/sign-up.input.dto';

@Injectable(AUTH_SERVICE)
export class AuthService {
  constructor(
    @InjectRepository()
    private readonly userRepository: UserRepository,
    @Inject('JWT')
    private readonly jwtService: JwtService,
    @Inject('BCRYPT')
    private readonly bcryptService: BcryptService
  ) {}

  public async signUp( input: SignUpInputDto ): Promise<SignUpOutputDto> {
    const user = plainToClass(User, input, { ignoreDecorators: true })

    const createdUser = await this.userRepository.createUser(user)
    const token = await this.jwtService.sign({ sub: user.id })

    return {
      user: createdUser,
      token
    }
  }

  public async signIn( input: SignInInputDto ): Promise<SignInOutputDto> {
    const user = await this.userRepository.findOneByEmailOrFail(input.email)

    const equals = await this.bcryptService.compare(input.password, user.password)

    if ( !equals ) {
      // throw error
    }

    const token = await this.jwtService.sign({ sub: user.id })

    return {
      token
    }
  }
}
