import { Request, Response } from "express";
import { ServiceApiKey } from "../../services/ServiceConvidados";


class ControleUpdateApiKey {
    async handle(request: Request, response: Response) {
        const { opt_seq_convidado } = request;

        const updateConvidado = new ServiceApiKey();

        const apiKeyGrava = await updateConvidado.execute({
            opt_seq_convidado,
        });

        return response.json(apiKeyGrava);
    }
}

export { ControleUpdateApiKey };
