import { getCustomRepository } from "typeorm";
import { PedidoRep } from "../../repositories/PedidoRep";

interface iNovoStatus {
    opt_cod_cliente: string;
    opt_chave_ped: string;
    novo_status: string;
    status: boolean;
}

class ServiceAtualizaStatusPorChave {
    async execute({ opt_cod_cliente, opt_chave_ped, novo_status, status }: iNovoStatus) {
        const pedidoRep = getCustomRepository(PedidoRep);

        if (!status) {
            const atualizaNovoStatus = await pedidoRep.update(
                { opt_pedido_app: opt_chave_ped, opt_cod_cliente },
                { novo_status: novo_status }
            );
        } else {
            const atualizaNovoStatusEStatus = await pedidoRep.update(
                { opt_pedido_app: opt_chave_ped, opt_cod_cliente },
                { novo_status: novo_status, status: novo_status }
            );
        }

        return {
            novo_status,
        };
    }
}

export { ServiceAtualizaStatusPorChave };
