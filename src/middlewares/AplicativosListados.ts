import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IUsuarioAutorizado {
    sub: string
}

export function AplicativosListados(request: Request, response: Response, next: NextFunction) {

    const [, token] = request.headers.authorization.split(" ");

    if (!token) {
        return response.status(401).json({
            error: "Não Autorizado"
        });
    }
    try {
        const { sub } = verify(token, process.env.secret) as IUsuarioAutorizado;
        request.opt_codigo_usu = sub
        return next();
    } catch (error) {
        return response.status(401).json({
            error: "Não Autorizado"
        });
    }

}