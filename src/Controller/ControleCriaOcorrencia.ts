import { Request, Response } from "express";
import { ServiceCriaOcorrencia } from "../services/ServiceOcorrencia";

class ControleCriaOcorrencia {
    async handle(request: Request, response: Response) {
        const {
            opt_cod_cliente,
            opt_nome_cliente,
            opt_data_ocorrencia,
            opt_obs,
            opt_tipo_ocorrencia,
        } = request.body;

        const criaOcorrencia = new ServiceCriaOcorrencia();

        const ocorrenciaGrava = await criaOcorrencia.execute({
            opt_cod_cliente,
            opt_nome_cliente,
            opt_data_ocorrencia,
            opt_obs,
            opt_tipo_ocorrencia,
        });

        return response.json(ocorrenciaGrava);
    }
}

export { ControleCriaOcorrencia };
