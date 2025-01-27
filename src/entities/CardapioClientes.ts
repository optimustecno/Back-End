import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_cardapio_cliente")
class CardapioClientes {
    @PrimaryColumn()
    seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    cor_primaria: string;
    @Column()
    cor_secundaria: string;
    @Column()
    cor_destaque_prod: string;
    @Column()
    cor_fonte: string;
    @Column()
    logo_svg: string;
    @Column()
    cor_botao: string;
    @Column()
    opt_uid_cli: string;
}

export { CardapioClientes };
