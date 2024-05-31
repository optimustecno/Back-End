import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_mesagens_detalhe")
class Mensagens {
    @PrimaryColumn()
    Seq: string;
    @Column()
    opt_seq_msg: string;
    @Column()
    opt_seq_contato: string;
    @Column()
    opt_numero_fone: string;
    @Column()
    opt_texto: string;
    @Column()
    opt_url_arquivo: string;
    @Column()
    opt_apelido_arq: string;
    @Column()
    opt_usuario: string;
    @Column()
    opt_status: string;
}

export { Mensagens };
