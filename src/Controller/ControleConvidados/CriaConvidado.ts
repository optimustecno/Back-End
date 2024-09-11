import { Request, Response } from "express";
import { ServiceCriaConvidado } from "../../services/ServiceConvidados";

class ControleCriaConvidado {
    async handle(request: Request, response: Response) {
        const {
            opt_nome_convidado,
            opt_email_convidado,
            opt_acesso_convidado,
            opt_tipo_convidado,
            opt_fone_convidado,
            opt_finalidade,
            opt_data_cad
        } = request.body;

        const criaConvidado = new ServiceCriaConvidado();

        const ConvidadoGrava = await criaConvidado.execute({
            opt_nome_convidado,
            opt_email_convidado,
            opt_acesso_convidado,
            opt_tipo_convidado,
            opt_fone_convidado,
            opt_finalidade,
            opt_data_cad,
        });

        return response.json(ConvidadoGrava);
    }
}

export { ControleCriaConvidado };
