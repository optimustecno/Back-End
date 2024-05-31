import { Request, Response } from "express";
import { ServiceConsultaContatos } from "../../services/ServiceContatos";

class ControleBuscaContato {
    async handle(request: Request, response: Response) {
        
        const { opt_cod_cli, seq } = request.params;
        const { whatsapp, boleto } = request.query;
        const ConsContatos = new ServiceConsultaContatos();

        const Contatos = await ConsContatos.execute({
            opt_cod_cli, seq, whatsapp, boleto
        });

        return response.json(Contatos);
    }
}

export { ControleBuscaContato };
