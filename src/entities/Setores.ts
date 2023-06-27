import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_cad_setor")
class Setor {
    @PrimaryColumn()
    seq: string;
    @Column()
    setor: string;
}

export { Setor };
