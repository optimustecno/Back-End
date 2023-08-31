import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_dados_on")
class DadosOn {
    @Column()
    readonly opt_cod_cliente: string;
    @Column()
    readonly opt_nome_cliente: string;
    @PrimaryColumn()
    readonly cod_link: string;
    @Column()
    readonly nome_link: string;
}

export { DadosOn };
