import { iEvent } from "./interfaces";
import { getCustomRepository } from "typeorm";
import { PedidoRep } from "../../repositories/PedidoRep";
import { Espera } from "../../utils/functions";

class ServiceCriaEvento {
    async execute({
        code,
        createdAt,
        fullCode,
        merchantId,
        orderId,
        salesChannel,
        opt_cod_cliente,
        opt_cod_app,
    }: iEvent) {
        let data = createdAt;
        let cont = 0;
        let pedidoRep = getCustomRepository(PedidoRep);
        let ped = await pedidoRep.findOne({
            where: {
                opt_pedido_app: orderId,
            },
        });
        console.log(`Pedido ${orderId}`)
        if (!ped) {
            cont = cont + 1;
            let pedidoIfood = pedidoRep.create({
                opt_cod_cliente: opt_cod_cliente,
                opt_cod_app: opt_cod_app,
                opt_pedido_app: orderId,
                ordem: cont.toString(),
                hora: data.split(" ")[1].substring(0, 5),
                data: data.split(" ")[0],
                status: "0",
                novo_status: "0",
            });
            await pedidoRep.save(pedidoIfood);
        }
        Espera(150)
        ped = await pedidoRep.findOne({
            where: {
                opt_pedido_app: orderId,
            },
        });
        return ped;

        // return "";
    }
}

export { ServiceCriaEvento };
