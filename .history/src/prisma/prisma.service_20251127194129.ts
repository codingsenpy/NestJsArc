import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { url } from 'inspector';


@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
        datasourceOverrides: [
            {
            name: 'db', // must match your datasource name in schema.prisma
            url: process.env.DATABASE_URL,
            },
        ],
        });
    }
}
