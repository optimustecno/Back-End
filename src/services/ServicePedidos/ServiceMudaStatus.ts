import { getCustomRepository } from "typeorm";
import { PedidoRep } from "../../repositories/PedidoRep";

interface iNovoStatus {
    opt_pedido_app: string;
    novo_status: string;
}

class ServiceAtualizaStatus {
    async execute({ opt_pedido_app, novo_status }: iNovoStatus) {
        const pedidoRep = getCustomRepository(PedidoRep);

        const atualizaNovoStatus = await pedidoRep.update(
            { opt_pedido_app },
            { status: novo_status }
        );

        return {
            novo_status,
        };
    }
}

export { ServiceAtualizaStatus };
