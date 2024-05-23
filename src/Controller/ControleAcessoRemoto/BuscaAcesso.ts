import { Request, Response } from "express";
import { ServiceConsultaAcesso } from "../../services/ServiceAcessoRemoto";

class ControleBuscaAcesso {
    async handle(request: Request, response: Response) {
        const { opt_cod_cli, seq } = request.params;
        const ConsAcessos = new ServiceConsultaAcesso();

        const Acessos = await ConsAcessos.execute({
            opt_cod_cli, seq
        });

        return response.json(Acessos);
    }
}

export { ControleBuscaAcesso };
