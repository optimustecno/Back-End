import { Request, Response } from "express";
import { ServiceTrocaSenha } from "../services/ServiceUsuario";

class ControleTrocaSenha {
    async handle(request: Request, response: Response) {
        const { opt_codigo_usu, senha_atual, nova_senha } = request.body;

        const updateUsu = new ServiceTrocaSenha();

        const usuGrava = await updateUsu.execute({
            opt_codigo_usu,
            senha_atual,
            nova_senha,
        });

        return response.json(usuGrava);
    }
}

export { ControleTrocaSenha };
