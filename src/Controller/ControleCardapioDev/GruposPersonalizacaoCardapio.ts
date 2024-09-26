import { Request, Response } from "express";
import { ConsultaGruposPersonalizacaoDev } from "../../services/ServiceCardapioDev";

class ControleGrupoPersonalizacaoDev {
    async handle(request: Request, response: Response) {
        const { cod_grupo } = request.params;
        const codigo_Cli = request.opt_cod_cliente;
        const ConsPersonalizacao = new ConsultaGruposPersonalizacaoDev();

        const produtos = await ConsPersonalizacao.execute({
            opt_cod_cliente: codigo_Cli,
            cod_grupo,
        });

        return response.json(produtos);
    }
}

export { ControleGrupoPersonalizacaoDev };
