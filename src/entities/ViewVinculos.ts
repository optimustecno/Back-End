import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("opt_view_vinculos")
class ViewVinculos {
    @PrimaryColumn()
    readonly opt_seq_convidado: string;
    @PrimaryColumn()
    readonly opt_cod_cliente: string;
    @Column()
    readonly opt_nome_cliente: string;
    @Column()
    readonly opt_nome_convidado: string;
    @Column()
    readonly opt_uid_cli: string;
    @Column()
    readonly aprov: string;
    @Column()
    readonly data_insercao: string;
}

export { ViewVinculos };
