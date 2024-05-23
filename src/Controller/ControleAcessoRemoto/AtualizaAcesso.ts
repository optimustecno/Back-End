import { Request, Response } from "express";
import { ServiceAtualizaAcesso } from "../../services/ServiceAcessoRemoto";

class ControleUpdateAcesso {
    async handle(request: Request, response: Response) {
        const { seq,
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_chave_remota,
            opt_cargo } = request.body;

        const updateAcesso = new ServiceAtualizaAcesso();

        const acessoGrava = await updateAcesso.execute({
            seq,
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_chave_remota,
            opt_cargo
        });

        return response.json(acessoGrava);
    }
}

export { ControleUpdateAcesso };
