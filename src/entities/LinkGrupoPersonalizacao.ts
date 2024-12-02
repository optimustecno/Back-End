import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity("opt_link_grupos_personaliza")

class LinkGrupoPersonalizacao {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    opt_grupo_produto: string;
    @Column()
    opt_grupo_adicional: string;
    @Column()
    opt_exibir: string;
}

export { LinkGrupoPersonalizacao };
