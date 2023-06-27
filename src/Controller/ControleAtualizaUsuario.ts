import { Request, Response } from "express";
import { ServiceUpdateUsu } from "../services/ServiceUsuario";

class ControleUpdateUsu {
    async handle(request: Request, response: Response) {
        const { opt_codigo_usu, opt_usuario, opt_email, ativo } = request.body;

        const updateUsu = new ServiceUpdateUsu();

        const usuGrava = await updateUsu.execute({
            opt_codigo_usu,
            opt_usuario,
            opt_email,
            ativo,
        });

        return response.json(usuGrava);
    }
}

export { ControleUpdateUsu };
