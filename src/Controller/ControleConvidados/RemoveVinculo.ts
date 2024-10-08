import { Request, Response } from "express";
import { ServiceDeleteVinculo } from "../../services/ServiceConvidados";

class ControleDeleteVinculo {
    async handle(request: Request, response: Response) {
        const {opt_seq_convidado} = request;
        const { opt_uid_cli } = request.params;

        const deleteGuest = new ServiceDeleteVinculo();
        // console.log(`seq convidado ${opt_seq_convidado} cod_cliente ${opt_cod_cliente}`)
        const guestDelete = await deleteGuest.execute({
            opt_seq_convidado,
            opt_uid_cli,
        });

        return response.json(guestDelete);
    }
}

export { ControleDeleteVinculo };
