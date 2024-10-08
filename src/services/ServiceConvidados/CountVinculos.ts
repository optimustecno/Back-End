import { getCustomRepository, Like } from "typeorm";
import { ViewVinculosRep } from "../../repositories/ViewVinculosRep";

interface iFiltro {
    opt_aprovado: any;
    opt_nome_convidado: any;
}

class ServiceContaVinculos {
    async execute({ opt_aprovado, opt_nome_convidado }: iFiltro) {
        const guestRep = getCustomRepository(ViewVinculosRep);
        var Guests;

        if (!opt_aprovado) {
            opt_aprovado = "";
        }
        if (!opt_nome_convidado){
            opt_nome_convidado = "";
        }

        Guests = await guestRep.count({
            where: {
                aprov: Like(`%${opt_aprovado}%`),
                opt_nome_convidado: Like(`%${opt_nome_convidado}%`)
            },
        });

        if (!Guests) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Guests;
    }
}

export { ServiceContaVinculos };
