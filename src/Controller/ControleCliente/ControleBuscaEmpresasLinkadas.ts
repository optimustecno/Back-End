import { Request, Response } from "express";
import { ServiceConsultaLinks } from "../../services/ServiceCliente";

class ControleBuscaEmpresasLinkadas {
    async handle(request: Request, response: Response) {
        const opt_cod_cliente = request.params.codigo;

        const consultaLink = new ServiceConsultaLinks();

        const empresas = await consultaLink.execute({ opt_cod_cliente });

        return response.json(empresas);
    }
}

export { ControleBuscaEmpresasLinkadas };
