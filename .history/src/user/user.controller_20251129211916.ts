import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Use
    @Get('me')
    getMe() {
        return 'userinfo'
    }

}
