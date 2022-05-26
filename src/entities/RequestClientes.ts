import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_cli_request")
class RequestClientes {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    readonly opt_cod_cliente: string;
    @Column()
    readonly data: Date;
    @Column()
    readonly quantidade: number;
}

export { RequestClientes };