import { Request, Response } from "express";
import { ServiceConsultaNaoLinkadas } from "../../services/ServiceCliente";

class ControleBuscaEmpresasNaoLinkadas {
    async handle(request: Request, response: Response) {
        const opt_cod_cliente = request.params.codigo;

        const consultaLink = new ServiceConsultaNaoLinkadas();

        const empresas = await consultaLink.execute({ opt_cod_cliente });

        return response.json(empresas);
    }
}

export { ControleBuscaEmpresasNaoLinkadas };
