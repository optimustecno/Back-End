import { Request, Response } from "express";
import { ServiceConsOcorrencia } from "../services/ServiceOcorrencia";

class ControleConsOcorrencia {
    async handle(request: Request, response: Response) {
        const opt_cod_cliente = request.params.codigo;

        const consultaOcorrencia = new ServiceConsOcorrencia();

        const ocorrencias = await consultaOcorrencia.execute({
            opt_cod_cliente,
        });

        return response.json(ocorrencias);
    }
}

export { ControleConsOcorrencia };
