import { Request, Response } from "express";
import { AtualizaUUID } from "../../utils/AtualizaUUIDCli";
import { ServiceConsultaCliente } from "../../services/ServiceCliente";

class ControleConsCliente {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.params.codigo;

        const At = new AtualizaUUID();
        const atualizou = await At.execute({opt_cod_cliente: codigo_Cli});

        const consultacli = new ServiceConsultaCliente();

        const clientes = await consultacli.execute({
            opt_cod_cliente: codigo_Cli,
        });

        return response.json(clientes);
    }
}

export { ControleConsCliente };
