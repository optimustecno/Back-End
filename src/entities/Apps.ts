import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_cli_app")
class Apps {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    readonly opt_cod_cliente: string;
    @Column()
    readonly opt_nome_cliente: string;
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

export { Apps };
