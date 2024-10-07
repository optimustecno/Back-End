import { Request, Response } from "express";
import { UpdateGrupoDev } from "../../services/ServiceCardapioDev";

class ControleUpdateGrupo {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, cod_grupo, nome_grupo, aceita_meio_a_meio, preco, ordem, exibir, seq } =
            request.body;

        const criaGrupo = new UpdateGrupoDev();

        const grupoGrava = await criaGrupo.execute({
            seq,
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

export { ControleUpdateGrupo };
