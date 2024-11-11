import { Request, Response } from "express";
import { ServiceAtualizaFinanceiro } from "../../services/ServiceFinanceiro";

class ControleAtualizaFinanceiro {
    async handle(request: Request, response: Response) {
        const { seq, vencimento, valor, parcela, tipo, identificador } = request.body;

        const atualizaFinanceiro = new ServiceAtualizaFinanceiro();

        //var valValor = valor * 100;

        const finGrava = await atualizaFinanceiro.execute({
            seq,
            vencimento,
            valor,
            parcela,
            tipo,
            identificador,
        });

        return response.json(finGrava);
    }
}

export { ControleAtualizaFinanceiro };
