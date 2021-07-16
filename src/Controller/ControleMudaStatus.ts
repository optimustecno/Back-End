import { Request, Response } from "express";
import { ExecuteSQL } from "../../BancoSql";
import { ServiceConsultaProxStatus } from "../services/ServiceConsPedidos";

class ControleMudancaStatus {
    async handle(request: Request, response: Response) {

        const consultaPed = new ServiceConsultaProxStatus();

        const fetch = require("node-fetch");

        const peds = await consultaPed.execute();

        const cEnd = process.env.API_ACCON;

        var atualizouTudo = "S";

        peds.forEach(async ped => {
            var requestOptions = {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${ped.token}`,
                    "X-NETWORK-ID": ped.rede
                }
            };
            var AcconResponse = await fetch(`${cEnd}/order/${ped.opt_pedido_app}/next`, requestOptions);
            //var AcconResponseJson = await AcconResponse.json();
            switch (AcconResponse.status) {
                case 204:
                    var AtualizaStatus = await ExecuteSQL(
                        `UPDATE opt_ped_app SET status = '${ped.novo_status}'
                        WHERE opt_pedido_app = ?`, ped.opt_pedido_app
                    )
                    break;
                default:
                    atualizouTudo = "N"
                    break;
            }
        });
        if (atualizouTudo === "S") {
            return response.json({
                message: "Pedidos Atualizados"
            })
        }
        else {
            return response.json({
                message: "Nem Todos os Pedidos Foram Atualizados"
            })
        }
    }
}
export { ControleMudancaStatus }