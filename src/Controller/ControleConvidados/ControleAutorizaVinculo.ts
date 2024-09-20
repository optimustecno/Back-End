import { Request, Response } from "express";
import { ServiceAprovaVinculo } from "../../services/ServiceConvidados";

class ControleAprovaVinculo {
    async handle(request: Request, response: Response) {
        const { opt_seq_convidado, opt_cod_cliente, aprov } = request.body;

        const updateConvidado = new ServiceAprovaVinculo();

        const convidadoGrava = await updateConvidado.execute({
            opt_seq_convidado,
            opt_cod_cliente,
            aprov,
        });

        return response.json(convidadoGrava);
    }
}

export { ControleAprovaVinculo };
