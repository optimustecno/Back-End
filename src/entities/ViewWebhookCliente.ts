import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("opt_view_webhook_cliente")
class ViewWebhookCli {
    @PrimaryColumn()
    readonly opt_cod_cliente: string;
    @PrimaryColumn()
    readonly opt_seq_convidado: string;
    @PrimaryColumn()
    readonly opt_finalidade: string;
    @Column() 
    readonly opt_tipo:  string;
    @Column()
    readonly opt_url: string;
}

export { ViewWebhookCli };
