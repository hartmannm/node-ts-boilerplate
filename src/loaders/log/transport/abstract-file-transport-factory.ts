import ITransportFactory from './i-transport-factory';
import TransportStream from 'winston-transport';
import { LogLevel } from '../log-level.enum';
import environment from '../../../config/environment';

const { format } = require('winston');
require('winston-daily-rotate-file');

export default abstract class AbstractFileTransportFactory implements ITransportFactory {

    abstract create(level?: LogLevel): TransportStream;

    protected fileRotateDefaultConfig = {
        datePattern: 'DD-MM-YYYY',
        dirname: environment.LOGS_PATH,
        extension: '.log',
        maxSize: '5m',
        maxFiles: '20d',
        zippedArchive: true,
        format: format.combine(format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss.SSS' }), format.json())
    };

    protected getFileName(level: LogLevel): string {
        // Concatena o nível com a data inserida pelo "Winston"
        return `${level}-%DATE%`;
    }
}
