import { Request, Response } from "express";
import { ServiceAtualizaCargo } from "../../services/ServiceCargos";

class ControleUpdateCargo {
    async handle(request: Request, response: Response) {
        const { seq, opt_cargo } = request.body;

        const updateCargo = new ServiceAtualizaCargo();

        const cargoGrava = await updateCargo.execute({
            seq,
            opt_cargo,
        });

        return response.json(cargoGrava);
    }
}

export { ControleUpdateCargo };
