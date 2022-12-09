import { Request, Response } from "express";

interface IhttpRequest{
    body: any;
    header: any;
}

interface IhttpResponse {
    statusCode: number;
    body: any;
}

export class ExpressRouterAdapter{
    static adapt(router: any ){
        return async (req: Request, res: Response) => {
            const httpRequest = {
                body: req.body
            }

            const httpResponse = await router.route(httpRequest);
            res.status(httpResponse.statusCode).json(httpResponse.body)
        }
    }
}