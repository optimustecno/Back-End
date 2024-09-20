import { getCustomRepository, Like } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iFiltro {
    opt_aprovado: any;
    opt_tipo_convidado?: any;
    offset?: any;
    take?: any;
}

class ServiceListaConvidados {
    async execute({ opt_aprovado, offset, take, opt_tipo_convidado }: iFiltro) {
        const guestRep = getCustomRepository(ConvidadosRep);
        var Guests;

        if (!opt_aprovado) {
            opt_aprovado = "";
        }

        if (!opt_tipo_convidado) {
            opt_tipo_convidado = "";
        }

        Guests = await guestRep.find({
            where: {
                opt_aprovado: Like(`%${opt_aprovado}%`),
                opt_tipo_convidado: Like(`%${opt_tipo_convidado}%`),
            },
            order: { opt_nome_convidado: "ASC", opt_tipo_convidado: "ASC" },
            skip: offset,
            take: take,
        });

        return Guests;
    }
}

export { ServiceListaConvidados };
