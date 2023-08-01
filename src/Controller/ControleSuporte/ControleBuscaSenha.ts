import { Request, Response } from "express";
import { ServiceGeraSenha } from "../../services/ServiceSuporte";

class ControleGeraSenha {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.params.codigo;

        const consultacli = new ServiceGeraSenha();

        const senha = await consultacli.execute({
            opt_cod_cliente: codigo_Cli,
        });

        return response.json(senha);
    }
}

export { ControleGeraSenha };
