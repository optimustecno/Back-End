import { Request, Response } from "express";
import { ServiceCriaAcesso } from "../../services/ServiceAcessoRemoto";

class ControleCriaAcesso {
    async handle(request: Request, response: Response) {
        const { opt_cod_cli, opt_contato, opt_fone, opt_chave_remota, opt_cargo } = request.body;

        const criaAcesso = new ServiceCriaAcesso();

        const AcessoGrava = await criaAcesso.execute({
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_chave_remota,
            opt_cargo,
        });

        return response.json(AcessoGrava);
    }
}

export { ControleCriaAcesso };
