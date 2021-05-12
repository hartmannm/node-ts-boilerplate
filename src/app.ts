import environment from "./config/environment";
import express from 'express';
import DiContainer from "./loaders/DiContainer";
import { Logger } from "winston";

async function startServer() {
    const app = express();
    const http = require('http');

    await require('./loaders').default({ expressApp: app });
    app.get('/', (_, res) => res.send('OK'));

    const server = http.createServer(app);

    const logger = DiContainer.get<Logger>('logger');

    server.listen(environment.port, () => logger.info(`
        ################################################
          Server listening on port: ${environment.port}
        ################################################`)
    ).on('error', err => {
        logger.error(err);
        process.exit(1);
    });
};

startServer();
