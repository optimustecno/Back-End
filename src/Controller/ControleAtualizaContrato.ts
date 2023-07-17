import { Request, Response } from "express";
import { ServiceAtualizaContrato } from "../services/ServiceContratos";

class ControleAtualizaContrato {
    async handle(request: Request, response: Response) {
        const {
            seq,
            opt_cod_cliente,
            data,
            vencimento,
            tx_instalacao,
            venc_instalacao,
            inicio_mens,
            valor_mens,
            percentual,
            base_calculo,
            ativo,
        } = request.body;

        const atualizaContrato = new ServiceAtualizaContrato();

        const contratoAtualiza = await atualizaContrato.execute({
            seq,
            opt_cod_cliente,
            data,
            vencimento,
            tx_instalacao,
            venc_instalacao,
            inicio_mens,
            valor_mens,
            percentual,
            base_calculo,
            ativo,
        });

        return response.json(contratoAtualiza);
    }
}

export { ControleAtualizaContrato };
