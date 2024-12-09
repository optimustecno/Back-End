import { Request, Response } from "express";
import { ServiceInsereAlteraAdd } from "../../services/ServiceCardapioDev";
import { AtivaWebhook } from "../../services/ServiceCardapioDev/AtivaWebhook";

class ControleCriaAdd {
    async handle(request: Request, response: Response) {
        try {
            const itens = request.body.map((item) => [
                item.opt_cod_cliente,
                item.cod_grupo_adicional,
                item.cod_adicional,
                item.nome,
                item.valor,
                item.aceita_quantidade,
                item.exibir,
                item.gravado,
                item.id_cliente
            ]);

            const criaProd = new ServiceInsereAlteraAdd();
            var opt_cod_cliente;
            // var itensGravados = "[";
            var itensGravados;
            await itens.forEach(async (_item) => {
                // console.table(_item)
                opt_cod_cliente = _item[0].toString();
                var itemGrava = await criaProd.execute({
                    opt_cod_cliente: _item[0],
                    cod_grupo_adicional: _item[1],
                    cod_adicional: _item[2],
                    nome: _item[3],
                    valor: _item[4],
                    aceita_quantidade: _item[5],
                    exibir: _item[6],
                    id_cliente: _item[8]
                });
            });

            // await itens.forEach(async (_item) => {
            //     itensGravados = `${itensGravados}{"id_cliente": "${
            //         _item[8]
            //     }","cod_grupo_adicional": "${_item[1]}","cod_adicional": "${_item[2]}","nome": "${
            //         _item[3]
            //     }","valor": "${+_item[4] / 100}","aceita_quantidade": "${_item[5]}","exibir": ${
            //         _item[6]
            //     }},`;
            // });
            // itensGravados = itensGravados.slice(0, -1);
            // itensGravados = `${itensGravados}]`;
            // console.log(itensGravados);
            // const disparoWebhook = new AtivaWebhook();
            // const webhook = await disparoWebhook.execute({
            //     opt_cod_cliente,
            //     opt_finalidade: "4",
            //     Data: JSON.parse(itensGravados),
            // });
            return response.json(itens);
        } catch (error) {
            console.log(error);
            throw new Error("Falha no Controle! Tempo Excedido!");
        }
    }
}
export { ControleCriaAdd };
