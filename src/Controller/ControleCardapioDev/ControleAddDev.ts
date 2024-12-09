import { Request, Response } from "express";
import { ServiceAddCardapio } from "../../services/ServiceCardapioDev";

class ControleBuscaAddDev {
    async handle(request: Request, response: Response) {
        const { id_cliente } = request;
        const listaItens = new ServiceAddCardapio();
        const adicionais = await listaItens.execute({ id_cliente });

        return response.json(adicionais);
    }
}

export { ControleBuscaAddDev };
