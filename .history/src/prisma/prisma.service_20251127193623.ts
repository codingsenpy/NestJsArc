import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { url } from 'inspector';


@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        });
    }
}
