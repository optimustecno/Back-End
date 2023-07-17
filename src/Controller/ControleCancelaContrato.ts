import { Request, Response } from "express";
import { ServiceCancelaContrato } from "../services/ServiceContratos";

class ControleCancelaContrato {
    async handle(request: Request, response: Response) {
        const {
            seq,
            data_cancelamento
        } = request.params;

        const cancelaContrato = new ServiceCancelaContrato();

        const contratoAtualiza = await cancelaContrato.execute({
            seq,
            data_cancelamento
        });

        
        return response.json(contratoAtualiza);
    }
}

export { ControleCancelaContrato };
