import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_ped_app")
class Pedidos {
    @PrimaryColumn()
    opt_cod_cliente: string;
    @PrimaryColumn()
    opt_cod_app: string;
    @PrimaryColumn()
    opt_pedido_app: string;
    @Column()
    opt_pedido: string;
    @Column()
    opt_cod_prod: string;
    @Column()
    opt_cod_prod_meio_1: string;
    @Column()
    opt_cod_prod_meio_2: string;
    @Column()
    opt_nome_produto: string;
    @Column()
    obs_combo: string;
    @PrimaryColumn()
    ordem: string;
    @Column()
    cod_grupo: string;
    @Column()
    quant: number;
    @Column()
    valor_un: number;
    @Column()
    valor_tot_prod: number;
    @Column()
    tipo: string;
    @Column()
    taxa_ent: number;
    @Column()
    desconto: number;
    @Column()
    hora: string;
    @Column()
    data: Date;
    @Column()
    status: string;
    @Column()
    novo_status: string;
    @Column()
    fone_cliente: string;
    @Column()
    cliente: string;
    @Column()
    endereco: string;
    @Column()
    numero: string;
    @Column()
    bairro: string;
    @Column()
    complemento: string;
    @Column()
    cpf_cli: string;
    @Column()
    valor_total_ped: string;
    @Column()
    obs_item: string;
    @Column()
    obs: string;
    @Column()
    pagamento: string;
    @Column()
    obs_troco: string;
    @Column()
    autorizacao: string;
    @Column()
    id_trans: string;
    @Column()
    info_car: string;
    @Column()
    tipo_rec_on: string;
}

export { Pedidos };
