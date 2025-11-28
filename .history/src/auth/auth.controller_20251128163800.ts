import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type  { AuthDto } from './dto';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        @UsePipes(new ValidationPipe({ transform: true }))  // ← FORCE METHOD VALIDATION
  signin(@Body() dto: AuthDto) {
    console.log('🚨 CONTROLLER REACHED - VALIDATION FAILED!');
    return { msg: 'signin' };
    }
    @Post('signup')
    signup() {
        return this.authService.signup();
    }
}