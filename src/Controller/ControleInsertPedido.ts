import { Request, Response } from "express"
import { ServiceInserePedido } from "../services/ServiceInserePedio";

class ControleInsertPedido {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente,
            opt_cod_app,
            opt_pedido_app,
            opt_pedido,
            opt_cod_prod,
            opt_cod_prod_meio_1,
            opt_cod_prod_meio_2,
            opt_nome_produto,
            obs_combo,
            ordem,
            cod_grupo,
            quant,
            valor_un,
            valor_tot_prod,
            tipo,
            taxa_ent,
            hora,
            data,
            status,
            novo_status,
            fone_cliente,
            cliente,
            endereco,
            numero,
            bairro,
            complemento,
            cpf_cli,
            valor_total_ped,
            obs_item,
            obs,
            obs_troco
        } = request.body;

        const inserePedido = new ServiceInserePedido();

        const pedidoGrava = await inserePedido.execute({
            opt_cod_cliente,
            opt_cod_app,
            opt_pedido_app,
            opt_pedido,
            opt_cod_prod,
            opt_cod_prod_meio_1,
            opt_cod_prod_meio_2,
            opt_nome_produto,
            obs_combo,
            ordem,
            cod_grupo,
            quant,
            valor_un,
            valor_tot_prod,
            tipo,
            taxa_ent,
            hora,
            data,
            status,
            novo_status,
            fone_cliente,
            cliente,
            endereco,
            numero,
            bairro,
            complemento,
            cpf_cli,
            valor_total_ped,
            obs_item,
            obs,
            obs_troco
        })

        return response.json(pedidoGrava)
    }
}

export { ControleInsertPedido }