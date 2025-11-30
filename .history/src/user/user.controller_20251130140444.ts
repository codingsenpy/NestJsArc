import { Controller, Get, Req, UseGuards, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express'; 
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { type } from 'os'; { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    @Get('me')
    // getMe(@GetUser('id') userId: number) { can be used to get specific field
    getMe(@GetUser() user: User) {
        return user;
    }
    @Patch()
    editUser(){}

}
