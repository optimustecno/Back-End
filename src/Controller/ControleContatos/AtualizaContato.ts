import { Request, Response } from "express";
import { ServiceAtualizaContato } from "../../services/ServiceContatos";

class ControleUpdateContato {
    async handle(request: Request, response: Response) {
        const { seq,
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_whatsapp,
            opt_boletos,
            opt_cargo } = request.body;

        const updateContato = new ServiceAtualizaContato();

        const contatoGrava = await updateContato.execute({
            seq,
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_whatsapp,
            opt_boletos,
            opt_cargo
        });

        return response.json(contatoGrava);
    }
}

export { ControleUpdateContato };
