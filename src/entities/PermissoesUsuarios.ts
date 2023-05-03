import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_permissoes_usuarios")
class PermissoesUsuarios {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    cod_permissao: string;
    @Column()
    cod_usuario: string;
}

export { PermissoesUsuarios };
