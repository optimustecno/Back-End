import { getCustomRepository } from "typeorm";
import { PedidoRep } from "../repositories/PedidoRep"

interface iPedidorequest {
    opt_cod_cliente: string;
    opt_cod_app: string;
    opt_pedido_app: string;
    opt_pedido?: string;
    opt_cod_prod: string;
    opt_cod_prod_meio_1?: string;
    opt_cod_prod_meio_2?: string;
    opt_nome_produto?: string;
    obs_combo?: string;
    ordem: string;
    cod_grupo: string;
    quant: number;
    valor_un: number;
    valor_tot_prod: number;
    tipo: string;
    taxa_ent: number;
    hora: string;
    data: Date;
    status: string;
    novo_status?: string;
    fone_cliente?: string;
    cliente: string;
    endereco?: string;
    numero?: string;
    bairro?: string;
    complemento?: string;
    cpf_cli?: string;
    valor_total_ped: string;
    obs_item?: string;
    obs?: string;
    obs_troco?: string;
};

class ServiceInserePedido {

    async execute({
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
    }: iPedidorequest) {
        const pedidoRep = getCustomRepository(PedidoRep);

        if (!opt_pedido_app) {
            throw new Error("Pedido Sem Numeração")
        }

        const pedidoExistente = await pedidoRep.findOne({
            opt_pedido_app
        });

        if (pedidoExistente) {
            throw new Error("Pedido Já Inserido!")
        }

        const pedido = pedidoRep.create({
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
        await pedidoRep.save(pedido)

        return pedido
    }
}

export { ServiceInserePedido }