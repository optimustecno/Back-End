import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_setores")
class ViewSetores {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    readonly setor: string;
    @Column()
    readonly suportes: string;
    @Column()
    readonly abertos: string;
    @Column()
    readonly encerrados: string;
}

export { ViewSetores };
