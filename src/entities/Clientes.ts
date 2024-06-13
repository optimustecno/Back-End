import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_clientes")
class Clientes {
    @PrimaryColumn()
    readonly opt_cod_cliente: string;
    @Column()
    readonly opt_nome_cliente: string;
    @Column()
    readonly opt_bloqueado: string;
    @Column()
    readonly opt_nome_sistema: string;
    @Column()
    readonly opt_versao: string;
    @Column()
    readonly opt_ultimo_acesso: string;
    @Column()
    readonly data_cancelamento: string;
    @Column()
    readonly suportes: string;
    @Column()
    readonly abertos: string;
    @Column()
    readonly encerrados: string;
    @Column()
    readonly antigo: string;
}

export { Clientes };
