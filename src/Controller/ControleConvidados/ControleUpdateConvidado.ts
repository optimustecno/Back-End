import { Request, Response } from "express";
import { ServiceUpdateConvidado } from "../../services/ServiceConvidados";

class ControleUpdateConvidado {
    async handle(request: Request, response: Response) {
        const { opt_seq_convidado } = request;
        const {
            opt_nome_convidado,
            opt_email_convidado,
            opt_acesso_convidado,
            opt_tipo_convidado,
            opt_fone_convidado,
            opt_finalidade,
        } = request.body;

        const updateConvidado = new ServiceUpdateConvidado();

        const convidadoGrava = await updateConvidado.execute({
            opt_seq_convidado,
            opt_nome_convidado,
            opt_email_convidado,
            opt_acesso_convidado,
            opt_tipo_convidado,
            opt_fone_convidado,
            opt_finalidade,
        });

        return response.json(convidadoGrava);
    }
}

export { ControleUpdateConvidado };
