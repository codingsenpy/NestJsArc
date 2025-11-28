import { Injectable } from '@nestjs/common';
import {User, Bookmark} from '@pris

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