import { Request, Response } from "express";
import { ConsultaGrupoAdicionais } from "../../services/ServiceCardapio";

class ControleBuscaGruposAdicionais {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.opt_cod_cliente;
        const {cod_grupo} = request.params
        const ConsProds = new ConsultaGrupoAdicionais();
        const Produtos = await ConsProds.execute({opt_cod_cliente: codigo_Cli, opt_cod_grupo: cod_grupo});
        return response.json(Produtos);
    }
}

export { ControleBuscaGruposAdicionais };
