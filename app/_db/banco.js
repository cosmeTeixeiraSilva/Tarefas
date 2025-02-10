import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

// Objeto global para evitar múltiplas conexões no desenvolvimento
const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
}

const db = globalForPrisma.prisma;
let provider = ""
// Verificando o provedor configurado no .env
if (process.env.DATABASE_TIPO === 'sqlite') {
    provider = "SQLITE";
} else if (process.env.DATABASE_TIPO === 'mysql') {
    provider = "MYSQL";
} else if (process.env.DATABASE_TIPO === 'postgresql') {
    provider = "POSTGRESQL";
} else {
    provider = "DESCONHECIDO";
}

console.log(`Conectando ao banco de dados: ${provider}`);

export default db;
