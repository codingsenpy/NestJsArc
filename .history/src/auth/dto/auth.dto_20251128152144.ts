export class AuthDto {
    @IsEmail
    email: string;
    password: string;
}

