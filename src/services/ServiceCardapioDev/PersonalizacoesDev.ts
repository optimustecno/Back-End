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

        // const adicionais = await getRepository(GrupoPersonalizaRep)
        //     .createQueryBuilder("opt_grupo_personalizacao")
        //     .leftJoin('opt_grupo_personalizacao.cod_grupo_adicional', 'cod_grupo_adicional')
        //     .where('user.id=:id',{id: userId})
        //     .distinct(true)
        //     .getMany();

        return adicionais;
    }
}

export { ConsultaPersonalizacoesDev };
