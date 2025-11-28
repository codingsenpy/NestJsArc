import { IsEmail, IsNegative, IsNotEmpty } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @
    password: string;
}

