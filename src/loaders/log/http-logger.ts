import LoggerInstance from './logger';
const morgan = require('morgan');

const logStream = (LoggerInstance.stream = {
    write(message: string) {
        LoggerInstance.info(message.substring(0, message.lastIndexOf('\n')));
    },
});

const outputFormat =
    ':remote-addr - ":remote-user" :method :url HTTP/:http-version" :status - :total-time - ":referrer" ":user-agent"';

const HttpLoggerInstance = morgan(outputFormat, { stream: logStream });

export default HttpLoggerInstance;
