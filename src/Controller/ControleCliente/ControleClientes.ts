import { Request, Response } from "express";
import { ServiceListaClientes } from "../../services/ServiceCliente";

class ControleListaClientes {
    async handle(request: Request, response: Response) {
        var opt_bloqueado = request.query.opt_bloqueado;
        var opt_nome_sistema = request.query.opt_nome_sistema;

        const consultacli = new ServiceListaClientes();

        const clientes = await consultacli.execute({
            opt_bloqueado,
            opt_nome_sistema,
        });

        return response.json(clientes);
    }
}

export { ControleListaClientes };
