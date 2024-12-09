import { Request, Response } from "express";
import { ServiceInsereAlteraProduto } from "../../services/ServiceCardapio";
import {
    AtivaWebhook,
    ServiceProdutosWebhook,
    UpdateWebhook,
} from "../../services/ServiceCardapioDev";
import { Espera } from "../../utils/functions";

class ControleCriaProdutos {
    async handle(request: Request, response: Response) {
        try {
            // const { id_cliente } = request;
            var id_cliente;
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
                item.id_cliente,
            ]);

            const criaProd = new ServiceInsereAlteraProduto();
            var opt_cod_cliente;
            // var itensGravados = "[";
            await itens.forEach(async (_item) => {
                opt_cod_cliente = _item[0].toString();
                id_cliente = _item[10];
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

            // await itens.forEach(async (_item) => {
            //     // if (itensGravados != "[") {
            //     //     itensGravados = `,${itensGravados}`;
            //     // }
            //     itensGravados = `${itensGravados}{"id_cliente": "${
            //         _item[10]
            //     }","cod_produto": "${_item[1]}","grupo": "${_item[2]}","produto": "${
            //         _item[3]
            //     }","descricao": "${_item[4]}","destaque": "${_item[5]}","valor": ${
            //         +_item[6] / 100
            //     },"ordem": "${_item[8]}","exibir": ${_item[9]},"cod_grupo": "${_item[7]}"},`;
            // });
            // itensGravados = itensGravados.slice(0, -1)
            // itensGravados = `${itensGravados}]`;
            
            // const updatePosWebhook = await updateWebhook.execute({ opt_cod_cliente, Tipo: "P" });
            return response.json(itens);
        } catch (error) {
            console.log(error);
            throw new Error("Falha no Controle! Tempo Excedido!");
        }
    }
}
export { ControleCriaProdutos };
