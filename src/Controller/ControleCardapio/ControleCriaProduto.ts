import { Request, Response } from "express";
import { ServiceInsereAlteraProduto } from "../../services/ServiceCardapio";

class ControleCriaAlteraProduto {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, cod_produto, grupo, produto, descricao, destaque, valor, cod_grupo, ordem, exibir } =
            request.body;

        const criaProd = new ServiceInsereAlteraProduto();

        const produtoGrava = await criaProd.execute({
            opt_cod_cliente,
            cod_produto,
            grupo,
            produto,
            descricao,
            destaque,
            valor,
            cod_grupo,
            ordem,
            exibir
        });

        return response.json(produtoGrava);
    }
}

export { ControleCriaAlteraProduto };
