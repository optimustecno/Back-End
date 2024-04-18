import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_ocorrencias")
class OcorrenciasTB {
    @PrimaryColumn()
    readonly opt_seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    opt_data_ocorrencia: Date;
    @Column()
    opt_obs: string;
    @Column()
    opt_tipo_ocorrencia: string;
}

export { OcorrenciasTB };
