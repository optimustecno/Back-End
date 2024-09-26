import { Entity, PrimaryColumn, Column, JoinColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { AdicionaisCardapio } from "./AdicionaisCardapio";

@Entity("opt_grupo_personalizacao")
class GrupoPersonalizacao {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cod_grupo_adicional: string;
    @JoinColumn({name: 'cod_grupo_adicional'})
    @OneToMany(() => AdicionaisCardapio, (adicionais) => adicionais.grupo)
    adicionais: AdicionaisCardapio[];
    @Column()
    nome: string;
    @Column()
    cod_grupo: string;
}

export { GrupoPersonalizacao };
