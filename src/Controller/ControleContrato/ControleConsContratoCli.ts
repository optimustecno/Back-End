import { Request, Response } from "express";
import { ServiceContratosCliente } from "../../services/ServiceContratos";

class ControleConsContratosCli {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente } = request.params;

        const ContratosCli = new ServiceContratosCliente();

        const contCliente = await ContratosCli.execute({
            opt_cod_cliente,
        });

        return response.json(contCliente);
    }
}

export { ControleConsContratosCli };
