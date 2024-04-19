import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_cad_app")
class CadApp {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    opt_cod_cliente: string;
    @Column()
    app: string;
    @Column()
    login: string;
    @Column()
    senha: string;
    @Column()
    token: string;
    @Column()
    rede: string;
    @Column()
    hora_inicio: string;
    @Column()
    hora_fim: string;
    @Column()
    tempo_retirada: string;
    @Column()
    tempo_entrega: string;
    @Column()
    tempo_automatico: string;
    @Column()
    permite_alterar_tempo: string;
    @Column()
    informa_saida_entrega: string;
    @Column()
    validade_token: string;
    @Column()
    aceita_valor_maior: string;
}

export { CadApp };
