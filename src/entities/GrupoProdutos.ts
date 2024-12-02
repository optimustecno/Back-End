import { Entity, PrimaryColumn, Column, JoinColumn, OneToMany } from "typeorm";
import { ProdutosCardapio } from "./ProdutosCardapio";
import { ViewGruposAdd } from "./ViewGruposAdicionais";

@Entity("opt_grupos_cardapio")
class GrupoProdutos {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cod_grupo: string;
    @Column()
    nome_grupo: string;
    @Column()
    aceita_meio_a_meio: string;
    @Column()
    preco: string;
    @Column()
    ordem: string;
    @Column()
    exibir: string;
    @JoinColumn({name: 'cod_grupo'})
    @OneToMany(() => ProdutosCardapio, (produtos) => produtos.grupoproduto)
    produtos: ProdutosCardapio[];
    @JoinColumn({name: 'cod_grupo'})
    @OneToMany(() => ViewGruposAdd, (grupoPersonaliza) => grupoPersonaliza.grupoProdutos)
    Personalizacoes: ViewGruposAdd[];
}

export { GrupoProdutos };
