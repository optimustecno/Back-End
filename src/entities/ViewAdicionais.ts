import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ViewGruposProdutos } from "./ViewGrupos";

@Entity("opt_view_adicionais")
class ViewAdicionaisCardapio {
    @PrimaryColumn()
    readonly id_cliente: string;
    @PrimaryColumn()
    readonly codigo_adicional: string;
    @Column()
    readonly nome: string;
    @Column()
    readonly valor: Number;
    @Column()
    readonly aceita_quantidade: string;
    @Column()
    readonly exibir: string;
    @Column()
    readonly cod_grupo_adicional: string;
    @Column()
    readonly webhook: string;
}

export { ViewAdicionaisCardapio };
