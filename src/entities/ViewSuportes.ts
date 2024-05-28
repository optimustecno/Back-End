import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_suporte")
class ViewSuporte {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    readonly data: Date;
    @Column()
    readonly hora: string;
    @Column()
    readonly opt_cod_cliente: string;
    @Column()
    readonly opt_nome_cliente: number;
    @Column()
    readonly status: string;
    @Column()
    readonly prioridade: string;
    @Column()
    readonly titulo: string;
    @Column()
    readonly setor: string;
}

export { ViewSuporte };
