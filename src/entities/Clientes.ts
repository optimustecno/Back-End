import { Entity, PrimaryColumn, Column } from "typeorm";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

@Entity("opt_view_clientes")
class Clientes {
    @PrimaryColumn()
    opt_cod_cliente: string;
    @Column()
    opt_nome_cliente: string;
    @Column()
    opt_bloqueado: string;
    @Column()
    opt_nome_sistema: string;
    @Column()
    opt_versao: string;
    @Column()
    opt_ultimo_acesso: string;
    @Column()
    data_cancelamento: string;
    @Column()
    suportes: string;
    @Column()
    abertos: string;
    @Column()
    encerrados: string;
    @Column()
    antigo: string;
}

export { Clientes };
