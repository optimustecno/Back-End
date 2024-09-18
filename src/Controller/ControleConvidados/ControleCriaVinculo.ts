import { Request, Response } from "express";
import { ServiceCriaVinculo } from "../../services/ServiceConvidados";

class ControleCriaVinculo {
    async handle(request: Request, response: Response) {
        var { opt_seq_convidado } = request;
        var { uuid_cliente, data_insercao } = request.body;

        // console.log(opt_seq_convidado)
        const criaVinculo = new ServiceCriaVinculo();
        const vinculo = await criaVinculo.execute({
            opt_seq_convidado, uuid_cliente, data_insercao
        });

        return response.json(vinculo);
    }
}

export { ControleCriaVinculo };
