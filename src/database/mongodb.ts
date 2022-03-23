import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try {
        console.log('conectando ao mongodb...');
        await connect(process.env.MONGO_URL as string);
        console.log('mongodb conectado!');
    } catch {
        console.log("Erro conexão MongoDb: ", Error);
    }
};