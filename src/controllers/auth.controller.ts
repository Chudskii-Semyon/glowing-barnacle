import { Request, Response } from 'express';
import { Inject, Service as Injectable } from 'typedi';
import { AUTH_CONTROLLER } from '@constants/controllers.constant';
import { AUTH_SERVICE } from '@constants/services.constant';
import { AuthService } from '@services/auth.service';
import { Body, Get, JsonController, Post, Req, Res } from 'routing-controllers';
import { SignInOutputDto } from '@dtos/outputs/sign-in.output.dto';
import { SignUpOutputDto } from '@dtos/outputs/sign-up.output.dto';
import { SignInInputDto } from '@dtos/inputs/sign-in.input.dto';
import { SignUpInputDto } from '@dtos/inputs/sign-up.input.dto';

@Injectable(AUTH_CONTROLLER)
@JsonController('/auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE)
    private readonly authService: AuthService
  ) {}

  @Get()
  public async test( @Req() req: Request, @Res() res: Response ) {
    return res.status(200).send({})
  }

  @Post('/signin')
  public async signIn( @Body() input: SignInInputDto ): Promise<SignInOutputDto> {
    return this.authService.signIn(input)
  }

  @Post('/signup')
  public async signUp( @Body() input: SignUpInputDto ): Promise<SignUpOutputDto> {
    return await this.authService.signUp(input)
  }
}
