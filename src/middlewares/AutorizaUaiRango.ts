import { NextFunction, Request, Response } from "express";
import { AutorizaUsu } from "../services/ServiceAutorizaUsu";


class ControleAutenticao {
    async handle(request: Request, response: Response, next: NextFunction) {
        console.log(request.headers)

        const senha = request.headers.authorization.split(" ")[1];

        const autentica = new AutorizaUsu();


        return next();
    }
}

export { ControleAutenticao }