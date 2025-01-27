import { Request, Response } from "express";
import { ConsultaProdutos } from "../../services/ServiceCardapio";

class ControleBuscaProdutos {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.opt_cod_cliente;
        const ConsProds = new ConsultaProdutos();

        const Produtos = await ConsProds.execute({opt_cod_cliente: codigo_Cli});
        return response.json(Produtos);
    }
}

export { ControleBuscaProdutos };
