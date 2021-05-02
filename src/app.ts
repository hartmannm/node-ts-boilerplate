import environment from "./config/environment";
import HttpLoggerInstance from "./loaders/log/http-logger";
import LoggerInstance from "./loaders/log/logger";

const express = require('express');

const app = express();
app.use(HttpLoggerInstance)
app.get('/', (_, res) => res.send('OK'));

app.listen(environment.port, () => LoggerInstance.info(`
    ################################################
      Server listening on port: ${environment.port}
    ################################################
    `)).on('error', err => {
    LoggerInstance.error(err);
    process.exit(1);
})
