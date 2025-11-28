import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('signin')
    signin(@Body() dto: A) {
        console.log(dto)
        return this.authService.signin();
    }
    @Post('signup')
    signup() {
        return this.authService.signup();
    }
}