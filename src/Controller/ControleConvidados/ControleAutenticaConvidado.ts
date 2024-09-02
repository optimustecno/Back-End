import { Request, Response } from "express";
import { AutorizaConvidado } from "../../services/ServiceConvidados";

class ControleAutenticaConvidado {
    async handle(request: Request, response: Response) {
        const { opt_email_convidado, opt_acesso_convidado } = request.body;

        const autentica = new AutorizaConvidado();

        const token = await autentica.execute({
            opt_email_convidado, opt_acesso_convidado
        });

        return response.json(token);
    }
}

export { ControleAutenticaConvidado };
