import { Request, Response } from "express";
import { ServiceCriaSuporte } from "../../services/ServiceSuporte";
import { removeEmojis } from "../../utils/functions";

class ControleCriaSuporte {
    async handle(request: Request, response: Response) {
        const {
            data,
            hora,
            opt_cod_cliente,
            status,
            prioridade,
            atendente,
            titulo,
            descricao,
            contato,
            resolucao,
            cod_setor,
            canal_atendimento,
        } = request.body;

        const TrataEmojis = new removeEmojis();
        const criaSuporte = new ServiceCriaSuporte();

        var cDescricao = await TrataEmojis.execute({ textoRep: descricao });
        var cResolucao = await TrataEmojis.execute({ textoRep: resolucao });

        const suporteGrava = await criaSuporte.execute({
            data,
            hora,
            opt_cod_cliente,
            status,
            prioridade,
            atendente,
            titulo,
            descricao: cDescricao.trim(),
            contato,
            resolucao: cResolucao.trim(),
            cod_setor,
            canal_atendimento,
        });

        return response.json(suporteGrava);
    }
}

export { ControleCriaSuporte };
