import { IsEmail, IsNegative, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @Expose()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    password: string;
}

