import { Injectable } from '@nestjs/common';
import {U}

@Injectable()
export class AuthService {
    signin() {
        return {msg: 'signin'};
    }
    signup() {
        return {msg: 'signup'};
    }
}

const service = new AuthService();