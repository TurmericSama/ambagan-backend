import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'Name is required!' })
  @IsString({ message: 'Name must be a string!' })
  name: string;

  @IsEmail({}, { message: 'Invalid email!' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must have atleast 8 characters!' })
  password: string;
}
