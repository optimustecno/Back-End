import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("opt_view_notas")
class ViewNotas {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    readonly opt_sistema: string;
    @Column()
    readonly opt_versao: string;
    @Column()
    readonly desenvolvedor: string;
    @Column()
    readonly Tester: string;
    @Column()
    readonly opt_descricao: string;
    @Column()
    readonly status: string;
    @Column()
    readonly opt_lancamento: string;
}

export { ViewNotas };
