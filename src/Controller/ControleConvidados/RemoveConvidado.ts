import { Request, Response } from "express";
import { ServiceDeleteConvidado } from "../../services/ServiceConvidados";

class ControleDeleteConvidado {
    async handle(request: Request, response: Response) {
        const opt_seq_convidado = request.params.opt_seq_convidado;

        const deleteGuest = new ServiceDeleteConvidado();

        const guestDelete = await deleteGuest.execute({
            opt_seq_convidado,
        });

        return response.json(guestDelete);
    }
}

export { ControleDeleteConvidado };
