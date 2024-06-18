import { Request, Response } from "express";
import { ServiceLicencaOff } from "../../services/ServiceCliente";

class ControleLicencaOff {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, data_vencimento } = request.body;

        const licencaCli = new ServiceLicencaOff();
        //console.log(request.body)
        const licenca = await licencaCli.execute({
            opt_cod_cliente,
            DataVencimento: data_vencimento,
        });

        return response.json(licenca);
    }
}

export { ControleLicencaOff };
