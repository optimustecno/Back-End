import { Request, Response } from "express";
import { ServiceCancelaCli } from "../services/ServiceCliente";

class ControleCancelaCli {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, data_cancelamento } = request.body;

        const updateCli = new ServiceCancelaCli();

        const clienteGrava = await updateCli.execute({
            opt_cod_cliente,
            data_cancelamento,
        });

        return response.json(clienteGrava);
    }
}

export { ControleCancelaCli };
