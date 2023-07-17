import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { SuporteRep } from "../repositories/SuporteRep";
import { UsuarioRep } from "../repositories/UsuarioRep";

export async function DefineUsuarioSuporte(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { opt_codigo_usu } = request;
    const { seq } = request.params;

    try {
        const suporteRep = getCustomRepository(SuporteRep);
        const userRep = getCustomRepository(UsuarioRep);

        const { atendente } = await suporteRep.findOne(seq);

        if (atendente == "0") {
            const Suporte = await suporteRep.update(
                { seq },
                {
                    atendente: opt_codigo_usu,
                    status: '1'
                }
            );
            return next();
        } else if (atendente == opt_codigo_usu) {
            return next();
        } else {
            const { opt_usuario } = await userRep.findOne({
                opt_codigo_usu: atendente,
            });
            return response.status(403).json({
                error: `Suporte Está sendo usado pelo atendente: ${opt_usuario}`,
            });
        }
    } catch (error) {
        return response.status(403).json({
            error: "Não Foi Possível Atribuir o Atendente",
        });
    }
}
