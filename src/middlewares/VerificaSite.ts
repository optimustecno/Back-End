import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface ISite {
    sub: string;
}

export function VerificaSite(request: Request, response: Response, next: NextFunction) {
    const token = request.headers.authorization.split(" ")[1];
    if (!token) {
        return response.status(401).json({
            error: "Não Autorizado",
        });
    }
    if (!process.env.TOKEN_SITE) {
        return response.status(401).json({
            error: "Não Autorizado",
        });
    }
    try {
        if (token == process.env.TOKEN_SITE) {
            return next();
        }
    } catch (error) {
        return response.status(401).json({
            error: "Não Autorizado",
        });
    }
}
