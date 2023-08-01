import { Request, Response } from "express";
import { consultaSuporte } from "../../services/ServiceSuporte";

class ControleConsultaSuporte {
    async handle(request: Request, response: Response) {
        const seq = request.params.seq;

        const consSuporte = new consultaSuporte();

        const suporte = await consSuporte.execute({
            seq,
        });

        return response.json(suporte);
    }
}

export { ControleConsultaSuporte };
