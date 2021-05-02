import Profiles from "../../config/profiles/profiles";
import { LogLevel } from "./log-level.enum";
import ConsoleTransportFactory from "./transport/transports/console-transport-factory";
import ErrorTransportFactory from "./transport/transports/error-transport-factory";
import InfoWarnTransportFactory from "./transport/transports/info-warn-trasnport-factory";

const { createLogger } = require('winston');

let transports = null;

if (Profiles.isProfileProduction()) {
    transports = {
        infoTransport: new InfoWarnTransportFactory().create(LogLevel.INFO),
        warnTransport: new InfoWarnTransportFactory().create(LogLevel.WARN),
        errorTransport: new ErrorTransportFactory().create(),
    };
} else {
    transports = { consoleTransport: new ConsoleTransportFactory().create() };
}

// Cria o logger e define suas propriedades
const LoggerInstance = createLogger({
    transports: Object.values(transports),
    exitOnError: false,
});

export default LoggerInstance;
