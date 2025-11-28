import { IsEmail } from "class-validator";

export class AuthDto {
    @IsEmail()
    @Is
    email: string;
    password: string;
}

