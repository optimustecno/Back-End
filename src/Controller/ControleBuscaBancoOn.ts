import { Request, Response } from "express";
import { ServiceBancoOn } from "../services/ServiceCliente";

class ControleBancoOn {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.params.codigo;

        const consultacli = new ServiceBancoOn();

        const bancoOn = await consultacli.execute({
            opt_cod_cliente: codigo_Cli,
        });

        return response.json(bancoOn);
    }
}

export { ControleBancoOn };
