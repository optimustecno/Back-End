import { Request, Response } from "express";
import { ServiceVinculoFood } from "../../services/ServiceConvidados";

class ControleVinculoFood {
    async handle(request: Request, response: Response) {
        var opt_cod_cliente = request.params.codigo;
        //
        const consultaVinculo = new ServiceVinculoFood();
        const convidados = await consultaVinculo.execute({
            opt_cod_cliente,
        });

        return response.json(convidados);
    }
}

export { ControleVinculoFood };
