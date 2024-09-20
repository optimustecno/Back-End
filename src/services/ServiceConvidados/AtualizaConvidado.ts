import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iConvidado {
    opt_seq_convidado: string;
    opt_nome_convidado: string;
    opt_email_convidado: string;
    opt_fone_convidado: string;
    opt_finalidade: string;
}

class ServiceUpdateConvidado {
    async execute({
        opt_seq_convidado,
        opt_nome_convidado,
        opt_email_convidado,
        opt_fone_convidado,
        opt_finalidade,
    }: iConvidado) {
        const guestRep = getCustomRepository(ConvidadosRep);

        if (!opt_seq_convidado) {
            throw new Error("Código do Cliente Não Informado");
        }

        const _guest = await guestRep.update(
            { opt_seq_convidado: opt_seq_convidado },
            {
                opt_nome_convidado,
                opt_email_convidado,
                opt_fone_convidado,
                opt_finalidade,
            }
        );

        return {
            opt_seq_convidado,
            opt_nome_convidado,
            opt_email_convidado,
            opt_fone_convidado,
            opt_finalidade,
        };
    }
}

export { ServiceUpdateConvidado };
