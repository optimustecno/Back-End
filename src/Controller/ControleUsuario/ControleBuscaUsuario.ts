import { Request, Response } from "express";
import { ServiceConsUsuario } from "../../services/ServiceUsuario";
import { AtualizaUUID } from "../../utils/AtualizaUUIDCli";

class ControleBuscaUsuario {
    async handle(request: Request, response: Response) {
        const { codigo } = request.params;

        const At = new AtualizaUUID();
        const atualizou = await At.execute({opt_cod_cliente: codigo});

        const ConsultaUsu = new ServiceConsUsuario();

        const usuario = await ConsultaUsu.execute({
            opt_codigo_usu: codigo,
        });

        return response.json(usuario);
    }
}

export { ControleBuscaUsuario };
