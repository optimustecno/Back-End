import { getCustomRepository } from "typeorm";
import { ConvidadosClientesRep } from "../../repositories/ConvidadosCliRep";

interface iUpdateSenha {
    opt_seq_convidado: string;
    opt_cod_cliente: string;
    aprov: string;
}

class ServiceAprovaVinculo {
    async execute({ opt_seq_convidado, opt_cod_cliente, aprov }: iUpdateSenha) {
        const vinculos = getCustomRepository(ConvidadosClientesRep);
        //usuario ok?
        const vinculo = await vinculos.findOne({
            opt_seq_convidado,
            opt_cod_cliente,
        });
        if (!vinculo) {
            throw new Error("Vinculo não encontrado");
        }

        const _vinculo = await vinculos.update(
            { opt_seq_convidado: opt_seq_convidado, opt_cod_cliente: opt_cod_cliente },
            { aprov: aprov }
        );

        return {
            message: `Vinculo Atualizado`,
        };
    }
}

export { ServiceAprovaVinculo };
