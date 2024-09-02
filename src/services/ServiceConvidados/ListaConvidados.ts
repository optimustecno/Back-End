import { getCustomRepository, Like } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iFiltro {
    opt_aprovado: any;
    offset?: any;
    take?: any;
}

class ServiceListaConvidados {
    async execute({ opt_aprovado, offset, take }: iFiltro) {
        const guestRep = getCustomRepository(ConvidadosRep);
        var Guests;

        if (!opt_aprovado) {
            opt_aprovado = "";
        }

        Guests = await guestRep.find({
            where: {
                opt_aprovado: Like(`%${opt_aprovado}%`),
            },
            order: { opt_nome_convidado: "ASC", opt_tipo_convidado: "ASC" },
            skip: offset,
            take: take,
        });

        if (!Guests) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Guests;
    }
}

export { ServiceListaConvidados };
