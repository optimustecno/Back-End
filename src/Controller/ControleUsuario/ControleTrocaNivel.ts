import { Request, Response } from "express";
import { ServiceUpdateNivelAcesso } from "../../services/ServiceUsuario";

class ControleTrocaNivelUsuario {
    async handle(request: Request, response: Response) {
        const { opt_codigo_usu, opt_nivel } = request.body;

        const updateUsu = new ServiceUpdateNivelAcesso();

        const usuGrava = await updateUsu.execute({
            opt_codigo_usu,
            opt_nivel
        });

        return response.json(usuGrava);
    }
}

export { ControleTrocaNivelUsuario };
