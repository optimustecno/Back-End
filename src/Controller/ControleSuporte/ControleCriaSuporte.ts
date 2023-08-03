import { Request, Response } from "express";
import { ServiceCriaSuporte } from "../../services/ServiceSuporte";

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
            canal_atendimento
        } = request.body;

        const criaSuporte = new ServiceCriaSuporte();

        const suporteGrava = await criaSuporte.execute({
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
            canal_atendimento
        });

        return response.json(suporteGrava);
    }
}

export { ControleCriaSuporte };
