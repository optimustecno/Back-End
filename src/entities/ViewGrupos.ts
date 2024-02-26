import { Entity, PrimaryColumn } from "typeorm";

@Entity("opt_view_grupo_produtos")
class ViewGruposProdutos {
    @PrimaryColumn()
    readonly opt_cod_cliente: string;
    @PrimaryColumn()
    readonly grupo: string;
}

export { ViewGruposProdutos };
