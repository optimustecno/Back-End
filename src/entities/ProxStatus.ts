import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_prox_status")
class PedidosProxStatus {
    @Column()
    readonly opt_cod_app: string;
    @PrimaryColumn()
    readonly opt_pedido_app: string;
    @Column()
    readonly novo_status: string;
    @Column()
    readonly app: string;
    @Column()
    readonly login: string;
    @Column()
    readonly senha: string;
    @Column()
    readonly token: string;
    @Column()
    readonly rede: string;
}

export { PedidosProxStatus };