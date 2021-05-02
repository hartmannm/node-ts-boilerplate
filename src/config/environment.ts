import dotenv from 'dotenv';
import path from 'path';
import { ProfilesValues } from './profiles/profiles-values';

// Caso o peril não esteja definido nas variáveis de ambiente, define como 'development'
process.env.NODE_ENV = process.env.NODE_ENV || ProfilesValues.DEVELOPMENT;

const environment = dotenv.config();
if (environment.error) {
    throw new Error('Não foi possível encontrar o arquivo .env');
}

const _getDefaultLogsPath = (): string => {
    console.log(path.resolve('/logs/boilerplate'))
    return path.resolve('/logs/boilerplate');
};

export default {

    port: parseInt(process.env.PORT, 10),
    profile: process.env.NODE_ENV?.trim() || ProfilesValues.DEVELOPMENT,
    LOGS_PATH: process.env.LOGS_PATH?.trim() || _getDefaultLogsPath()

}
