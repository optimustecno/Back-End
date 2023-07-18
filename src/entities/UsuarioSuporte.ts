import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_usuario_suporte")
class usuario_suporte {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cod_funcionario: string;
}

export { usuario_suporte };
