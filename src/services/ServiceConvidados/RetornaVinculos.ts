import { getCustomRepository, Like } from "typeorm";
import { ViewVinculosRep } from "../../repositories/ViewVinculosRep";

interface iFiltro {
    opt_seq_convidado: any;
}

class ServiceListaVinculos {
    async execute({ opt_seq_convidado }: iFiltro) {
        const vinculosRep = getCustomRepository(ViewVinculosRep);
        var Guests;

        if (!opt_seq_convidado) {
            throw new Error("Desenvolvedor Não Informado");
        }

        Guests = await vinculosRep.find({
            where: {
                opt_seq_convidado
            },
            order: { data_insercao: "ASC", aprov: "ASC" },
        });

        if (!Guests) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Guests;
    }
}

export { ServiceListaVinculos };
