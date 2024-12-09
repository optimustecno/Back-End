import { Request, Response } from "express";
import { GravaLinkGruposAdd } from "../../services/ServiceCardapioDev";

class ControleCriaLinkGrupoAdd {
    async handle(request: Request, response: Response) {
        const {
            opt_cod_cliente,
            opt_grupo_produto,
            opt_grupo_adicional,
            opt_exibir,
            nome_grupo_prod,
            nome_grupo_adicional,
            id_cliente
        } = request.body;

        const criaGrupo = new GravaLinkGruposAdd();

        const grupoGrava = await criaGrupo.execute({
            opt_cod_cliente,
            opt_grupo_produto,
            opt_grupo_adicional,
            opt_exibir,
            id_cliente,
            nome_grupo_prod,
            nome_grupo_adicional,
        });

        return response.json(grupoGrava);
    }
}

export { ControleCriaLinkGrupoAdd };
