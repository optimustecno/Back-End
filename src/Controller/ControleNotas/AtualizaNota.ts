import { Request, Response } from "express";
import { ServiceAtualizaNota } from "../../services/ServiceNotasVersao";

class ControleUpdateNota {
    async handle(request: Request, response: Response) {
        const {
            seq,
            opt_codigo_desenvolvedor,
            opt_codigo_tester,
            opt_status,
            opt_sistema,
            opt_versao,
            opt_descricao,
            opt_observacao,
            opt_aprovado,
            opt_lancamento,
        } = request.body;

        const updateNota = new ServiceAtualizaNota();

        const notaGrava = await updateNota.execute({
            seq,
            opt_codigo_desenvolvedor,
            opt_codigo_tester,
            opt_status,
            opt_sistema,
            opt_versao,
            opt_descricao,
            opt_observacao,
            opt_aprovado,
            opt_lancamento,
        });

        return response.json(notaGrava);
    }
}

export { ControleUpdateNota };
