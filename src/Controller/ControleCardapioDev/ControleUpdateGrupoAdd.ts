import { Request, Response } from "express";
import { UpdateGrupoAdd } from "../../services/ServiceCardapioDev";

class ControleUpdateGrupoAdd {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, cod_grupo, nome, cod_grupo_adicional, exibir, seq } =
            request.body;

        const criaGrupo = new UpdateGrupoAdd();

        const grupoGrava = await criaGrupo.execute({
            seq,
            opt_cod_cliente,
            cod_grupo,
            nome,
            cod_grupo_adicional,
            exibir,
        });

        return response.json(grupoGrava);
    }
}

export { ControleUpdateGrupoAdd };