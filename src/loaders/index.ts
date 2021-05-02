import expressLoader from './express';
import Logger from './log/logger';
import express from 'express';

export default async ({ expressApp }: { expressApp: express.Application }) => {
    Logger.info('Starting Express configuration...');
    await expressLoader({ app: expressApp });
    Logger.info('Express ready!!!');
};
