import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_emp_link")
class ViewEmpLink {
    @PrimaryColumn()
    readonly opt_cod_cliente: string;
    @PrimaryColumn()
    readonly opt_cod_empresa: string;
    @Column()
    readonly opt_nome_cliente: string;
    @Column()
    readonly opt_cidade: string;
    @Column()
    readonly opt_dns: string;
    @Column()
    readonly opt_banco: string;
    @Column()
    readonly opt_user: string;
    @Column()
    readonly opt_password: string;
}

export { ViewEmpLink };
