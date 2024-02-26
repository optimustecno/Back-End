import { Request, Response } from "express";
import { ConsultaGrupos } from "../../services/ServiceCardapio";

class ControleBuscaGruposProdutos {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.params.codigo;
        
        const ConsGrupos = new ConsultaGrupos();

        const Grupos = await ConsGrupos.execute({opt_cod_cliente: codigo_Cli});

        return response.json(Grupos);
    }
}

export { ControleBuscaGruposProdutos };
