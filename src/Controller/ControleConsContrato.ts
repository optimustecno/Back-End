import { Request, Response } from "express";
import { ServiceConsultaContrato } from "../services/ServiceContratos";

class ControleConsContrato {
    async handle(request: Request, response: Response) {
        const { seq } = request.params;

        const consultaOcorrencia = new ServiceConsultaContrato();

        const ConsContrato = await consultaOcorrencia.execute({
            seq,
        });

        return response.json(ConsContrato);
    }
}

export { ControleConsContrato };
