import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signin() {
        return {msg:}
    }
    signup() {}
}

const service = new AuthService();