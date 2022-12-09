import express from 'express';
import { usersRouter } from '../routes/usersRouter';

export const server = express();
server.use('/users', usersRouter);