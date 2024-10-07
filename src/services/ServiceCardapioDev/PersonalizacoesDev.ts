import { getCustomRepository, getRepository, Like } from "typeorm";
import { GrupoPersonalizaRep } from "../../repositories/GrupoPersonalizaRep";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";

interface iCliProds {
    opt_cod_cliente: string;
    cod_grupo?: any;
}

class ConsultaPersonalizacoesDev {
    async execute({ opt_cod_cliente, cod_grupo }: iCliProds) {
        const adicionaisRep = getCustomRepository(GrupoPersonalizaRep);
        const grupoProdRep = getCustomRepository(GrupoProdRep);

        if (!cod_grupo) {
            cod_grupo = "";
        }

        const adicionais = await grupoProdRep.find(
            {
                where: {opt_cod_cliente, cod_grupo: Like(`%${cod_grupo}%`)}, 
                relations: ["Personalizacoes", "Personalizacoes.Itens"],
                // relations: [{grupoPersoanlizacao: {adicionais:true}}]
            }
        )

        return adicionais;
    }
}

export { ConsultaPersonalizacoesDev };
