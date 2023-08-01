//ServiceUsuario
import { Request, Response } from "express";
import { ServiceListaUsuarios } from "../../services/ServiceUsuario";

class ControleListaUsuarios {
    async handle(request: Request, response: Response) {
        var { usuario, email, ativo } = request.query;
        var opt_usuario, opt_email, status;
        if (!usuario) {
            opt_usuario = "";
        } else {
            opt_usuario = usuario;
        }
        if (!email) {
            opt_email = "";
        } else {
            opt_email = email;
        }
        if (!ativo) {
            status = "";
        } else {
            status = ativo;
        }

        const ConsultaUsu = new ServiceListaUsuarios();

        const Usuario = await ConsultaUsu.execute({
            opt_usuario,
            opt_email,
            ativo: status,
        });

        return response.json(Usuario);
    }
}

export { ControleListaUsuarios };
