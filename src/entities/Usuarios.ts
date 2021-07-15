import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_cad_usu")
class usuarios {
    @PrimaryColumn()
    readonly opt_codigo_usu: string;
    @Column()
    opt_usuario: string;
    @Column()
    opt_email: string;
    @Column()
    opt_senha: string;
    @Column()
    opt_nivel: string;
}

export { usuarios };