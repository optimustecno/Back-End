import { Request, Response } from "express";
import { ServiceAdmSenhaConvidado } from "../../services/ServiceConvidados";

class ControleTrocaSenhaConvidadoAdm {
    async handle(request: Request, response: Response) {
        const { opt_seq_convidado, nova_senha } = request.body;

        const updateUsu = new ServiceAdmSenhaConvidado();

        const usuGrava = await updateUsu.execute({
            opt_seq_convidado,
            nova_senha: nova_senha,
        });

        return response.json(usuGrava);
    }
}

export { ControleTrocaSenhaConvidadoAdm };
