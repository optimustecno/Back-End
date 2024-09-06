import { Request, Response } from "express";
import { ServiceTrocaSenhaConvidado } from "../../services/ServiceConvidados";

class ControleTrocaSenhaConvidado {
    async handle(request: Request, response: Response) {
        const { opt_seq_convidado } = request
        const { senha_atual, nova_senha } = request.body;

        const updateUsu = new ServiceTrocaSenhaConvidado();

        const usuGrava = await updateUsu.execute({
            opt_seq_convidado,
            senha_atual,
            nova_senha,
        });

        return response.json(usuGrava);
    }
}

export { ControleTrocaSenhaConvidado };
