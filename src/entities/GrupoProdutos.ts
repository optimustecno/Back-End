import { Entity, PrimaryColumn, Column } from "typeorm";

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
    preco: Number;
    @Column()
    ordem: string;
}

export { GrupoProdutos };
