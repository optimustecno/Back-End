import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_financeiro")
class Financeiro {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_seq_contrato: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    vencimento: Date;
    @Column()
    valor: number;
    @Column()
    parcela: string;
    @Column()
    tipo: string;
    @Column()
    pago: string;
    @Column()
    identificador: string;
    @Column()
    data_pagamento: Date;
}

export { Financeiro }