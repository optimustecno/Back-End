import { Request, Response } from "express";
import { ServiceCriaUsuarioSuporte } from "../../services/ServiceUsuarioSuporte";

class ControleUsuarioSuporte {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, cod_funcionario } = request.body;
        //
        const updateUsu = new ServiceCriaUsuarioSuporte();

        const usuGrava = await updateUsu.execute({
            opt_cod_cliente, cod_funcionario
        });

        return response.json(usuGrava);
    }
}

export { ControleUsuarioSuporte };
