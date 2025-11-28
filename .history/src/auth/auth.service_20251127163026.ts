import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signin() {
        return {msg: 'signin'};
    }
    signup() {}
}

const service = new AuthService();