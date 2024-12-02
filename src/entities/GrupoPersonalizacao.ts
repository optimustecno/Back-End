import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity("opt_grupo_personalizacao")
class GrupoPersonalizacao {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    nome: string;
    @Column()
    cod_grupo: string;
    @Column()
    exibir: string;
}

export { GrupoPersonalizacao };
