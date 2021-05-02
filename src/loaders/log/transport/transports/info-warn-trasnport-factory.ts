import TransportStream from 'winston-transport';
import { LogLevel } from '../../log-level.enum';
import AbstractFileTransportFactory from '../abstract-file-transport-factory';

const { transports } = require('winston');

export default class InfoWarnTransportFactory extends AbstractFileTransportFactory {

    create(logLevel: LogLevel.INFO | LogLevel.WARN): TransportStream {
        return new transports.DailyRotateFile({
            level: logLevel,
            filename: this.getFileName(logLevel),
            ...this.fileRotateDefaultConfig,
        });
    }

}
