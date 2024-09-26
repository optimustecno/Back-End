import { getCustomRepository } from "typeorm";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";


interface iCliProds {
    opt_cod_cliente: string;
}

class ConsultaGruposDev {
    async execute({ opt_cod_cliente }: iCliProds) {

        const gruposRep = getCustomRepository(GrupoProdRep);

        const Grupos = await gruposRep.find(
            { where: {opt_cod_cliente} }
        );

        return Grupos;
    }
}

export { ConsultaGruposDev };
