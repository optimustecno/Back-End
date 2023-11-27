import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { ExecuteSQL } from "../../../BancoSql";
import { AppRep } from "../../repositories/AppRep";
import { PedidoRep } from "../../repositories/PedidoRep"


class ControleUpdateStatus {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente,
            opt_chave_ped,
            app,
            novo_status
        } = request.body;
        //
        console.log(`Pedido At. ${opt_chave_ped} Status: ${novo_status} CodCli: ${opt_cod_cliente}`)
        //
        if (app === "ACCON") {
            const atualizaNovoStatus = await ExecuteSQL(
                `UPDATE opt_ped_app SET novo_status = '${novo_status}'
                WHERE opt_pedido_app = '${opt_chave_ped}'
                AND opt_cod_cliente = ?`, opt_cod_cliente
            )
        }
        else {
            var pedidoRep = getCustomRepository(PedidoRep);
            const ped = await pedidoRep.findOne({
                where: {
                    opt_pedido_app: opt_chave_ped
                }
            })
            if (!ped) {

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
                var UaiResponse = await fetch(`https://www.uairango.com/api2/auth/pedido/${opt_chave_ped}`, requestOptionsUai);
                var UaiResponseJson = await UaiResponse.json();
                // COLETANDO DADOS DO ESTABELECIMENTO
                const apps = getCustomRepository(AppRep);
                const app = await apps.findOne({
                    where: {
                        token: UaiResponseJson.id_estabelecimento
                    }
                })

                if (!app) {
                    throw new Error("Estabelecimento não encontrado");
                }
                else {
                    var cNovoStatus = "";
                    var cStatus = "";
                    if (novo_status === "7") {
                        cNovoStatus = "7";
                        cStatus = "1";
                    }
                    else {
                        cNovoStatus = novo_status;
                        cStatus = novo_status;
                    }
                    var pedidoUai = pedidoRep.create({
                        opt_cod_cliente: opt_cod_cliente,
                        opt_cod_app: app.seq,
                        opt_pedido_app: opt_chave_ped,
                        ordem: '1',
                        hora: UaiResponseJson.data.split(" ")[1].substring(0, 5),
                        data: UaiResponseJson.data.split(" ")[0],
                        status: cStatus,
                        novo_status: cNovoStatus,
                    })
                    await pedidoRep.save(pedidoUai)
                }
            }
            else {

                if (novo_status === "7") {
                    const atualizaStatus = await ExecuteSQL(
                        `UPDATE opt_ped_app SET novo_status = '${novo_status}' 
                            WHERE opt_pedido_app = '${opt_chave_ped}'
                            AND opt_cod_cliente = ?`, opt_cod_cliente)
                }
                else {
                    const atualizaStatus = await ExecuteSQL(
                        `UPDATE opt_ped_app SET novo_status = '${novo_status}', 
                            status = '${novo_status}'
                            WHERE opt_pedido_app = '${opt_chave_ped}'
                            AND opt_cod_cliente = ?`, opt_cod_cliente)
                }
            }
        }
        return response.json({
            message: "Atualizados"
        })
    }
}

export { ControleUpdateStatus }