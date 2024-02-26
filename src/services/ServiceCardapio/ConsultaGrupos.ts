import { getCustomRepository } from "typeorm";
import { ViewGruposProdRep } from "../../repositories/ViewGrupoProdRep";

interface iCliProds {
    opt_cod_cliente: string;
}

class ConsultaGrupos {
    async execute({ opt_cod_cliente }: iCliProds) {
        const gruposRep = getCustomRepository(ViewGruposProdRep);

        const Grupos = await gruposRep.find(
            { opt_cod_cliente }
        );

        return Grupos;
    }
}

export { ConsultaGrupos };
