import { getCustomRepository, Like } from "typeorm";
import { ViewLinkGruposRep } from "../../repositories/ViewLinkGruposRep";

interface iCliProds {
    id_cliente: string;
}

class ConsultaLinkGruposDev {
    async execute({ id_cliente }: iCliProds) {
        const viewGruposRep = getCustomRepository(ViewLinkGruposRep)
        
        const Grupos = await viewGruposRep.find({
            where: { id_cliente },
        });

        return Grupos;
    }
}

export { ConsultaLinkGruposDev };
