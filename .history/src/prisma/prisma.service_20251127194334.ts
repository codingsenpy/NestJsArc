import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { url } from 'inspector';


@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            ddatasource: {
    url: process.env.DATABASE_URL!,
  },
        });
    }
}
