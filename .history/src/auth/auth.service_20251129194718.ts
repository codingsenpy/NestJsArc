import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService,  } from '../prisma/prisma.service';
import { ForbiddenException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { error } from 'console';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt:JwtService,) {}
    async signup(dto: AuthDto) {
        const has=argon.hash(dto.password)
        const hash=await argon.hash(dto.password)
        
        try{
                  const user =await this.prisma.user.create({
            data:{
                email:dto.email,
                hash,
            }
        })  
        return user
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code==='P2002'){
                    throw new ForbiddenException('Credentials taken')
                }
            }
            throw error;
        }
    }
    async signin(dto:AuthDto) {
        const user=await this.prisma.user.findUnique({
            where:{
                email:dto.email,
            }
        })
        if(!user) throw new ForbiddenException('Credentials incorrect')
            
        const pwMatches=await argon.verify(user.hash,dto.password)
        if(!pwMatches) throw new ForbiddenException('Credentials incorrect')
        
        return user
    }

    async signToken(userId:number,email:string){
        cosnt data={
            sub:userId,
            email,
    }

    return this.jwt.

}

// const service = new AuthService();