import { Request, Response } from "express";
import { GravaGruposDev } from "../../services/ServiceCardapioDev";

class ControleCriaGrupo {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, cod_grupo, nome_grupo, aceita_meio_a_meio, preco, ordem, exibir } =
            request.body;

        const criaGrupo = new GravaGruposDev();

        const grupoGrava = await criaGrupo.execute({
            opt_cod_cliente,
            cod_grupo,
            nome_grupo,
            aceita_meio_a_meio,
            preco,
            ordem,
            exibir,
        });

        return response.json(grupoGrava);
    }
}

export { ControleCriaGrupo };
