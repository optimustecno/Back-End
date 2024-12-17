import { Request, Response } from "express";
import { ServiceListaClientes } from "../../services/ServiceCliente";

class ControleListaClientes {
    async handle(request: Request, response: Response) {
        var { opt_bloqueado, opt_nome_sistema, opt_nome_cliente, opt_doc1 } = request.query;

        const consultacli = new ServiceListaClientes();

        if (!opt_bloqueado){
            opt_bloqueado = "";
        }
        if (!opt_nome_sistema){
            opt_nome_sistema = "";
        }
        if (!opt_nome_cliente){
            opt_nome_cliente = "";
        }
        if (!opt_doc1){
            opt_doc1 = "";
        }

        const clientes = await consultacli.execute({
            opt_bloqueado,
            opt_nome_sistema,
            opt_nome_cliente,
            opt_doc1
        });

        return response.json(clientes);
    }
}

export { ControleListaClientes };
