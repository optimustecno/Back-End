import { Request, Response } from "express";
import { ServiceQuitaFinanceiro } from "../../services/ServiceFinanceiro";

class ControleInformaPagamento {
    async handle(request: Request, response: Response) {
        const {
            seq,
            data_pagamento,
        } = request.body;

        const atualizaFinanceiro = new ServiceQuitaFinanceiro();

        const finGrava = await atualizaFinanceiro.execute({
            seq,
            data_pagamento,
        });

        return response.json(finGrava);
    }
}

export { ControleInformaPagamento };
