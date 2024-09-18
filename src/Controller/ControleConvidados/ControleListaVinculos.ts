import { Request, Response } from "express";
import { ServiceListaVinculos } from "../../services/ServiceConvidados";

class ControleListaVinculos {
    async handle(request: Request, response: Response) {
        var { opt_seq_convidado } = request;
        //
        const consultaVinculos = new ServiceListaVinculos();
        const convidados = await consultaVinculos.execute({
            opt_seq_convidado,
        });

        return response.json(convidados);
    }
}

export { ControleListaVinculos };
