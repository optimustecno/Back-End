import { Request, Response } from "express";
import { ServiceCriaContato } from "../../services/ServiceContatos";

class ControleCriaContato {
    async handle(request: Request, response: Response) {
        const { opt_cod_cli, opt_contato, opt_fone, opt_whatsapp, opt_boletos,opt_cargo } = request.body;

        const criaContato = new ServiceCriaContato();

        const ContatoGrava = await criaContato.execute({
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_whatsapp,
            opt_boletos,
            opt_cargo
        });

        return response.json(ContatoGrava);
    }
}

export { ControleCriaContato };
