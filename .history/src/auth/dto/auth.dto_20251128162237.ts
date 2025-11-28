import { Expose } from "class-transformer";
import { IsEmail, IsNegative, IsNotEmpty, IsString, MinLength,  } from "class-validator";

export class AuthDto {
    @Expose()
    @IsEmail()
    @MinLength(1)
    email: string;

    @Expose()
    @MinLength(1)
    @IsString()
    password: string;
}

