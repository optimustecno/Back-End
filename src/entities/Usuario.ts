import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_cad_usu")
class usuario {
    @PrimaryColumn()
    readonly opt_codigo_usu: string;
    @Column()
    opt_usuario: string;
    @Column()
    opt_email: string;
    @Column()
    ativo: string;
}

export { usuario };
