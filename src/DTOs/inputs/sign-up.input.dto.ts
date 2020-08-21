import { IsString, MaxLength, MinLength } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SignUpInputDto {
  @Expose()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  public firstName: string

  @Expose()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  public lastName: string

  @Expose()
  @MinLength(3)
  @MaxLength(30)
  public email: string

  @Expose()
  @MinLength(8)
  @MaxLength(16)
  // @Matches('/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/')
  public password: string
}
