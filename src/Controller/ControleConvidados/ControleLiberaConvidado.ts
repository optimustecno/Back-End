import { Request, Response } from "express";
import { ServiceLiberaConvidado } from "../../services/ServiceConvidados";

class ControleLiberaConvidado {
    async handle(request: Request, response: Response) {
        const { opt_seq_convidado,
                opt_aprovado } = request.body;

        const updateConvidado = new ServiceLiberaConvidado();

        const convidadoGrava = await updateConvidado.execute({
            opt_seq_convidado,
            opt_aprovado,
        });

        return response.json(convidadoGrava);
    }
}

export { ControleLiberaConvidado };
