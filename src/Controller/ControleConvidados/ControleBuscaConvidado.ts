import { Request, Response } from "express";
import { ServiceConsConvidado } from "../../services/ServiceConvidados";

class ControleBuscaConvidado {
    async handle(request: Request, response: Response) {
        var { opt_seq_convidado } = request;

        // console.log(opt_seq_convidado)
        const consultaConvidado = new ServiceConsConvidado();
        const convidado = await consultaConvidado.execute({
            opt_seq_convidado,
        });

        return response.json(convidado);
    }
}

export { ControleBuscaConvidado };
