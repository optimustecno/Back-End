import { Request, Response } from "express";
import { ServiceInsereAlteraProduto } from "../../services/ServiceCardapio";
import { AtivaWebhook } from "../../services/ServiceCardapioDev/AtivaWebhook";

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
            var opt_cod_cliente;
            var itensGravados = "[";
            await itens.forEach(async (_item) => {
                opt_cod_cliente = _item[0].toString();
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
                    exibir: _item[9],
                });
            });

            await itens.forEach(async (_item) => {
                // if (itensGravados != "[") {
                //     itensGravados = `,${itensGravados}`;
                // }
                itensGravados = `${itensGravados}{"opt_cod_cliente": ${
                    _item[0]
                },"cod_produto": "${_item[1]}","grupo": "${_item[2]}","produto": "${
                    _item[3]
                }","descricao": "${_item[4]}","destaque": "${_item[5]}","valor": ${
                    +_item[6] / 100
                },"ordem": "${_item[8]}","exibir": ${_item[9]},"cod_grupo": "${_item[7]}"},`;
            });
            itensGravados = itensGravados.slice(0, -1)
            itensGravados = `${itensGravados}]`;
            // console.log(itensGravados);
            const disparoWebhook = new AtivaWebhook();
            const webhook = await disparoWebhook.execute({
                opt_cod_cliente,
                opt_finalidade: "2",
                Data: JSON.parse((itensGravados)),
            });
            return response.json(itens);
        } catch (error) {
            console.log(error);
            throw new Error("Falha no Controle! Tempo Excedido!");
        }
    }
}
export { ControleCriaProdutos };
