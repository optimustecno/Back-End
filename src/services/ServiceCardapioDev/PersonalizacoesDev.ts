import { getCustomRepository, getRepository } from "typeorm";
import { GrupoPersonalizaRep } from "../../repositories/GrupoPersonalizaRep";

interface iCliProds {
    opt_cod_cliente: string;
    cod_grupo: string;
}

class ConsultaPersonalizacoesDev {
    async execute({ opt_cod_cliente, cod_grupo }: iCliProds) {
        const adicionaisRep = getCustomRepository(GrupoPersonalizaRep);

        const adicionais = await adicionaisRep.find({
            where: { opt_cod_cliente, cod_grupo },
            relations: ["adicionais"]
        });

        return adicionais;
    }
}

export { ConsultaPersonalizacoesDev };
