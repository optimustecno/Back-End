import { Request, Response } from "express";
import { GravaGruposAddDev } from "../../services/ServiceCardapioDev";

class ControleCriaGrupoAdd {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente,cod_grupo,nome,exibir, id_cliente } = request.body;

        const criaGrupo = new GravaGruposAddDev();

        const grupoGrava = await criaGrupo.execute({
            opt_cod_cliente,
            cod_grupo,
            nome,
            exibir,
            id_cliente
        });

        return response.json(grupoGrava);
    }
}

export { ControleCriaGrupoAdd };
