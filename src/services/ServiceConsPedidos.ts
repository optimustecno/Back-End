import { getCustomRepository } from "typeorm";
import { PedidoRep } from "../repositories/PedidoRep";

interface iClientePedidos {
    codigo_Cli: string;
}

class ServiceConsultaPedidos {

    async execute({ codigo_Cli }: iClientePedidos) {

        const pedidoRep = getCustomRepository(PedidoRep);

        const PedidosPendentes = await pedidoRep.find({
            opt_cod_cliente: codigo_Cli,
            status: "0"
        });

        if (!PedidosPendentes) {
            throw new Error("Nenhum Pedido Para Ser Importado!")
        }

        //console.log(PedidosPendentes)

        return PedidosPendentes
    }
}

export { ServiceConsultaPedidos }