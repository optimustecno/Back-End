import { Request, Response } from "express";
import { ServiceAtualizaSetor } from "../../services/ServiceSetor";

class ControleUpdateSetor {
    async handle(request: Request, response: Response) {
        const { seq, setor } = request.body;

        const updateSetor = new ServiceAtualizaSetor();

        const setorGrava = await updateSetor.execute({
            seq,
            setor,
        });

        return response.json(setorGrava);
    }
}

export { ControleUpdateSetor };
