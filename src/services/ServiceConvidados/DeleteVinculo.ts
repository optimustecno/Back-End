import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";
import { ConvidadosClientesRep } from "../../repositories/ConvidadosCliRep";

interface iConvidado {
    opt_seq_convidado: any;
    opt_uid_cli: any;
}

class ServiceDeleteVinculo {
    async execute({ opt_seq_convidado, opt_uid_cli }: iConvidado) {
        const guestRep = getCustomRepository(ConvidadosClientesRep);

        const ClienteRep = getCustomRepository(ClientesRep);

        const cliente = await ClienteRep.findOne({ opt_uid_cli });

        if (!cliente) {
            throw new Error("Cliente Não Encontrado!");
        }

        const _guest = await guestRep.findOne({
            opt_seq_convidado,
            opt_cod_cliente: cliente.opt_cod_cliente,
        });
        if (!_guest) {
            throw new Error("Vinculo Não Encontrado!");
        }

        const Guest = await guestRep.delete({
            opt_seq_convidado,
            opt_cod_cliente: cliente.opt_cod_cliente,
        });

        return {
            message: "Vinculo Removido",
        };
    }
}

export { ServiceDeleteVinculo };
