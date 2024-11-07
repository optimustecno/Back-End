import { Request, Response } from "express";
import { ServiceEstornaFinanceiro } from "../../services/ServiceFinanceiro";

class ControleEstornaPagamento {
    async handle(request: Request, response: Response) {
        const { seq } = request.body;

        const atualizaFinanceiro = new ServiceEstornaFinanceiro();

        const finGrava = await atualizaFinanceiro.execute({
            seq,
        });

        return response.json(finGrava);
    }
}

export { ControleEstornaPagamento };
