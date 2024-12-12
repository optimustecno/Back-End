import { Request, Response } from "express";
import { ServiceCriaEvento } from "../../services/ServiceIFood";

class ControleCriaEvento {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, opt_cod_app } = request;
        const { code, createdAt, fullCode, merchantId, orderId, salesChannel } = request.body;
        try {
            const criaEvento = new ServiceCriaEvento();
    
            const eventoGrava = await criaEvento.execute({
                code, createdAt, fullCode, merchantId, orderId, salesChannel, opt_cod_cliente, opt_cod_app
            });
            
            return response
                .status(202)
                .json(eventoGrava);
        }
        catch(error){

        }
    }
}

export { ControleCriaEvento };
