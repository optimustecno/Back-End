import { Request, Response } from "express";
import { consultaSetor } from "../../services/ServiceSetor";

class ControleBuscaSetores {
    async handle(request: Request, response: Response) {
        const ConsSetores = new consultaSetor();

        const Setores = await ConsSetores.execute();

        return response.json(Setores);
    }
}

export { ControleBuscaSetores };
