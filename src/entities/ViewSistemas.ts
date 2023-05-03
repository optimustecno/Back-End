import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("opt_view_sistemas")
class viewSistemas {
    @PrimaryColumn()
    readonly opt_nome_sistema: string;
}

export { viewSistemas };
