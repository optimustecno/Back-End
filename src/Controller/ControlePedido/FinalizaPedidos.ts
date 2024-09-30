import { Request, Response } from "express"
import { ServiceFinalizaPedidos } from "../../services/ServicePedidos";


class ControleFinalizaPedidos {
    async handle(request: Request, response: Response) {
        const { data } = request.params;
        const atualizaPedidos = new ServiceFinalizaPedidos();
        //
        if (!data) {
            throw new Error("Data não Informada");
        }
        else {
            var atPedidos = await atualizaPedidos.execute({
                data
            });
        }
        
        return response.json(atPedidos);
    }
}

export { ControleFinalizaPedidos }