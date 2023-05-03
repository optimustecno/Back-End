import { Request, Response } from "express";
import { ServiceWabizCliente } from "../services/ServiceCliente";

class ControleCredWabiz {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.params.codigo;

        const consultacli = new ServiceWabizCliente();

        const credWabiz = await consultacli.execute({
            opt_cod_cliente: codigo_Cli,
        });

        return response.json(credWabiz);
    }
}

export { ControleCredWabiz };
