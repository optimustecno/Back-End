import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iConv {
    opt_seq_convidado: any;
}

class ServiceConsConvidado {
    async execute({ opt_seq_convidado }: iConv) {
        const guestRep = getCustomRepository(ConvidadosRep);

        const Guests = await guestRep.findOne({
            opt_seq_convidado,
        });

        if (!Guests) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return Guests;
    }
}

export { ServiceConsConvidado };
