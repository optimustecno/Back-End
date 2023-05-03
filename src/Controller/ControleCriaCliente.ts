import { Request, Response } from "express";
import { ServiceCriaCliente } from "../services/ServiceCliente";

class ControleCriaCliente {
    async handle(request: Request, response: Response) {
        const {
            opt_nome_cliente,
            opt_endereco,
            opt_bairro,
            opt_cep,
            opt_cidade,
            opt_uf,
            opt_doc1,
            opt_doc2,
        } = request.body;

        const criaCli = new ServiceCriaCliente();

        const clienteGrava = await criaCli.execute({
            opt_nome_cliente,
            opt_endereco,
            opt_bairro,
            opt_cep,
            opt_cidade,
            opt_uf,
            opt_doc1,
            opt_doc2,
        });

        return response.json(clienteGrava);
    }
}

export { ControleCriaCliente };
