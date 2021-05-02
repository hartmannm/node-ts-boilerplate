import HttpLoggerInstance from './log/http-logger';
import cors from 'cors';
import express from 'express';
import * as helmet from 'helmet';

export default ({ app }: { app: express.Application }) => {
    const bodyParser = require('body-parser')

    // Habilitar caso use proxy reverso
    // app.enable('trust proxy');

    app.use(HttpLoggerInstance);
    app.use(cors());
    app.use(helmet.default());
    app.use(bodyParser.json());
}
