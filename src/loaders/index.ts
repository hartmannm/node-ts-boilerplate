import expressLoader from './express';
import express from 'express';
import DiContainer from './DiContainer';

export default async ({ expressApp }: { expressApp: express.Application }) => {
    new DiContainer();
    await expressLoader({ app: expressApp });
};
