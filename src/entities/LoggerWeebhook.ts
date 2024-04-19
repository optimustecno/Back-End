import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_logger_webhook")
class Loggerwebhook {
    @PrimaryColumn()
    readonly seq: string;
    @Column()
    readonly opt_origem: string;
    @Column()
    readonly opt_data: string;
    @Column()
    readonly opt_hora: string;
    @Column()
    readonly opt_payload: string;
}

export { Loggerwebhook };
