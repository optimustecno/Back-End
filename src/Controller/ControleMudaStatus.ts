import { Request, Response } from "express";
import { ExecuteSQL } from "../../BancoSql";
import { ServiceConsultaProxStatus } from "../services/ServiceProxStatus";

class ControleMudancaStatus {
    async handle(request: Request, response: Response) {

        const consultaPed = new ServiceConsultaProxStatus();

        const fetch = require("node-fetch");

        const peds = await consultaPed.execute();

        const cEnd = process.env.API_ACCON;

        var atualizouTudo = "S";

        peds.forEach(async ped => {

            if (ped.app === "UAI RANGO") {
                if (ped.novo_status === "7") {
                    var motivo = JSON.stringify({
                        "motivo": "Pedido cancelado. Caso necessário entre em contato com o estabelecimento."
                    })
                    var requestOptionsUai = {
                        method: 'POST',
                        headers: {
                            "Authorization": `Bearer ${process.env.TOKEN_UAI_RANGO}`,
                            "Content-Type": "application/json"
                        },
                        body: motivo
                    };
                    var UaiResponse = await fetch(`https://www.uairango.com/api2/auth/pedido/cancela/${ped.opt_pedido_app}`, requestOptionsUai);
                    if (UaiResponse.status === 200) {
                        var AtualizaStatus = await ExecuteSQL(
                            `UPDATE opt_ped_app SET status = '${ped.novo_status}'
                            WHERE opt_pedido_app = ?`, ped.opt_pedido_app
                        )
                    }
                }
                else {
                    var AtualizaStatus = await ExecuteSQL(
                        `UPDATE opt_ped_app SET status = '${ped.novo_status}'
                        WHERE opt_pedido_app = ?`, ped.opt_pedido_app
                    )
                }

            }
            else if (ped.app === "ACCON") {
                var requestOptions = {
                    method: 'POST',
                    headers: {
                        "Authorization": `Bearer ${ped.token}`,
                        "X-NETWORK-ID": ped.rede
                    }
                };
                if (ped.novo_status === "7") {
                    var AcconResponse = await fetch(`${cEnd}/order/${ped.opt_pedido_app}/next?cancel=true`, requestOptions);
                }
                else {
                    var AcconResponse = await fetch(`${cEnd}/order/${ped.opt_pedido_app}/next`, requestOptions);
                }
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