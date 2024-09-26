import { Entity, PrimaryColumn, Column, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { GrupoPersonalizacao } from "./GrupoPersonalizacao";

@Entity("opt_adicionais_cardapio")
class AdicionaisCardapio {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cod_grupo_adicional: string;
    @JoinColumn({ name: "cod_grupo_adicional" })
    @ManyToOne(() => GrupoPersonalizacao, (grupo) => grupo.cod_grupo_adicional)
    grupo: GrupoPersonalizacao[];
    @Column()
    cod_adicional: string;
    @Column()
    nome: string;
    @Column()
    valor: Number;
    @Column()
    aceita_quantidade: string;
}

export { AdicionaisCardapio };
