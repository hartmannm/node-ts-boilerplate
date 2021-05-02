import TransportStream from 'winston-transport';
import { TransformableInfo } from 'logform';
import ITransportFactory from '../i-transport-factory';

const { transports, format } = require('winston');

export default class ConsoleTransportFactory implements ITransportFactory {

    create(): TransportStream {
        return new transports.Console({
            handleExceptions: true,
            format: format.combine(
                format.colorize(),
                this.outputDefaultFormat
            ),
        });
    }

    private outputDefaultFormat = format.combine(
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss.SSS' }),
        format.printf(
            (info: TransformableInfo) =>
                `[${info.timestamp}] [${info.level}]: ${info.message}`
        )
    );

}
