import { getCustomRepository, Like } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iFiltro {
    opt_aprovado: any;
}

class ServiceContaVinculos {
    async execute({ opt_aprovado }: iFiltro) {
        const guestRep = getCustomRepository(ConvidadosRep);
        var Guests;

        if (!opt_aprovado) {
            opt_aprovado = "";
        }

        Guests = await guestRep.count({
            where: {
                opt_aprovado: Like(`%${opt_aprovado}%`),
            },
        });

        if (!Guests) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Guests;
    }
}

export { ServiceContaVinculos };
