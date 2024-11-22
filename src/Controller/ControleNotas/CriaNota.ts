import { Request, Response } from "express";
import { ServiceCriaNota } from "../../services/ServiceNotasVersao";
import { removeEmojis } from "../../utils/functions";

class ControleCriaNota {
    async handle(request: Request, response: Response) {
        const {
            opt_codigo_desenvolvedor,
            opt_sistema,
            opt_versao,
            opt_descricao,
            opt_observacao,
        } = request.body;

        const TrataEmojis = new removeEmojis();
        const criaNota = new ServiceCriaNota();

        var cDescricao = await TrataEmojis.execute({ textoRep: opt_descricao });
        var cResolucao = await TrataEmojis.execute({ textoRep: opt_observacao });

        const notaGrava = await criaNota.execute({
            opt_codigo_desenvolvedor,
            opt_sistema,
            opt_versao,
            opt_descricao,
            opt_observacao,
        });

        return response.json(notaGrava);
    }
}

export { ControleCriaNota };
