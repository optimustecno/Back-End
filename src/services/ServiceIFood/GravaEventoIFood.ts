import { iEvent } from "./interfaces";
import { getCustomRepository } from "typeorm";
import { PedidoRep } from "../../repositories/PedidoRep";

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
        const ped = await pedidoRep.findOne({
            where: {
                opt_pedido_app: orderId,
            },
        });
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

        // return response.status(200).json({ Message: "OK" });

        return "";
    }
}

export { ServiceCriaEvento };
