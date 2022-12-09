import { Router } from 'express';

export const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    return res.status(501).json({message:'Not implemented'});
})