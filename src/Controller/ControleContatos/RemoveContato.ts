import { Request, Response } from "express";
import { ServiceDeleteContato } from "../../services/ServiceContatos";

class ControleDeleteContato {
    async handle(request: Request, response: Response) {
        const seq = request.params.seq;

        const deleteContato = new ServiceDeleteContato();

        const suporteDeleta = await deleteContato.execute({
            seq,
        });

        return response.json(suporteDeleta);
    }
}

export { ControleDeleteContato };
