import { Request, Response } from "express";
import { ServiceCriaMensagem } from "../../services/ServiceMensagens";

class ControleCriaMensagem {
    async handle(request: Request, response: Response) {
        const { opt_seq_msg,
            opt_seq_contato,
            opt_numero_fone,
            opt_texto,
            opt_url_arquivo,
            opt_apelido_arq
        } = request.body;

        const { opt_codigo_usu } = request;

        const criaMensagem = new ServiceCriaMensagem();

        const MensagemGrava = await criaMensagem.execute({
            opt_seq_msg,
            opt_seq_contato,
            opt_numero_fone,
            opt_texto,
            opt_url_arquivo,
            opt_apelido_arq,
            opt_usuario: opt_codigo_usu
        });

        return response.json(MensagemGrava);
    }
}

export { ControleCriaMensagem };
