import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_contatos")
class ViewContatos {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    readonly opt_nome_cliente: string;
    @Column()
    readonly opt_contato: string;
    @Column()
    readonly tipo: string;
    @Column()
    readonly opt_fone: number;
    @Column()
    readonly opt_chave_remota: string;
    @Column()
    readonly opt_cargo: string;
    @Column()
    readonly opt_whatsapp: string;
    @Column()
    readonly opt_boletos: string;
    @Column()
    readonly opt_cod_cli: string;
}

export { ViewContatos };
