import { Request, Response } from "express";
import { ServiceCriaFinanceiro } from "../../services/ServiceFinanceiro";

class ControleCriaFinanceiro {
    async handle(request: Request, response: Response) {
        const {
            opt_seq_contrato,
            opt_cod_cliente,
            vencimento,
            valor,
            parcela,
            tipo,
            pago,
            identificador,
        } = request.body;

        const criaFinanceiro = new ServiceCriaFinanceiro();

        const finGrava = await criaFinanceiro.execute({
            opt_seq_contrato,
            opt_cod_cliente,
            vencimento,
            valor,
            parcela,
            tipo,
            pago,
            identificador,
        });

        return response.json(finGrava);
    }
}

export { ControleCriaFinanceiro };
