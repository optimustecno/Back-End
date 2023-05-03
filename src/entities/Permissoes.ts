import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_permissoes")
class Permissoes {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    permissao: string;
}

export { Permissoes };
