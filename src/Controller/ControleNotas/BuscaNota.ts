import { Request, Response } from "express";
import { ServiceBuscaNota } from "../../services/ServiceNotasVersao";

class ControleBuscaNota {
    async handle(request: Request, response: Response) {
        var { seq } = request.params;
        //

        const consultaNota = new ServiceBuscaNota();
        const nota = await consultaNota.execute({
            seq,
        });

        return response.json(nota);
    }
}

export { ControleBuscaNota };
