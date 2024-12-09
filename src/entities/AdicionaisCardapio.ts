import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { ViewGruposAdd } from "./ViewGruposAdicionais";

@Entity("opt_adicionais_cardapio")
class AdicionaisCardapio {
    @PrimaryColumn()
    codigo_adicional: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cod_grupo_adicional: string;
    @JoinColumn({ name: 'cod_grupo_adicional' })
    @ManyToOne(() => ViewGruposAdd, (grupo) => grupo.Itens)
    grupo: ViewGruposAdd[];
    @Column()
    cod_adicional: string;
    @Column()
    nome: string;
    @Column()
    valor: Number;
    @Column()
    aceita_quantidade: string;
    @Column()
    exibir: string;
    @Column()
    webhook: string;
}

export { AdicionaisCardapio };
