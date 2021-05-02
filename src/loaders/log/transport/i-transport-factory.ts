import TransportStream from 'winston-transport';
import { LogLevel } from "../log-level.enum";

export default interface ITransportFactory {

    create(level?: LogLevel): TransportStream;

}
