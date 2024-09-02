import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iConvidado {
    opt_seq_convidado: string;
}

class ServiceDeleteConvidado {
    async execute({ opt_seq_convidado }: iConvidado) {
        const guestRep = getCustomRepository(ConvidadosRep);

        const Guest = await guestRep.delete({ opt_seq_convidado });

        return {
            message: "Convidado Removido",
        };
    }
}

export { ServiceDeleteConvidado };
