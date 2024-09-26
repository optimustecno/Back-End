import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_cad_convidados")
class Convidados {
    @PrimaryColumn()
    opt_seq_convidado: string;
    @Column()
    opt_nome_convidado: string;
    @Column() 
    opt_email_convidado: string;
    @Column()
    opt_acesso_convidado: string;
    @Column()
    opt_fone_convidado: string;
    @Column()  
    opt_tipo_convidado: string;
    @Column()
    opt_finalidade: string;
    @Column()
    opt_aprovado: string;
    @Column()
    opt_data_cad: string;
    @Column()
    opt_token: string;
}

export { Convidados };
