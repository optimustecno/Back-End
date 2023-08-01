import { Request, Response } from "express";
import { ServiceCriaSetor } from "../../services/ServiceSetor";

class ControleCriaSetor {
    async handle(request: Request, response: Response) {
        const { seq, setor } = request.body;

        const criaSetor = new ServiceCriaSetor();

        const setorGrava = await criaSetor.execute({
            seq,
            setor,
        });

        return response.json(setorGrava);
    }
}

export { ControleCriaSetor };
