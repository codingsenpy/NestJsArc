import { Controller, Post, Req, Body, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import type  { AuthDto } from './dto';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('signin')
    signin(@Body('email') email:string, @Body('password', ParseIntPipe) password:string) {
        console.log(email,password)
        return this.authService.signin();
    }
    @Post('signup')
    signup() {
        return this.authService.signup();
    }
}