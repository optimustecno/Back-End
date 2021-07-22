import { Request, Response } from "express"
import { ServiceConsultaPedidos } from "../services/ServiceConsPedidos";

class ControleConsPedido {
    async handle(request: Request, response: Response) {

        const codigo_Cli = request.params.codigo;
        const consultaPedidos = new ServiceConsultaPedidos();

        const pedidos = await consultaPedidos.execute({
            codigo_Cli
        });


        return response.json(pedidos)
    }
}

export { ControleConsPedido }