import { Expose } from "class-transformer";
import { IsEmail, IsNegative, IsNotEmpty, IsString,  } from "class-validator";

export class AuthDto {
    @Expose()
    @IsEmail()
    @MinLength(1)
    email: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    password: string;
}

