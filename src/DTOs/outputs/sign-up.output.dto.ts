import { User } from '@entities/user.entity';

export class SignUpOutputDto {
  user: User;
  token: string
}
