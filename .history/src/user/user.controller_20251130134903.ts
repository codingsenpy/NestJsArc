import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express'; 

@Controller('user')
export class UserController {
    @UseGuards(Jwt)
    @Get('me')
    getMe(@Req() req: Request) {
        return req.user;
    }

}
