import { Request, Response } from "express";
import { ServiceConsultaContatos } from "../../services/ServiceContatos";
import { AtualizaUUID } from "../../utils/AtualizaUUIDCli";

class ControleBuscaContato {
    async handle(request: Request, response: Response) {
        
        const { opt_cod_cli, seq } = request.params;
        const { whatsapp, boleto } = request.query;

        const At = new AtualizaUUID();
        const atualizou = await At.execute({opt_cod_cliente: opt_cod_cli});

        const ConsContatos = new ServiceConsultaContatos();

        const Contatos = await ConsContatos.execute({
            opt_cod_cli, seq, whatsapp, boleto
        });

        return response.json(Contatos);
    }
}

export { ControleBuscaContato };
