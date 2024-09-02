import { Request, Response } from "express";
import { ServiceConsultaAcesso } from "../../services/ServiceAcessoRemoto";
import { AtualizaUUID } from "../../utils/AtualizaUUIDCli";

class ControleBuscaAcesso {
    async handle(request: Request, response: Response) {
        const { opt_cod_cli, seq } = request.params;

        const At = new AtualizaUUID();
        const atualizou = await At.execute({opt_cod_cliente: opt_cod_cli});

        const ConsAcessos = new ServiceConsultaAcesso();

        const Acessos = await ConsAcessos.execute({
            opt_cod_cli, seq
        });

        return response.json(Acessos);
    }
}

export { ControleBuscaAcesso };
