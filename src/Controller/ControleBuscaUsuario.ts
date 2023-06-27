import { Request, Response } from "express";
import { ServiceUsuario } from "../services/ServiceUsuario";

class ControleBuscaUsuario {
    async handle(request: Request, response: Response) {
        const { codigo } = request.params;

        const ConsultaUsu = new ServiceUsuario();

        const usuario = await ConsultaUsu.execute({
            opt_codigo_usu: codigo,
        });

        return response.json(usuario);
    }
}

export { ControleBuscaUsuario };
