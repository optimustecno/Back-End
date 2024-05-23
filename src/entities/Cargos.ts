import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_cargos")
class Cargos {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cargo: string;
}

export { Cargos };
