import { Entity, PrimaryColumn, Column, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { AdicionaisCardapio } from "./AdicionaisCardapio";
import { GrupoProdutos } from "./GrupoProdutos";

@Entity("opt_grupo_personalizacao")
class GrupoPersonalizacao {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cod_grupo_adicional: string;
    @JoinColumn({name: 'cod_grupo_adicional' })
    @OneToMany(() => AdicionaisCardapio, (adicionais) => adicionais.grupo, )
    Itens: AdicionaisCardapio[];
    @Column()
    nome: string;
    @Column()
    cod_grupo: string;
    @JoinColumn({ name: 'cod_grupo' })
    @ManyToOne(() => GrupoProdutos, (grupo) => grupo.Personalizacoes)
    grupoProdutos: GrupoProdutos[];
    @Column()
    exibir: string;
}

export { GrupoPersonalizacao };
