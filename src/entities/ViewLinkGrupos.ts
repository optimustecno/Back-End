import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ViewGruposProdutos } from "./ViewGrupos";
// opt_view_link_grupos
@Entity("opt_view_link_grupos")
class ViewLinkGrupos {
    @PrimaryColumn()
    readonly id_cliente: string;
    @PrimaryColumn()
    readonly cod_grupo_produto: string;
    @Column()
    readonly grupo_produto: string;
    @PrimaryColumn()
    readonly cod_grupo_adicional: string;
    @Column()
    readonly grupo_adicional: string;
    @Column()
    readonly exibir: string;
}

export { ViewLinkGrupos };
