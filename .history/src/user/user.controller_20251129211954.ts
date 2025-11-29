import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
    @UseGuards()
    @Get('me')
    getMe() {
        return 'userinfo'
    }

}
