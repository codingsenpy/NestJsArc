import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async signup(dto: AuthDto) {
        const has=argon.hash(dto.password)
        const hash=await argon.hash(dto.password)

        const user =await this.prisma.user.create({
            data:{
                email:dto.email,
                hash,
            }
        })
        delete user.hash
        return user
    }
    signin() {
        return {msg: 'signin'};
    }
}

// const service = new AuthService();