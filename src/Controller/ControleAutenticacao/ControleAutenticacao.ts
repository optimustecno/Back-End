import { Request, Response } from "express";
import { AutorizaUsu } from "../../services/ServiceAutorizaUsu";

class ControleAutenticao {
    async handle(request: Request, response: Response) {
        const { email, senha } = request.body;

        const autentica = new AutorizaUsu();

        const token = await autentica.execute({
            email,
            senha,
        });

        return response.json(token);
    }
}

export { ControleAutenticao };
