import { Request, Response } from "express";
import { ServiceAtualizaMensagem } from "../../services/ServiceMensagens"; 

class ControleUpdateMensagem {
    async handle(request: Request, response: Response) {
        const { Seq,
            opt_seq_contato,
            opt_numero_fone,
            opt_texto,
            opt_url_arquivo,
            opt_apelido_arq,
            opt_status,
            opt_usuario, } = request.body;

        const updateMensagem = new ServiceAtualizaMensagem();

        const contatoGrava = await updateMensagem.execute({
            Seq,
            opt_seq_contato,
            opt_numero_fone,
            opt_texto,
            opt_url_arquivo,
            opt_apelido_arq,
            opt_status,
            opt_usuario
        });

        return response.json(contatoGrava);
    }
}

export { ControleUpdateMensagem };
