import { getCustomRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { ConvidadosRep } from "../repositories/ConvidadosRep";

export async function AutorizaConvidado(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // var tempo = new Date()
    // console.log(`Autoriza Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)

    const { opt_seq_convidado } = request;

    const guestRep = getCustomRepository(ConvidadosRep);

    const { opt_aprovado } = await guestRep.findOne(opt_seq_convidado);

    if (opt_aprovado === "1") {
        // var tempo = new Date()
        // console.log(`Fim Autoriza Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        //console.log("Passou autoriza");
        return next();
    }

    // var tempo = new Date()
    // console.log(`Fim Autoriza Usuario naut ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
    console.log(`Não Aprovado`)
    return response.status(403).json({
        error: "Não Autorizado",
    });
}
