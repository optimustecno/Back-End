import { Request, Response } from "express";
import { ServiceAtualizaLicenca } from "../services/ServiceCliente";

class ControleUpdateLicenca {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, opt_bloqueado, opt_mensagem_licenca } =
            request.body;

        const updateCli = new ServiceAtualizaLicenca();

        const clienteGrava = await updateCli.execute({
            opt_cod_cliente,
            opt_bloqueado,
            opt_mensagem_licenca,
        });

        return response.json(clienteGrava);
    }
}

export { ControleUpdateLicenca };
