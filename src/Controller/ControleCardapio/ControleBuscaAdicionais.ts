import { Request, Response } from "express";
import { ConsultaAdicionais } from "../../services/ServiceCardapio";

class ControleBuscaAdicionais {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.opt_cod_cliente;
        const {cod_grupo} = request.params
        const ConsProds = new ConsultaAdicionais();

        const Produtos = await ConsProds.execute({opt_cod_cliente: codigo_Cli, opt_cod_grupo: cod_grupo});
        return response.json(Produtos);
    }
}

export { ControleBuscaAdicionais };
