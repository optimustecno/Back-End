import { Request, Response } from "express";
import { ConsultaGruposDev } from "../../services/ServiceCardapioDev";

class ControleBuscaGruposProdutosDev {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.opt_cod_cliente;
        const { inclui_produtos } = request.query;
        const ConsGrupos = new ConsultaGruposDev();

        const Grupos = await ConsGrupos.execute({
            opt_cod_cliente: codigo_Cli,
            inclui_produtos: Boolean(inclui_produtos),
        });

        return response.json(Grupos);
    }
}

export { ControleBuscaGruposProdutosDev };
