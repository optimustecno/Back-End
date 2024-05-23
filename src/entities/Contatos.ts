// opt_contatos_cli
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_contatos_cli")
class Contatos {
    @PrimaryColumn()
    seq: string;           // Auto-incremento
    @Column()
    opt_cod_cli: string;   // Codigo do Cliente onde o Contato Trabalha
    @Column()
    opt_contato: string;   // Nome do Contato
    @Column()
    opt_fone: string;      // Número do telefone (35) 9 9999-9999
    @Column()
    opt_whatsapp: string;  // CheckBox 0/1
    @Column()
    opt_boletos: string;   // checkBox 0/1
    @Column()
    tipo: string;
    @Column()
    opt_cargo: string;
}

export { Contatos };
