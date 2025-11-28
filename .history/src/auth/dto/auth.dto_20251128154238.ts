import { IsEmail, IsNegative, IsNotEmpty, IsString,Expose } from "class-validator";

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

