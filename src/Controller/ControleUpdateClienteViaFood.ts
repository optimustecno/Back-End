import { Request, Response } from "express";
import { ServiceUpdateViaFood } from "../services/ServiceCliente";

class ControleUpdateClienteViaFood {
    async handle(request: Request, response: Response) {
        const {
            opt_cod_cliente,
            sistema,
            opt_ultimo_acesso,
            opt_versao,
            opt_versao_adm,
        } = request.body;

        const updateCli = new ServiceUpdateViaFood();

        const clienteGrava = await updateCli.execute({
            opt_cod_cliente,
            sistema,
            opt_ultimo_acesso,
            opt_versao,
            opt_versao_adm,
        });

        return response.json(clienteGrava);
    }
}

export { ControleUpdateClienteViaFood };
