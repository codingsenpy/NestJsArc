import { IsEmail, IsNegative } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsN
    email: string;
    password: string;
}

