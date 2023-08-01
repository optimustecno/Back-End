import { Request, Response } from "express";
import { ServiceInsereUsuario } from "../../services/ServiceUsuario";

class ControleInsertUsuario {
    async handle(request: Request, response: Response) {
        const { opt_usuario, opt_email, opt_senha, opt_nivel } = request.body;

        const insereUsuario = new ServiceInsereUsuario();

        const pedidoGrava = await insereUsuario.execute({
            opt_usuario,
            opt_email,
            opt_senha,
            opt_nivel,
        });

        return response.json(pedidoGrava);
    }
}

export { ControleInsertUsuario };
