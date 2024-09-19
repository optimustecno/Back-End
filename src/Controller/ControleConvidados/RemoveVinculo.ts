import { Request, Response } from "express";
import { ServiceDeleteVinculo } from "../../services/ServiceConvidados";

class ControleDeleteVinculo {
    async handle(request: Request, response: Response) {
        const opt_seq_convidado = request;
        const { opt_cod_cliente } = request.query;

        const deleteGuest = new ServiceDeleteVinculo();

        const guestDelete = await deleteGuest.execute({
            opt_seq_convidado,
            opt_cod_cliente,
        });

        return response.json(guestDelete);
    }
}

export { ControleDeleteVinculo };
