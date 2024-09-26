import { Request, Response } from "express";
import { ConsultaProdutosDev } from "../../services/ServiceCardapioDev";

class ControleBuscaProdutosDev {
    async handle(request: Request, response: Response) {
        const { cod_grupo } = request.params;
        const codigo_Cli = request.opt_cod_cliente;
        const ConsProdutos = new ConsultaProdutosDev();

        const produtos = await ConsProdutos.execute({opt_cod_cliente: codigo_Cli, cod_grupo});

        return response.json(produtos);
    }
}

export { ControleBuscaProdutosDev };
