import { NextFunction, Request, Response } from "express";

export async function AutUaiRango(request: Request, response: Response, next: NextFunction) {
    console.log("AUT")
    const chaveUai = request.headers["x-uairango-key"];
    console.log("chaveUai")
    if (chaveUai === process.env.CHAVE_UAI_RANGO) {
        return next();
    }
    //senha ok?
    throw new Error("Não Autorizado")
}

