import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express'; 
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';

@Controller('user')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@GetUser() user) {
        return user;
    }

}
