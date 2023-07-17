import { Request, Response } from "express";
import { ServiceCriaContrato } from "../services/ServiceContratos";

class ControleCriaContrato {
    async handle(request: Request, response: Response) {
        const {
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

        const criaContrato = new ServiceCriaContrato();

        const contratoGrava = await criaContrato.execute({
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

        return response.json(contratoGrava);
    }
}

export { ControleCriaContrato };
