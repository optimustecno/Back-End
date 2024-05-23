import { Request, Response } from "express";
import { ServiceCriaCargo } from "../../services/ServiceCargos";

class ControleCriaCargo {
    async handle(request: Request, response: Response) {
        const { opt_cargo } = request.body;

        const criaCargo = new ServiceCriaCargo();

        const CargoGrava = await criaCargo.execute({
            opt_cargo,
        });

        return response.json(CargoGrava);
    }
}

export { ControleCriaCargo };
