import TransportStream from 'winston-transport';
import { LogLevel } from '../../log-level.enum';
import AbstractFileTransportFactory from "../abstract-file-transport-factory";

const { transports } = require('winston');

export default class ErrorTransportFactory extends AbstractFileTransportFactory {

    create(): TransportStream {
        return new transports.DailyRotateFile({
            level: 'error',
            filename: this.getFileName(LogLevel.ERROR),
            handleExceptions: true,
            ...this.fileRotateDefaultConfig,
        });
    }

}
