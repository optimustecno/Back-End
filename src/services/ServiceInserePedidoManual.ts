import { getCustomRepository } from "typeorm";
import { AppRep } from "../repositories/AppRep";
import { PedidoRep } from "../repositories/PedidoRep"

interface iPedRequest { cod_pedido: string };

class ServiceInserePedidoManual {
    async execute({ cod_pedido }: iPedRequest) {
        const fetch = require("node-fetch");
        //
        // Consultando na UAI RANGO se o pedido ainda está pendente
        var requestOptionsUai = {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.TOKEN_UAI_RANGO}`,
                "Content-Type": "application/json"
            },
        };
        var UaiResponse = await fetch(`https://www.uairango.com/api2/auth/pedido/${cod_pedido}`, requestOptionsUai);
        var UaiResponseJson = await UaiResponse.json();
        var PedPend = UaiResponseJson.status.status
        if (PedPend === "Pendente") {
            const apps = getCustomRepository(AppRep);
            const app = await apps.findOne({
                where: {
                    token: UaiResponseJson.id_estabelecimento
                }
            })

            if (!app) {
                throw new Error("Estabelecimento não encontrado");
            }
            var cont = 0;
            var pedidoRep = getCustomRepository(PedidoRep);
            const ped = await pedidoRep.findOne({
                where: {
                    opt_pedido_app: cod_pedido
                }
            })
            if (!ped) {
                cont = cont + 1;
                var pedidoUai = pedidoRep.create({
                    opt_cod_cliente: app.opt_cod_cliente,
                    opt_cod_app: app.seq,
                    opt_pedido_app: cod_pedido,
                    ordem: cont.toString(),
                    hora: UaiResponseJson.data.split(" ")[1].substring(0, 5),
                    data: UaiResponseJson.data.split(" ")[0],
                    status: "0",
                    novo_status: "0",
                })
                await pedidoRep.save(pedidoUai)
            }
            else {

                throw new Error("Pedido Já Inserido no banco On-Line");
            }
            //   }); // FECHANDO FOR PEDIDOS
            return "OK";
        }
        else {
            throw new Error(`Pedido Já ${PedPend}`);
        }
    }
}

export { ServiceInserePedidoManual }