import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_notas_versao")
class NotasVersao {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_codigo_desenvolvedor: string;
    @Column()
    opt_codigo_tester: string;
    @Column()
    opt_status: string;
    @Column()
    opt_sistema: string;
    @Column()
    opt_versao: string;
    @Column()
    opt_descricao: string;
    @Column()
    opt_observacao: string;
    @Column()
    opt_aprovado: string;
    @Column()
    opt_lancamento: string;
}

export { NotasVersao };