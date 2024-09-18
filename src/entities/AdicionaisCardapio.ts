import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_adicionais_cardapio")
class AdicionaisCardapio {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cod_grupo_adicional: string;
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
