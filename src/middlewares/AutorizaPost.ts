import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsuarioRep } from "../repositories/UsuarioRep";

export async function Autoriza(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // var tempo = new Date()
    // console.log(`Autoriza Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)

    const { opt_codigo_usu } = request;

    const usuariosR = getCustomRepository(UsuarioRep);

    const { opt_nivel } = await usuariosR.findOne(opt_codigo_usu);

    if (opt_nivel === "0") {
        // var tempo = new Date()
        // console.log(`Fim Autoriza Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        return next();
    }

    // var tempo = new Date()
    // console.log(`Fim Autoriza Usuario naut ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
    return response.status(403).json({
        error: "Não Autorizado",
    });
}
