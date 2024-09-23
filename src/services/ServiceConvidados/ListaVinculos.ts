import { getCustomRepository, Like } from "typeorm";
import { ViewVinculosRep } from "../../repositories/ViewVinculosRep";

interface iFiltro {
    opt_nome_convidado?: any;
    opt_aprovado?: any;
    offset?: any;
    take?: any;
}

class ServiceAdmListaVinculos {
    async execute({ opt_aprovado, opt_nome_convidado, offset, take }: iFiltro) {
        const vinculosRep = getCustomRepository(ViewVinculosRep);
        var Vinculos;

        if (!opt_aprovado) {
            opt_aprovado = "";
        }

        if (!opt_nome_convidado) {
            opt_nome_convidado = "";
        }

        Vinculos = await vinculosRep.find({
            where: {
                aprov: Like(`%${opt_aprovado}%`),
                opt_nome_convidado: Like(`%${opt_nome_convidado}%`),
            },
            order: { opt_nome_convidado: "ASC", data_insercao: "ASC" },
            skip: offset,
            take: take,
        });

        return Vinculos;
    }
}

export { ServiceAdmListaVinculos };
