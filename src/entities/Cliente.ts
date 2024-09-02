import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_clientes")
class Clientes {
    @PrimaryColumn()
    opt_cod_cliente: string;
    @Column()
    opt_nome_cliente: string;
    @Column()
    opt_endereco: string;
    @Column()
    opt_bairro: string;
    @Column()
    opt_cep: string;
    @Column()
    opt_cidade: string;
    @Column()
    opt_uf: string;
    @Column()
    opt_bloqueado: string;
    @Column()
    opt_mensagem_licenca: string;
    @Column()
    opt_nome_sistema: string;
    @Column()
    opt_versao: string;
    @Column()
    opt_versao_adm: string;
    @Column()
    opt_ultimo_acesso: string;
    @Column()
    opt_login_wabiz: string;
    @Column()
    opt_acesso_wabiz: string;
    @Column()
    opt_token_uai_rango: string;
    @Column()
    opt_dns: string;
    @Column()
    opt_banco: string;
    @Column()
    opt_user: string;
    @Column()
    opt_password: string;
    @Column()
    opt_data_sinc: Date;
    @Column()
    opt_odbc: string;
    @Column()
    opt_doc1: string;
    @Column()
    opt_doc2: string;
    @Column()
    data_cancelamento: string;
    @Column()
    opt_cardapio_digital: string;
    @Column()
    opt_uid_cli: string;
}

export { Clientes };
