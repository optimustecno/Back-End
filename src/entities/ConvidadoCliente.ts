import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_convidado_cliente")
class ConvidadosClientes {
    @PrimaryColumn()
    opt_seq_convidado: string;
    @Column()
    opt_cod_cliente: string;
}

export { ConvidadosClientes };
