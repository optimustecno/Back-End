import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface IUsuarioAutorizado {
    sub: string
}

export function VerificaUsuario(request: Request, response: Response, next: NextFunction) {
    console.log("VerificaUsuario")
    console.log(request.headers.authorization)

    const token = request.headers.authorization.split(" ")[1];

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