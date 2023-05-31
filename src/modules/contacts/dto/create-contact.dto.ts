import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Contact name',
    type: String,
    default: 'Contact name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Contact email',
    type: String,
    default: 'contact@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Contact phone',
    type: String,
    default: '+00 00 00000-0000',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;
}
