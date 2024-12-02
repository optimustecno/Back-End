import { GrupoProdutos } from "./GrupoProdutos";
import { AdicionaisCardapio } from "./AdicionaisCardapio";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity("opt_view_grupos_adicionais")
class ViewGruposAdd {
    @PrimaryColumn()
    readonly cod_cliente: string;
    @PrimaryColumn()
    readonly cod_grupo_produto: string;
    @PrimaryColumn()
    readonly cod_grupo_adicional: string;
    @Column()
    readonly grupo_personalizacao: string;
    @Column()
    readonly exibir: string;
    @JoinColumn({ name: "cod_grupo_adicional" })
    @OneToMany(() => AdicionaisCardapio, (adicionais) => adicionais.grupo)
    Itens: AdicionaisCardapio[];
    @JoinColumn({ name: "cod_grupo_produto" })
    @ManyToOne(() => GrupoProdutos, (grupo) => grupo.Personalizacoes)
    grupoProdutos: GrupoProdutos[];
}

export { ViewGruposAdd };
