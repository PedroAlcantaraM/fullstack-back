import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'User email',
    type: String,
    default: 'user@mail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password (min 8 charactere)',
    type: String,
    default: '********',
  })
  @IsString()
  password: string;
}
