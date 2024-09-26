import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../repositories/ClienteRep";
import { Request, Response, NextFunction } from "express";
import { ViewVinculosRep } from "../repositories/ViewVinculosRep";

export async function VerificaVinculo(request: Request, response: Response, next: NextFunction) {
    const { uid_cli } = request.params;
    const { opt_seq_convidado } = request;

    const vinculosRep = getCustomRepository(ViewVinculosRep);
    const ClienteRep = getCustomRepository(ClientesRep);

    if (!uid_cli) {
        return response.status(401).json({
            error: "Cliente Não Informado",
        });
    }

    try {
        
        const cliente = await ClienteRep.findOne({ opt_uid_cli: uid_cli });

        if (!cliente) {
            throw new Error("Cliente Não Encontrado!");
        }

        const vinculo = await vinculosRep.findOne({
            opt_seq_convidado,
            opt_cod_cliente: cliente.opt_cod_cliente,
        });

        if (vinculo) {
            request.opt_cod_cliente = cliente.opt_cod_cliente;
            return next();
        }
        else {
            throw new Error("Cliente Não Vinculado!");
        }
    } catch (error) {
        return response.status(401).json({
            error: "Não Autorizado",
        });
    }
}
