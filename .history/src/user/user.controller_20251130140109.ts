import { Controller, Get, Req, UseGuards, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express'; 
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    @Get('me')
    // getMe(@GetUser('id') userId: number) {
    getMe(@GetUser() user: User) {
        return user;
    }
    @Patch()
    editUser(){}

}
