import { Request, Response } from "express";
import { ServiceBuscaJson } from "../../services/ServiceLogger";

class ControleBuscaPedido {
    async handle(request: Request, response: Response) {
        
        const { opt_payload } = request.params;
        const ConsJson = new ServiceBuscaJson();

        const Pedido = await ConsJson.execute({
            opt_payload
        });

        return response.json(Pedido);
    }
}

export { ControleBuscaPedido };
