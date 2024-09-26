import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { GrupoProdutos } from "./GrupoProdutos";

@Entity("opt_produtos_cardapio")
class ProdutosCardapio {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cod_produto: string;
    @Column()
    grupo: string;
    @Column()
    produto: string;
    @Column()
    descricao: string;
    @Column()
    destaque: string;
    @Column()
    valor: Number;
    @Column()
    ordem: string;
    @Column()
    cod_grupo: string;
    @JoinColumn({ name: "cod_grupo" })
    @ManyToOne(() => GrupoProdutos, (grupoproduto) => grupoproduto.produtos)
    grupoproduto: GrupoProdutos[];
}

export { ProdutosCardapio };
