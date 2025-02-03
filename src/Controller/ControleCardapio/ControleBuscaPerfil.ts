import { Request, Response } from "express";
import { ConsultaPerfil } from "../../services/ServiceCardapio";

class ControleBuscaPerfilCardapio {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.opt_cod_cliente;
        const ConsPerfil = new ConsultaPerfil();
        const Perfil = await ConsPerfil.execute({opt_cod_cliente: codigo_Cli});
        return response.json(Perfil);
    }
}

export { ControleBuscaPerfilCardapio };
