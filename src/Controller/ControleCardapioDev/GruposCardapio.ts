import { Request, Response } from "express";
import { ConsultaGruposDev } from "../../services/ServiceCardapioDev";

class ControleBuscaGruposProdutosDev {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.opt_cod_cliente;
        const { inclui_produtos, grupos_ativos } = request.query;
        const ConsGrupos = new ConsultaGruposDev();
        let bInclui = false
        if (!inclui_produtos){
            bInclui = false
        } else {
            switch (inclui_produtos) {
                case "0":
                case "false":
                case "False":
                    bInclui = false
                    break;
                default:
                bInclui = true
                break;
            }
        }
        const Grupos = await ConsGrupos.execute({
            opt_cod_cliente: codigo_Cli,
            inclui_produtos: bInclui,
            grupos_ativos: grupos_ativos,
            id_cliente: request.id_cliente
        });

        return response.json(Grupos);
    }
}

export { ControleBuscaGruposProdutosDev };
