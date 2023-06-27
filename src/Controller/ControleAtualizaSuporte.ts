import { Request, Response } from "express";
import { ServiceAtualizaSuporte } from "../services/ServiceSuporte";

class ControleUpdateSuporte {
    async handle(request: Request, response: Response) {
        const {
            seq,
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
        } = request.body;

        const updateSuporte = new ServiceAtualizaSuporte();

        const suporteGrava = await updateSuporte.execute({
            seq,
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
        });

        return response.json(suporteGrava);
    }
}

export { ControleUpdateSuporte };
