import { getCustomRepository } from "typeorm";
import { SuporteRep } from "../../repositories/SuporteRep";
import { AtualizaUUID } from "../../utils/AtualizaUUIDCli";

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
        const { opt_cod_cliente } = Suporte
        const At = new AtualizaUUID();
        const atualizou = await At.execute({opt_cod_cliente: opt_cod_cliente.toString()});

        return Suporte;
    }
}

export { consultaSuporte };
