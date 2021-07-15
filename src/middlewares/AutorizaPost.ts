import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsuarioRep } from "../repositories/UsuarioRep";

export async function Autoriza(request: Request, response: Response, next: NextFunction) {

    const { opt_codigo_usu } = request;

    const usuariosR = getCustomRepository(UsuarioRep);

    const { opt_nivel } = await usuariosR.findOne(opt_codigo_usu);

    if (opt_nivel === "0") {
        return next();
    }

    return response.status(401).json({
        error: "Não Autorizado"
    });
}
