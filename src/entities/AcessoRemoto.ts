// opt_contatos_cli
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_contatos_cli")
class AcessoRemoto {
    @PrimaryColumn()
    seq: string; // Auto-incremento
    @Column()
    opt_cod_cli: string; // Codigo do Cliente 
    @Column()
    opt_contato: string; // Nome do terminal
    @Column()
    opt_fone: string; // Id do Acesso
    @Column()
    tipo: string;    // A
    @Column()
    opt_cargo: string;    // Nome do programa utilizado Ex: Anydesk
    @Column()
    opt_chave_remota: string;  // Senha
}

export { AcessoRemoto };
