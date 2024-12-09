import { Request, Response } from "express";
import { ConsultaGruposPersonalizacaoDev } from "../../services/ServiceCardapioDev";

class ControleGrupoPersonalizacaoDev {
    async handle(request: Request, response: Response) {
        const {id_cliente} = request;
        const codigo_Cli = request.opt_cod_cliente;
        const ConsPersonalizacao = new ConsultaGruposPersonalizacaoDev();

        const produtos = await ConsPersonalizacao.execute({
            cod_cliente: codigo_Cli,
            id_cliente
        });

        return response.json(produtos);
    }
}

export { ControleGrupoPersonalizacaoDev };
