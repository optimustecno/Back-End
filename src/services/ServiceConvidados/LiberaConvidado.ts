import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

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

        return {
            opt_seq_convidado,
            opt_aprovado,
        };
    }
}

export { ServiceLiberaConvidado };
