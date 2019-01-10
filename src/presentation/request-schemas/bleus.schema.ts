import { IsEmail, MinLength } from 'class-validator';

export class Bleus {

  @MinLength(4)
  name: string;

  @IsEmail()
  email: string;
}
