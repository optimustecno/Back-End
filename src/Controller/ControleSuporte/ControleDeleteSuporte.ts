import { Request, Response } from "express";
import { ServiceDeleteSuporte } from "../../services/ServiceSuporte";

class ControleDeleteSuporte {
    async handle(request: Request, response: Response) {
        const seq = request.params.seq;

        const deleteSuporte = new ServiceDeleteSuporte();

        const suporteDeleta = await deleteSuporte.execute({
            seq,
        });

        return response.json(suporteDeleta);
    }
}

export { ControleDeleteSuporte };
