import { Request, Response } from "express";
//import { ExecuteSQL } from "../../../BancoSql";
import { getCustomRepository } from "typeorm";
import { ServiceCriaReqs } from "../../services/ServiceCliente";
import { ServiceAtualizaRequests } from "../../services/ServiceCliente";
import { RequestClientesRep } from "../../repositories/RequestClientesRep";

class ControleAtualizaQuantRequest {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, data, quantidade } = request.body;
        //
        console.log(`Adicionando ${quantidade} Requests CodCli: ${opt_cod_cliente}`);
        //
        const requestClientesRep = getCustomRepository(RequestClientesRep);

        try {
            const cliRequest = await requestClientesRep.find({
                opt_cod_cliente: opt_cod_cliente,
                data: data,
            });
            if (!cliRequest) {
                const CriaReqs = new ServiceCriaReqs();
                const clienteGrava = await CriaReqs.execute({
                    opt_cod_cliente,
                    data,
                    quantidade,
                });
                // const atualizaNovoStatus = await ExecuteSQL(
                //     `INSERT INTO opt_cli_request SET opt_cod_cliente = '${opt_cod_cliente}',
                //     data = '${data}',
                //     quantidade = ?`, quantidade
                // )
            } else {
                const updateReq = new ServiceAtualizaRequests();
                // const atualizaNovoStatus = await ExecuteSQL(
                //     `UPDATE opt_cli_request SET quantidade = (quantidade + ${quantidade})
                //     WHERE data = '${data}' AND
                //     opt_cod_cliente = ?`, opt_cod_cliente
                // )
                // const atualizaNovoStatus = await requestClientesRep.update(
                //     { opt_cod_cliente, data },
                //     { quantidade: () => `quantidade + ${quantidade}` }
                // );
                const clienteGrava = await updateReq.execute({
                    opt_cod_cliente,
                    data,
                    quantidade,
                });
            }
            return response.json({
                message: "OK",
            });
        } catch (error) {
            return response.json({
                message: "ERRO",
            });
        }
    }
}

export { ControleAtualizaQuantRequest };
