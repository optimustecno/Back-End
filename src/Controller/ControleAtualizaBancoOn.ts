import { Request, Response } from "express";
import { ServiceInformaBancoOn } from "../services/ServiceCliente";

class ControleUpdateBancoOn {
    async handle(request: Request, response: Response) {
        const {
            opt_cod_cliente,
            opt_dns,
            opt_banco,
            opt_user,
            opt_password,
            opt_odbc,
        } = request.body;

        const updateCli = new ServiceInformaBancoOn();

        const clienteGrava = await updateCli.execute({
            opt_cod_cliente,
            opt_dns,
            opt_banco,
            opt_user,
            opt_password,
            opt_odbc,
        });

        return response.json(clienteGrava);
    }
}

export { ControleUpdateBancoOn };
