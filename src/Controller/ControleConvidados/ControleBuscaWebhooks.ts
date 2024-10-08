import { Request, Response } from "express";
import { ServiceConsWebhooks } from "../../services/ServiceConvidados";

class ControleBuscaWebhook {
    async handle(request: Request, response: Response) {
        var { opt_seq_convidado } = request;

        // console.log(opt_seq_convidado)
        const consultaWebhook = new ServiceConsWebhooks();
        const Webhook = await consultaWebhook.execute({
            opt_seq_convidado,
        });

        return response.json(Webhook);
    }
}

export { ControleBuscaWebhook };
