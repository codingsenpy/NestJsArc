import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    signin(dto: AuthDto) {
        const has=argon.hash(dto.password)
        const hash=argon.hash(dto.password)

        return {msg: 'signin'};
    }
    signup() {
        return {msg: 'signup'};
    }
}

// const service = new AuthService();