import { Request, Response } from "express"
import { ServiceInserePedidoManual } from "../services/ServiceInserePedidoManual";

class ControleInsertManual {
    async handle(request: Request, response: Response) {
        const { cod_pedido } = request.body;

        const inserePedManual = new ServiceInserePedidoManual();

        const pedidoGravou = await inserePedManual.execute({
            cod_pedido
        })

        return response.json({ mesage: pedidoGravou })
    }
}

export { ControleInsertManual }