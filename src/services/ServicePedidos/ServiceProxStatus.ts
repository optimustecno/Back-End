import { getCustomRepository } from "typeorm";
import { ProxStatusRep } from "../../repositories/ProxStatusRep";

class ServiceConsultaProxStatus {

    async execute() {
        const pedidoRep = getCustomRepository(ProxStatusRep);

        const PedidosProxStatus = await pedidoRep.find({

        });

        if (!PedidosProxStatus) {
            throw new Error("Nenhum Pedido Para Ser Atualizado!")
        }

        return PedidosProxStatus
    }
}

export { ServiceConsultaProxStatus }