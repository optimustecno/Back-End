import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";
import { ServiceApiKey } from "./ServiceApiKey";

interface iConvidado {
    opt_seq_convidado: string;
    opt_aprovado: string;
}

class ServiceLiberaConvidado {
    async execute({
        opt_seq_convidado,
        opt_aprovado,
    }: iConvidado) {
        const guestRep = getCustomRepository(ConvidadosRep);

        if (!opt_seq_convidado) {
            throw new Error("Código do Cliente Não Informado");
        }

        const _guest = await guestRep.update(
            { opt_seq_convidado: opt_seq_convidado },
            {
                opt_aprovado,
            }
        );

        const geraApiKey = new ServiceApiKey();

        const apiKey = await geraApiKey.execute({
            opt_seq_convidado
        });

        return {
            opt_seq_convidado,
            opt_aprovado,
        };
    }
}

export { ServiceLiberaConvidado };
