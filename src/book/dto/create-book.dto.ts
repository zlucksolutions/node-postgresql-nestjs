import {
    IsNotEmpty,
    IsString,
    IsDate,
    IsBoolean,
    MinLength,
  } from 'class-validator';
import { Timestamp } from 'typeorm';
export class CreateBookDto {
    @IsString()
    @MinLength(1, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    book_name: string;
  
    @IsNotEmpty()
    @MinLength(2, { message: 'Username must have atleast 3 characters.' })
    author: string;
  
    @IsBoolean()
    delete_status: boolean;
  
    @IsDate()
    created_at: Timestamp;
  
    @IsDate()
    updated_at : Timestamp
}
