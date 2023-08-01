import { Request, Response } from "express";
import { ServiceConsultaSistemas } from "../../services/ServiceSistemas";

class ControleListaSis {
    async handle(request: Request, response: Response) {
        const consultaSis = new ServiceConsultaSistemas();

        const sistem = await consultaSis.execute();

        return response.json(sistem);
    }
}

export { ControleListaSis };
