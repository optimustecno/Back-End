import { Request, Response } from "express";
import { ServiceCancelaFinanceiro } from "../../services/ServiceFinanceiro";

class ControleCancelaParcela {
    async handle(request: Request, response: Response) {
        const {
            seq,
            data_pagamento,
        } = request.body;

        const atualizaFinanceiro = new ServiceCancelaFinanceiro();

        const finGrava = await atualizaFinanceiro.execute({
            seq,
            data_pagamento,
        });

        return response.json(finGrava);
    }
}

export { ControleCancelaParcela };
