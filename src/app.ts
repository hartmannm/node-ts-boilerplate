import environment from "./config/environment";
import LoggerInstance from "./loaders/log/logger";
import express from 'express';

async function startServer() {
    const app = express();
    const http = require('http');

    await require('./loaders').default({ expressApp: app });
    app.get('/', (_, res) => res.send('OK'));

    const server = http.createServer(app);
    server.listen(environment.port, () => LoggerInstance.info(`
        ################################################
          Server listening on port: ${environment.port}
        ################################################
        `)).on('error', err => {
        LoggerInstance.error(err);
        process.exit(1);
    });
};

startServer();
