import { Request, Response } from "express";
import { ServiceConsultaCargos } from "../../services/ServiceCargos";

class ControleBuscaCargos {
    async handle(request: Request, response: Response) {
        const Conscargos = new ServiceConsultaCargos();

        const Cargos = await Conscargos.execute();

        return response.json(Cargos);
    }
}

export { ControleBuscaCargos };
