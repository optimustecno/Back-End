// opt_contatos_cli
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_contatos_cli")
class AcessoRemoto {
    @PrimaryColumn()
    seq: string; // Auto-incremento
    @Column()
    opt_cod_cli: string; // Codigo do Cliente onde o Contato Trabalha
    @Column()
    opt_contato: string; // Nome do Contato
    @Column()
    opt_fone: string; // checkBox 0/1
    @Column()
    tipo: string;
    @Column()
    opt_cargo: string;
    @Column()
    opt_chave_remota: string;
}

export { AcessoRemoto };
