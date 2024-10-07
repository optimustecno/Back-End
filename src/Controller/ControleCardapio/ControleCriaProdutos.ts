import { Request, Response } from "express";
import { ServiceInsereAlteraProduto } from "../../services/ServiceCardapio";

class ControleCriaProdutos {
    async handle(request: Request, response: Response) {
        try {
            const itens = request.body.map((item) => [
                item.opt_cod_cliente,
                item.cod_produto,
                item.grupo,
                item.produto,
                item.descricao,
                item.destaque,
                item.valor,
                item.cod_grupo,
                item.ordem,
                item.exibir,
            ]);

            const criaProd = new ServiceInsereAlteraProduto();

            itens.forEach(async (_item) => {
                var itemGrava = await criaProd.execute({
                    opt_cod_cliente: _item[0],
                    cod_produto: _item[1],
                    grupo: _item[2],
                    produto: _item[3],
                    descricao: _item[4],
                    destaque: _item[5],
                    valor: _item[6],
                    cod_grupo: _item[7],
                    ordem: _item[8],
                    exibir: _item[9]
                });
            });

            return response.json(itens);
        } catch (error) {
            console.log(error);
            throw new Error("Falha no Controle! Tempo Excedido!");
        }
    }
}
export { ControleCriaProdutos };
