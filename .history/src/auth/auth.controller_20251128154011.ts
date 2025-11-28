import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type  { AuthDto } from './dto';
import
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        
  if (!dto.password) {
    throw new BadRequestException('Password required!');  // ← Manual check
  }
  console.log(dto);
        return this.authService.signin();
    }
    @Post('signup')
    signup() {
        return this.authService.signup();
    }
}