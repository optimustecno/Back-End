import { Request, Response } from "express";
import { ServiceGeraSenha } from "../../services/ServiceSuporte";
import { AtualizaUUID } from "../../utils/AtualizaUUIDCli";

class ControleGeraSenha {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.params.codigo;

        const At = new AtualizaUUID();
        const atualizou = await At.execute({opt_cod_cliente: codigo_Cli});

        const consultacli = new ServiceGeraSenha();

        const senha = await consultacli.execute({
            opt_cod_cliente: codigo_Cli,
        });

        return response.json(senha);
    }
}

export { ControleGeraSenha };
