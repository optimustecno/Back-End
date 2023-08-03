import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Clientes } from "./Cliente";
import { Setor } from "./Setores";
import { usuario } from "./Usuario";

@Entity("opt_suporte")
class Suporte {
    @PrimaryColumn()
    seq: string;
    @Column()
    data: Date;
    @Column()
    hora: string;
    @Column()
    opt_cod_cliente: number;
    @JoinColumn({ name: "opt_cod_cliente" })
    @ManyToOne(() => Clientes)
    cliente: Clientes;
    @Column()
    status: string;
    @Column()
    prioridade: string;
    @Column()
    atendente: string;
    @JoinColumn({ name: "atendente" })
    @ManyToOne(() => usuario)
    Usuario: usuario;
    @Column()
    titulo: string;
    @Column()
    descricao: string;
    @Column()
    contato: string;
    @Column()
    resolucao: string;
    @Column()
    cod_setor: string;
    @Column()
    canal_atendimento: string;
    @JoinColumn({ name: "cod_setor" })
    @ManyToOne(() => Setor)
    setor: Setor;
}

export { Suporte };
