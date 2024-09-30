import { getCustomRepository, LessThan } from "typeorm";
import { PedidoRep } from "../../repositories/PedidoRep";

interface iFinaliza {
    data: string;
}

class ServiceFinalizaPedidos {
    async execute({ data }: iFinaliza) {
        const pedidoRep = getCustomRepository(PedidoRep);

        var finalizaPedidos;

        finalizaPedidos = await pedidoRep.update(
            { data: LessThan (data), novo_status: "1" },
            { status: '6', novo_status: '6' }
        );
        finalizaPedidos = await pedidoRep.update(
            { data: LessThan (data), novo_status: "0" },
            { status: '9', novo_status: '9' }
        );
        finalizaPedidos = await pedidoRep.update(
            { data: LessThan (data), novo_status: "7", status: "0" },
            { status: '7', novo_status: '7' }
        );
        finalizaPedidos = await pedidoRep.update(
            { data: LessThan (data), novo_status: "7", status: "1" },
            { status: '7', novo_status: '7' }
        );
        return {
            message: "Pedidos Finalizados",
        };
    }
}

export { ServiceFinalizaPedidos };
