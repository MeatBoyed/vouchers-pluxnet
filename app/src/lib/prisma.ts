import { PrismaClient } from '@prisma/client'
// import { PrismaClient } from "@/generated/prisma";

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    {/* @ts-expect-error Type mismatch */ }
    if (!global.prisma) {
        {/* @ts-expect-error Type mismatch */ }
        global.prisma = new PrismaClient();
    }
    {/* @ts-expect-error Type mismatch */ }
    prisma = global.prisma;
}

export default prisma