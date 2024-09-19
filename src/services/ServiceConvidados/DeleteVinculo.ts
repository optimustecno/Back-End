import { getCustomRepository } from "typeorm";
import { ConvidadosClientesRep } from "../../repositories/ConvidadosCliRep";

interface iConvidado {
    opt_seq_convidado: any;
    opt_cod_cliente: any;
}

class ServiceDeleteVinculo {
    async execute({ opt_seq_convidado, opt_cod_cliente }: iConvidado) {
        const guestRep = getCustomRepository(ConvidadosClientesRep);

        const Guest = await guestRep.delete({ opt_seq_convidado, opt_cod_cliente });

        return {
            message: "Vinculo Removido",
        };
    }
}

export { ServiceDeleteVinculo };
