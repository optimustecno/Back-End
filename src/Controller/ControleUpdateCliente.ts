import { Request, Response } from "express";
import { ServiceAtualizaCliente } from "../services/ServiceCliente";

class ControleUpdateCliente {
    async handle(request: Request, response: Response) {
        const {
            opt_cod_cliente,
            opt_nome_cliente,
            opt_endereco,
            opt_bairro,
            opt_cep,
            opt_cidade,
            opt_uf,
            opt_doc1,
            opt_doc2,
        } = request.body;

        const updateCli = new ServiceAtualizaCliente();

        const clienteGrava = await updateCli.execute({
            opt_cod_cliente,
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

export { ControleUpdateCliente };
