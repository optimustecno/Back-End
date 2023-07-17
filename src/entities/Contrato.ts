import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_contrato")
class Contrato {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    data: Date;
    @Column()
    vencimento: string;
    @Column()
    tx_instalacao: number;
    @Column()
    venc_instalacao: Date;
    @Column()
    inicio_mens: Date;
    @Column()
    valor_mens: number;
    @Column()
    percentual: number;
    @Column()
    base_calculo: number;
    @Column()
    ativo: string;
    @Column()
    data_cancelamento: string;
}

export { Contrato };
