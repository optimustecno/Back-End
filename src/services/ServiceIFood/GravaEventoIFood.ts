import { iEvent } from "./interfaces";
import { getCustomRepository } from "typeorm";
import { PedidoRep } from "../../repositories/PedidoRep";
import { Espera } from "../../utils/functions";
import { ConverteEvento } from "../../utils/DefineTipoEvento";

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
        let dData = new Date(createdAt);
        dData.setHours(dData.getHours() - 3);
        let data = dData.toISOString();
        let cont = 0;
        let pedidoRep = getCustomRepository(PedidoRep);
        let ped = await pedidoRep.findOne({
            where: {
                opt_pedido_app: orderId,
            },
        });
        console.log(`Pedido IFood ${orderId}`);
        let status = ConverteEvento(fullCode);
        if (!ped) {
            cont = cont + 1;
            // console.log(data)
            let pedidoIfood = pedidoRep.create({
                opt_cod_cliente: opt_cod_cliente,
                opt_cod_app: opt_cod_app,
                opt_pedido_app: orderId,
                ordem: cont.toString(),
                hora: data.split("T")[1].substring(0, 5),
                data: data.split("T")[0],
                status,
                novo_status: status,
            });
            await pedidoRep.save(pedidoIfood);
        } else {
            if (status ===""){
                status = ped.status;
            }
            let pedidoIfood = await pedidoRep.update(
                { opt_pedido_app: orderId },
                {
                    status,
                    novo_status: status,
                }
            );
        }
        Espera(150);
        ped = await pedidoRep.findOne({
            where: {
                opt_pedido_app: orderId,
            },
        });
        // console.log(ped)
        return ped;

        // return "";
    }
}

export { ServiceCriaEvento };
