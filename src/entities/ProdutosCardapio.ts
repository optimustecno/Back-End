import { Entity, PrimaryColumn, Column } from "typeorm";

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
}

export { ProdutosCardapio };
