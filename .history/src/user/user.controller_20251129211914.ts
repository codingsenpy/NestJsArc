import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @u
    @Get('me')
    getMe() {
        return 'userinfo'
    }

}
