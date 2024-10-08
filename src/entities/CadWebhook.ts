import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_webhook_dev")
class CadWebhook {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_seq_convidado: string;
    @Column()
    opt_tipo: string;
    @Column()
    opt_url: string;
    @Column()
    opt_finalidade: string;
}

export { CadWebhook };
