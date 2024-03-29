import { getCustomRepository } from "typeorm";
import { SuporteRep } from "../../repositories/SuporteRep";

interface iSuporte {
    seq?: any;
    data?: any;
    hora?: any;
    opt_cod_cliente?: any;
    status?: any;
    prioridade?: any;
    atendente?: string;
    titulo?: any;
    descricao?: any;
    contato?: any;
    resolucao?: any;
    cod_setor?: any;
}

class consultaSuporte {
    async execute({ seq }: iSuporte) {
        const suporteRep = getCustomRepository(SuporteRep);

        if (!seq) {
            throw new Error("Não Foi Informado o Identificador do Suporte!");
        }

        const Suporte = await suporteRep.findOne({
            where: { seq },
            relations: ["cliente", "setor", "Usuario"],
        });

        return Suporte;
    }
}

export { consultaSuporte };
