import { Request, Response } from "express";
import { ServiceDeleteAcesso } from "../../services/ServiceAcessoRemoto";

class ControleDeleteAcesso {
    async handle(request: Request, response: Response) {
        const seq = request.params.seq;

        const deleteAcesso = new ServiceDeleteAcesso();

        const AcessoDelete = await deleteAcesso.execute({
            seq,
        });

        return response.json(AcessoDelete);
    }
}

export { ControleDeleteAcesso };
