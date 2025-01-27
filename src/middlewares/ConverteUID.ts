import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../repositories/ClienteRep";
import { Request, Response, NextFunction } from "express";

export async function ConverteUID(request: Request, response: Response, next: NextFunction) {
    const { codigo } = request.params;

    const ClienteRep = getCustomRepository(ClientesRep);

    if (!codigo) {
        console.log(`UID Não Informado`)
        return response.status(401).json({
            error: "Cliente Não Informado",
        });
    }

    try {
        const cliente = await ClienteRep.findOne({ opt_uid_cli: codigo });

        if (cliente) {
            request.opt_cod_cliente = cliente.opt_cod_cliente;
            return next();
        }
        else {
            throw new Error("Cliente Não Encontrado!");
        }
    } catch (error) {
        console.log(`Erro Inesperado Cliente Não Retornado ${codigo} - ${error}`)
        return response.status(401).json({
            error: "Cliente Não Encontrado!",
        });
    }
}
