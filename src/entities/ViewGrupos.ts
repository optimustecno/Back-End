import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { ViewGruposAdd } from "./ViewGruposAdicionais";
import { ViewProdutosCardapio } from "./ViewProdutosCardapio";

@Entity("opt_view_grupo_produtos")
class ViewGruposProdutos {
    @PrimaryColumn()
    readonly id_cliente: string;
    @PrimaryColumn()
    readonly cod_grupo: string;
    @Column()
    readonly nome_grupo: string;
    @Column()
    readonly aceita_meio_a_meio: string;
    @Column()
    readonly tipo_preco: string;
    @Column()
    readonly ordem: string;
    @Column()
    readonly exibir: string;
    @JoinColumn({name: 'cod_grupo'})
    @OneToMany(() => ViewProdutosCardapio, (produtos) => produtos.grupoproduto)
    produtos: ViewProdutosCardapio[];
    @JoinColumn({name: 'cod_grupo'})
    @OneToMany(() => ViewGruposAdd, (grupoPersonaliza) => grupoPersonaliza.grupoProdutos)
    Personalizacoes: ViewGruposAdd[];
}

export { ViewGruposProdutos };
